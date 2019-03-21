const Bloom = require('./bloom')
const bloom = new Bloom()

class NBP {
  constructor () {
    const bloom = new Bloom()
    this.debug = {
      bloom,
      version: 1
    }
  }

  init (wordlist = 'mostcommon_10000', path = 'collections/', cache = true) {
    let wordlistSplit = wordlist.split('_')
    let wordlistLength = wordlistSplit[wordlistSplit.length - 1]

    if (typeof wordlistLength === 'number') {
      console.error('[NBP] Provided wordlist file must match the format [list description]_[list length]')
      console.error('i.e. mostcommon_10000')

      return false
    };

    if (path.slice(-1) !== '/') {
      path += '/'
    };

    if (typeof localStorage !== 'undefined' && typeof localStorage[`NBP_${wordlist}`] !== 'undefined' && cache) {
      bloom.init(localStorage[`NBP_${wordlist}`], wordlistLength)

      return
    };

    let ajax = new XMLHttpRequest()
    let bloom_contents = ''

    ajax.onreadystatechange = function () {
      if (ajax.readyState === XMLHttpRequest.DONE) {
        if (ajax.status === 200) {
          bloom_contents = ajax.responseText

          if (cache) {
            localStorage[`NBP_${wordlist}`] = bloom_contents
          };

          bloom.init(bloom_contents, wordlistLength)

          initState = true
        } else {
          console.error(`[NBP] Error retrieving bloom contents. Error code: ${ajax.status}`)
          console.error(`[NBP] Ensure that the word list is located at ${path}${wordlist}`)
          console.error(`[NBP] Additionally, file must match the format [list description]_[list length]`)
        }
      };
    }

    ajax.open('GET', `${path}${wordlist}`, true)
    ajax.send(null)
  }

  isCommonPassword (password) {
    if (password == '') return false

    return bloom.checkEntry(password) || bloom.checkEntry(password.toLowerCase())
  }

  testInit (bloomContent, wordlistLength) {
    bloom.init(bloomContent, wordlistLength)
  }
}
module.exports = NBP
