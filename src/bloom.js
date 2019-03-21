// const LZString = (function () { function o (o, r) { if (!t[o]) { t[o] = {}; for (let n = 0; n < o.length; n++)t[o][o.charAt(n)] = n } return t[o][r] } let r = String.fromCharCode; let n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='; let e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$'; let t = {}; let i = { compressToBase64: function (o) { if (o == null) return ''; let r = i._compress(o, 6, function (o) { return n.charAt(o) }); switch (r.length % 4) { default:case 0:return r; case 1:return r + '==='; case 2:return r + '=='; case 3:return r + '=' } }, decompressFromBase64: function (r) { return r == null ? '' : r == '' ? null : i._decompress(r.length, 32, function (e) { return o(n, r.charAt(e)) }) }, compressToUTF16: function (o) { return o == null ? '' : i._compress(o, 15, function (o) { return r(o + 32) }) + ' ' }, decompressFromUTF16: function (o) { return o == null ? '' : o == '' ? null : i._decompress(o.length, 16384, function (r) { return o.charCodeAt(r) - 32 }) }, compressToUint8Array: function (o) { for (let r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) { let s = r.charCodeAt(e); n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256 } return n }, decompressFromUint8Array: function (o) { if (o === null || void 0 === o) return i.decompress(o); for (let n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++)n[e] = 256 * o[2 * e] + o[2 * e + 1]; let s = []; return n.forEach(function (o) { s.push(r(o)) }), i.decompress(s.join('')) }, compressToEncodedURIComponent: function (o) { return o == null ? '' : i._compress(o, 6, function (o) { return e.charAt(o) }) }, decompressFromEncodedURIComponent: function (r) { return r == null ? '' : r == '' ? null : (r = r.replace(/ /g, '+'), i._decompress(r.length, 32, function (n) { return o(e, r.charAt(n)) })) }, compress: function (o) { return i._compress(o, 16, function (o) { return r(o) }) }, _compress: function (o, r, n) { if (o == null) return ''; let e; let t; let i; let s = {}; let p = {}; let u = ''; let c = ''; let a = ''; let l = 2; let f = 3; let h = 2; let d = []; let m = 0; let v = 0; for (i = 0; i < o.length; i += 1) if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c))a = c; else { if (Object.prototype.hasOwnProperty.call(p, a)) { if (a.charCodeAt(0) < 256) { for (e = 0; h > e; e++)m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = a.charCodeAt(0), e = 0; e < 8; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; h > e; e++)m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = a.charCodeAt(0), e = 0; e < 16; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 }l--, l == 0 && (l = Math.pow(2, h), h++), delete p[a] } else for (t = s[a], e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; l--, l == 0 && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u) } if (a !== '') { if (Object.prototype.hasOwnProperty.call(p, a)) { if (a.charCodeAt(0) < 256) { for (e = 0; h > e; e++)m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++; for (t = a.charCodeAt(0), e = 0; e < 8; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 } else { for (t = 1, e = 0; h > e; e++)m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0; for (t = a.charCodeAt(0), e = 0; e < 16; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1 }l--, l == 0 && (l = Math.pow(2, h), h++), delete p[a] } else for (t = s[a], e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; l--, l == 0 && (l = Math.pow(2, h), h++) } for (t = 2, e = 0; h > e; e++)m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1; for (;;) { if (m <<= 1, v == r - 1) { d.push(n(m)); break }v++ } return d.join('') }, decompress: function (o) { return o == null ? '' : o == '' ? null : i._decompress(o.length, 32768, function (r) { return o.charCodeAt(r) }) }, _decompress: function (o, n, e) { let t; let i; let s; let p; let u; let c; let a; let l; let f = []; let h = 4; let d = 4; let m = 3; let v = ''; let w = []; let A = { val: e(0), position: n, index: 1 }; for (i = 0; i < 3; i += 1)f[i] = i; for (p = 0, c = Math.pow(2, 2), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; switch (t = p) { case 0:for (p = 0, c = Math.pow(2, 8), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; l = r(p); break; case 1:for (p = 0, c = Math.pow(2, 16), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; l = r(p); break; case 2:return '' } for (f[3] = l, s = l, w.push(l); ;) { if (A.index > o) return ''; for (p = 0, c = Math.pow(2, m), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; switch (l = p) { case 0:for (p = 0, c = Math.pow(2, 8), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; f[d++] = r(p), l = d - 1, h--; break; case 1:for (p = 0, c = Math.pow(2, 16), a = 1; a != c;)u = A.val & A.position, A.position >>= 1, A.position == 0 && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1; f[d++] = r(p), l = d - 1, h--; break; case 2:return w.join('') } if (h == 0 && (h = Math.pow(2, m), m++), f[l])v = f[l]; else { if (l !== d) return null; v = s + s.charAt(0) }w.push(v), f[d++] = s + v.charAt(0), h--, s = v, h == 0 && (h = Math.pow(2, m), m++) } } }; return i }()); typeof define === 'function' && define.amd ? define(function () { return LZString }) : typeof module !== 'undefined' && module != null && (module.exports = LZString),
const LZString = require('lz-string')

class Bloom {
  constructor () {
    this.initalized = false
    this.hashRounds = null
    this.bitArray = null
    this.bitArrayLength = null
    this.initState = false

    this.hashes = {
      djb2: function (str, bitArrayLength) {
        let hash = 5381

        for (let len = str.length, count = 0; count < len; count++) {
          hash = hash * 33 ^ str.charCodeAt(count)
        };

        return (hash >>> 0) % bitArrayLength
      },
      sdbm: function (str, bitArrayLength) {
        let hash = 0

        for (let len = str.length, count = 0; count < len; count++) {
          hash = str.charCodeAt(count) + (hash << 6) + (hash << 16) - hash
        };

        return (hash >>> 0) % bitArrayLength
      },
      getIndices: function (str, bitArrayLength, hashRounds, hashFns) {
        let hashes = []

        hashes.push(hashFns.djb2(str, bitArrayLength))
        hashes.push(hashFns.sdbm(str, bitArrayLength))

        for (let round = 2; round <= hashRounds; round++) {
          let new_hash = (hashes[0] + (round * hashes[1]) + (round ^ 2)) % bitArrayLength

          hashes.push(new_hash)
        };

        return hashes
      }
    }
  }

  /*
    * Bloom filter functions
    */

  init (contents, listLength) {
    let raw_data = LZString.decompressFromUTF16(contents)
    let data = raw_data.split(',')

    this.bitArrayLength = data.length * 8

    this.hashRounds = Math.round(Math.log(2.0) * this.bitArrayLength / listLength)

    this.bitArray = new Uint8Array(data)

    this.initalized = true
  }

  checkEntry (str) {
    if (!this.initalized) {
      throw new Error('[NBP] Bloom filter has not been initalized, cannot run.')
    };

    let indices = this.hashes.getIndices(str, this.bitArrayLength, this.hashRounds, this.hashes)

    for (let i = indices.length - 1; i >= 0; i--) {
      let extra_indices = indices[i] % 8
      let index = (indices[i] - extra_indices) / 8

      if (extra_indices != 0 && (this.bitArray[index] & (128 >> (extra_indices - 1))) == 0) {
        return false
      } else if (extra_indices == 0 && (this.bitArray[index] & 1) == 0) {
        return false
      }
    };

    return true
  }
}

module.exports = Bloom
