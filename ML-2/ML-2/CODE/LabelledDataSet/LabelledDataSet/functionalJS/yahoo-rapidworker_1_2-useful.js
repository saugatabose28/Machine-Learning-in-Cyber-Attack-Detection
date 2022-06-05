function base64(b) {
    if ("undefined" != typeof btoa) {
        return btoa(b);
    }
    for (var q, k, d, j, c, h, m, g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", p = [], v = 0; b.length > v;) {
        q = b.charCodeAt(v++), k = b.charCodeAt(v++), d = b.charCodeAt(v++), j = q>>2, c = (3 & q)<<4 | k>>4, h = (15 & k)<<2 | d>>6, m = 63 & d, isNaN(k) ? h = m = 64 : isNaN(d) && (m = 64), p.push(g.charAt(j) + g.charAt(c) + g.charAt(h) + g.charAt(m));
    }
    return p.join("");
}
function lzw_encode(b) {
    for (var q, k = {}, d = (b + "").split(""), j = [], c = d[0], h = 256, m = d.length, g = 1; m > g; g++) {
        q = d[g], null != k[c + q] ? c += q : (j.push(c.length > 1 ? k[c] : c.charCodeAt(0)), k[c + q] = h, h++, c = q);
    }
    j.push(c.length > 1 ? k[c] : c.charCodeAt(0));
    for (var p = j.length, g = 0; p > g; g++) {
        j[g] = String.fromCharCode(j[g]);
    }
    return j.join("");
}(function(aQ) {
    var aN = 32768, a9 = 0, aW = 1, a8 = 2, aV = 6, a4=!0, bg = 32768, a1 = 64, aM = 8192, aO = 2 * aN, bc = 3, a6 = 258, ba = 16, bY = 8192, bh = 13;
    bY > bg && postMessage("error: zip_INBUFSIZ is too small"), aN<<1 > 1<<ba && postMessage("error: zip_WSIZE is too large"), bh > ba - 1 && postMessage("error: zip_HASH_BITS is too large"), (8 > bh || 258 != a6) && postMessage("error: Code too clever");
    var aL, aG, aI, aY, a7, aH, bf, aU, bI, bV, bX, aF, bN, bz, bn, bU, a3, a2, bF, bx, bP, bs, bk, bS, bR, bu, bp, aT, bQ, bL, bK, bJ, bC, bB, bA, br, bl, cg, cm, bw, cz, bm, ci, aJ, aD, bW, ck, aR, b5, aC, bi, an, cj, cx, aw, b8, ah = bY, b2 = 1<<bh, b0 = b2 - 1, cp = aN - 1, bd = 0, ar = 4096, cn = a6 + bc + 1, bj = aN - cn, b1 = 1, bE = 15, bo = 7, ai = 29, ak = 256, aE = 256, ap = ak + 1 + ai, aa = 30, b6 = 19, cr = 16, b3 = 17, bH = 18, cc = 2 * ap + 1, aq = parseInt((bh + bc - 1) / bc), ab = null, ca = function() {
        this.fc = 0, this.dl = 0;
    }, az = function() {
        this.dyn_tree = null, this.static_tree = null, this.extra_bits = null, this.extra_base = 0, this.elems = 0, this.max_length = 0, this.max_code = 0;
    }, ad = function(b, a, c, d) {
        this.good_length = b, this.max_lazy = a, this.nice_length = c, this.max_chain = d;
    }, cl = function() {
        this.next = null, this.len = 0, this.ptr = Array(aM), this.off = 0;
    }, aK = Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0), au = Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13), af = Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7), by = Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), aS = Array(new ad(0, 0, 0, 0), new ad(4, 4, 8, 4), new ad(4, 5, 16, 8), new ad(4, 6, 32, 32), new ad(4, 4, 16, 16), new ad(8, 16, 32, 32), new ad(8, 16, 128, 128), new ad(8, 32, 128, 256), new ad(32, 128, 258, 1024), new ad(32, 258, 258, 4096)), ax = function(b) {
        var a;
        if (b ? 1 > b ? b = 1 : b > 9 && (b = 9) : b = aV, bp = b, aY=!1, bk=!1, null == ab) {
            for (aL = aG = aI = null, ab = Array(aM), aU = Array(aO), bI = Array(ah), bV = Array(bg + a1), bX = Array(1<<ba), bL = Array(cc), a = 0; cc > a; a++) {
                bL[a] = new ca;
            }
            for (bK = Array(2 * aa + 1), a = 0; 2 * aa + 1 > a; a++) {
                bK[a] = new ca;
            }
            for (bJ = Array(ap + 2), a = 0; ap + 2 > a; a++) {
                bJ[a] = new ca;
            }
            for (bC = Array(aa), a = 0; aa > a; a++) {
                bC[a] = new ca;
            }
            for (bB = Array(2 * b6 + 1), a = 0; 2 * b6 + 1 > a; a++) {
                bB[a] = new ca;
            }
            bA = new az, br = new az, bl = new az, cg = Array(bE + 1), cm = Array(2 * ap + 1), bm = Array(2 * ap + 1), ci = Array(a6 - bc + 1), aJ = Array(512), aD = Array(ai), bW = Array(aa), ck = Array(parseInt(bY / 8));
        }
    }, a0 = function(a) {
        a.next = aL, aL = a;
    }, cu = function() {
        var a;
        return null != aL ? (a = aL, aL = aL.next) : a = new cl, a.next = null, a.len = a.off = 0, a;
    }, bq = function(a) {
        return bX[aN + a];
    }, cv = function(a, b) {
        return bX[aN + a] = b;
    }, bT = function(a) {
        ab[aH + a7++] = a, aH + a7 == aM && aj();
    }, ag = function(a) {
        a&=65535, aM - 2 > aH + a7 ? (ab[aH + a7++] = 255 & a, ab[aH + a7++] = a>>>8) : (bT(255 & a), bT(a>>>8));
    }, bM = function() {
        bn = (bn<<aq^255 & aU[bP + bc - 1]) & b0, bU = bq(bn), bX[bP & cp] = bU, cv(bn, bP);
    }, co = function(b, a) {
        ao(a[b].fc, a[b].dl);
    }, a5 = function(a) {
        return 255 & (256 > a ? aJ[a] : aJ[256 + (a>>7)]);
    }, aX = function(b, a, c) {
        return b[c].fc > b[a].fc || b[a].fc == b[c].fc && bm[c] >= bm[a];
    }, b4 = function(b, a, c) {
        var d;
        for (d = 0; c > d && aw.length > b8; d++) {
            b[a + d] = 255 & aw.charCodeAt(b8++);
        }
        return d;
    }, cs = function() {
        var a;
        for (a = 0; b2 > a; a++) {
            bX[aN + a] = 0;
        }
        if (bu = aS[bp].max_lazy, aT = aS[bp].good_length, a4 || (bQ = aS[bp].nice_length), bR = aS[bp].max_chain, bP = 0, bz = 0, bS = b4(aU, 0, 2 * aN), 0 >= bS) {
            return bk=!0, bS = 0, void 0;
        }
        for (bk=!1; cn > bS&&!bk;) {
            cd();
        }
        for (bn = 0, a = 0; bc - 1 > a; a++) {
            bn = (bn<<aq^255 & aU[a]) & b0;
        }
    }, bb = function(b) {
        var m, i, d = bR, h = bP, c = bx, j = bP > bj ? bP - bj: bd, g = bP + a6, k = aU[h + c - 1], p = aU[h + c];
        bx >= aT && (d>>=2);
        do {
            if (m = b, aU[m + c] == p && aU[m + c - 1] == k && aU[m] == aU[h] && aU[++m] == aU[h + 1]) {
                h += 2, m++;
                do {}
                while (aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && aU[++h] == aU[++m] && g > h);
                if (i = a6 - (g - h), h = g - a6, i > c) {
                    if (bs = b, c = i, a4) {
                        if (i >= a6) {
                            break;
                        }
                    } else {
                        if (i >= bQ) {
                            break;
                        }
                    }
                    k = aU[h + c - 1], p = aU[h + c];
                }
            }
        }
        while ((b = bX[b & cp]) > j && 0!=--d);
        return c;
    }, cd = function() {
        var a, b, c = aO - bS - bP;
        if ( - 1 == c) {
            c--;
        } else {
            if (bP >= aN + bj) {
                for (a = 0; aN > a; a++) {
                    aU[a] = aU[a + aN];
                }
                for (bs -= aN, bP -= aN, bz -= aN, a = 0; b2 > a; a++) {
                    b = bq(a), cv(a, b >= aN ? b - aN : bd);
                }
                for (a = 0; aN > a; a++) {
                    b = bX[a], bX[a] = b >= aN ? b - aN : bd;
                }
                c += aN;
            }
        }
        bk || (a = b4(aU, bP + bS, c), 0 >= a ? bk=!0 : bS += a);
    }, aP = function() {
        for (; 0 != bS && null == aG;) {
            var a;
            if (bM(), bU != bd && bj >= bP - bU && (bF = bb(bU), bF > bS && (bF = bS)), bF >= bc) {
                if (a = bZ(bP - bs, bF - bc), bS -= bF, bu >= bF) {
                    bF--;
                    do {
                        bP++, bM();
                    }
                    while (0!=--bF);
                    bP++;
                } else {
                    bP += bF, bF = 0, bn = 255 & aU[bP], bn = (bn<<aq^255 & aU[bP + 1]) & b0;
                }
            } else {
                a = bZ(0, 255 & aU[bP]), bS--, bP++;
            }
            for (a && (b9(0), bz = bP); cn > bS&&!bk;) {
                cd();
            }
        }
    }, bD = function() {
        for (; 0 != bS && null == aG;) {
            if (bM(), bx = bF, a3 = bs, bF = bc - 1, bU != bd && bu > bx && bj >= bP - bU && (bF = bb(bU), bF > bS && (bF = bS), bF == bc && bP - bs > ar && bF--), bx >= bc && bx >= bF) {
                var a;
                a = bZ(bP - 1 - a3, bx - bc), bS -= bx - 1, bx -= 2;
                do {
                    bP++, bM();
                }
                while (0!=--bx);
                a2 = 0, bF = bc - 1, bP++, a && (b9(0), bz = bP);
            } else {
                0 != a2 ? (bZ(0, 255 & aU[bP - 1]) && (b9(0), bz = bP), bP++, bS--) : (a2 = 1, bP++, bS--);
            }
            for (; cn > bS&&!bk;) {
                cd();
            }
        }
    }, av = function() {
        bk || (aF = 0, bN = 0, aB(), cs(), aG = null, a7 = 0, aH = 0, a2 = 0, 3 >= bp ? (bx = bc - 1, bF = 0) : (bF = bc - 1, a2 = 0, a2 = 0), bf=!1);
    }, cq = function(b, a, c) {
        var d;
        return aY || (av(), aY=!0, 0 != bS) ? (d = ac(b, a, c)) == c ? c : bf ? d : (3 >= bp ? aP() : bD(), 0 == bS && (0 != a2 && bZ(0, 255 & aU[bP - 1]), b9(1), bf=!0), d + ac(b, d + a, c - d)) : (bf=!0, 0);
    }, ac = function(c, b, g) {
        var j, d, h;
        for (j = 0; null != aG && g > j;) {
            for (d = g - j, d > aG.len && (d = aG.len), h = 0; d > h; h++) {
                c[b + j + h] = aG.ptr[aG.off + h];
            }
            if (aG.off += d, aG.len -= d, j += d, 0 == aG.len) {
                var a;
                a = aG, aG = aG.next, a0(a);
            }
        }
        if (j == g) {
            return j;
        }
        if (a7 > aH) {
            for (d = g - j, d > a7 - aH && (d = a7 - aH), h = 0; d > h; h++) {
                c[b + j + h] = ab[aH + h];
            }
            aH += d, j += d, a7 == aH && (a7 = aH = 0);
        }
        return j;
    }, aB = function() {
        var b, a, d, g, c;
        if (0 == bC[0].dl) {
            for (bA.dyn_tree = bL, bA.static_tree = bJ, bA.extra_bits = aK, bA.extra_base = ak + 1, bA.elems = ap, bA.max_length = bE, bA.max_code = 0, br.dyn_tree = bK, br.static_tree = bC, br.extra_bits = au, br.extra_base = 0, br.elems = aa, br.max_length = bE, br.max_code = 0, bl.dyn_tree = bB, bl.static_tree = null, bl.extra_bits = af, bl.extra_base = 0, bl.elems = b6, bl.max_length = bo, bl.max_code = 0, d = 0, g = 0; ai - 1 > g; g++) {
                for (aD[g] = d, b = 0; 1<<aK[g] > b; b++) {
                    ci[d++] = g;
                }
            }
            for (ci[d - 1] = g, c = 0, g = 0; 16 > g; g++) {
                for (bW[g] = c, b = 0; 1<<au[g] > b; b++) {
                    aJ[c++] = g;
                }
            }
            for (c>>=7; aa > g; g++) {
                for (bW[g] = c<<7, b = 0; 1<<au[g] - 7 > b; b++) {
                    aJ[256 + c++] = g;
                }
            }
            for (a = 0; bE >= a; a++) {
                cg[a] = 0;
            }
            for (b = 0; 143 >= b;) {
                bJ[b++].dl = 8, cg[8]++;
            }
            for (; 255 >= b;) {
                bJ[b++].dl = 9, cg[9]++;
            }
            for (; 279 >= b;) {
                bJ[b++].dl = 7, cg[7]++;
            }
            for (; 287 >= b;) {
                bJ[b++].dl = 8, cg[8]++;
            }
            for (b7(bJ, ap + 1)
                , b = 0;
            aa > b;
            b++) {
                bC[b].dl = 5, bC[b].fc = aZ(b, 5);
            }
            ch();
        }
    }, ch = function() {
        var a;
        for (a = 0; ap > a; a++) {
            bL[a].fc = 0;
        }
        for (a = 0; aa > a; a++) {
            bK[a].fc = 0;
        }
        for (a = 0; b6 > a; a++) {
            bB[a].fc = 0;
        }
        bL[aE].fc = 1, cj = cx = 0, aR = b5 = aC = 0, bi = 0, an = 1;
    }, al = function(b, a) {
        for (var c = cm[a], d = a<<1; bw >= d && (bw > d && aX(b, cm[d + 1], cm[d]) && d++, !aX(b, c, cm[d]));) {
            cm[a] = cm[d], a = d, d<<=1;
        }
        cm[a] = c;
    }, cb = function(b) {
        var A, v, j, q, g, m, y = b.dyn_tree, k = b.extra_bits, z = b.extra_base, B = b.max_code, x = b.max_length, p = b.static_tree, w = 0;
        for (q = 0; bE >= q; q++) {
            cg[q] = 0;
        }
        for (y[cm[cz]].dl = 0, A = cz + 1; cc > A; A++) {
            v = cm[A], q = y[y[v].dl].dl + 1, q > x && (q = x, w++), y[v].dl = q, v > B || (cg[q]++, g = 0, v >= z && (g = k[v - z]), m = y[v].fc, cj += m * (q + g), null != p && (cx += m * (p[v].dl + g)));
        }
        if (0 != w) {
            do {
                for (q = x - 1; 0 == cg[q];) {
                    q--;
                }
                cg[q]--, cg[q + 1] += 2, cg[x]--, w -= 2;
            }
            while (w > 0);
            for (q = x; 0 != q; q--) {
                for (v = cg[q]; 0 != v;) {
                    j = cm[--A], j > B || (y[j].dl != q && (cj += (q - y[j].dl) * y[j].fc, y[j].fc = q), v--);
                }
            }
        }
    }, b7 = function(c, b) {
        var g, j, d = Array(bE + 1), h = 0;
        for (g = 1; bE >= g; g++) {
            h = h + cg[g - 1]<<1, d[g] = h;
        }
        for (j = 0; b >= j; j++) {
            var a = c[j].dl;
            0 != a && (c[j].fc = aZ(d[a]++, a));
        }
    }, cy = function(b) {
        var p, k, d = b.dyn_tree, j = b.static_tree, c = b.elems, h =- 1, m = c;
        for (bw = 0, cz = cc, p = 0; c > p; p++) {
            0 != d[p].fc ? (cm[++bw] = h = p, bm[p] = 0) : d[p].dl = 0;
        }
        for (; 2 > bw;) {
            var g = cm[++bw] = 2 > h?++h:
            0;
            d[g].fc = 1, bm[g] = 0, cj--, null != j && (cx -= j[g].dl);
        }
        for (b.max_code = h, p = bw>>1; p >= 1; p--) {
            al(d, p);
        }
        do {
            p = cm[b1], cm[b1] = cm[bw--], al(d, b1), k = cm[b1], cm[--cz] = p, cm[--cz] = k, d[m].fc = d[p].fc + d[k].fc, bm[m] = bm[p] > bm[k] + 1 ? bm[p] : bm[k] + 1, d[p].dl = d[k].dl = m, cm[b1] = m++, al(d, b1);
        }
        while (bw >= 2);
        cm[--cz] = cm[b1], cb(b), b7(d, h);
    }, bv = function(b, p) {
        var k, d, j =- 1, c = b[0].dl, h = 0, m = 7, g = 4;
        for (0 == c && (m = 138, g = 3), b[p + 1].dl = 65535, k = 0; p >= k; k++) {
            d = c, c = b[k + 1].dl, m>++h && d == c || (g > h ? bB[d].fc += h : 0 != d ? (d != j && bB[d].fc++, bB[cr].fc++) : 10 >= h ? bB[b3].fc++ : bB[bH].fc++, h = 0, j = d, 0 == c ? (m = 138, g = 3) : d == c ? (m = 6, g = 3) : (m = 7, g = 4));
        }
    }, aA = function(b, p) {
        var k, d, j =- 1, c = b[0].dl, h = 0, m = 7, g = 4;
        for (0 == c && (m = 138, g = 3), k = 0; p >= k; k++) {
            if (d = c, c = b[k + 1].dl, !(m>++h && d == c)) {
                if (g > h) {
                    do {
                        co(d, bB);
                    }
                    while (0!=--h);
                } else {
                    0 != d ? (d != j && (co(d, bB), h--), co(cr, bB), ao(h - 3, 2)) : 10 >= h ? (co(b3, bB), ao(h - 3, 3)) : (co(bH, bB), ao(h - 11, 7));
                }
                h = 0, j = d, 0 == c ? (m = 138, g = 3) : d == c ? (m = 6, g = 3) : (m = 7, g = 4);
            }
        }
    }, cw = function() {
        var a;
        for (bv(bL, bA.max_code)
            , bv(bK, br.max_code), cy(bl), a = b6 - 1;
        a >= 3 && 0 == bB[by[a]].dl;
        a--) {}
        return cj += 3 * (a + 1) + 5 + 5 + 4, a;
    }, bG = function(b, a, c) {
        var d;
        for (ao(b - 257, 5)
            , ao(a - 1, 5), ao(c - 4, 4), d = 0;
        c > d;
        d++) {
            ao(bB[by[d]].dl, 3);
        }
        aA(bL, b - 1), aA(bK, a - 1);
    }, b9 = function(f) {
        var e, g, d, c;
        if (c = bP - bz, ck[aC] = bi, cy(bA), cy(br), d = cw(), e = cj + 3 + 7>>3, g = cx + 3 + 7>>3, e >= g && (e = g), e >= c + 4 && bz >= 0) {
            var b;
            for (ao((a9<<1) + f, 3), ay()
                , ag(c), ag(~c), b = 0;
            c > b;
            b++) {
                bT(aU[bz + b]);
            }
        } else {
            g == e ? (ao((aW<<1) + f, 3), bO(bJ, bC)) : (ao((a8<<1) + f, 3), bG(bA.max_code + 1, br.max_code + 1, d + 1), bO(bL, bK));
        }
        ch(), 0 != f && ay();
    }, bZ = function(b, a) {
        if (bV[aR++] = a, 0 == b ? bL[a].fc++ : (b--, bL[ci[a] + ak + 1].fc++, bK[a5(b)].fc++, bI[b5++] = b, bi|=an), an<<=1, 0 == (7 & aR) && (ck[aC++] = bi, bi = 0, an = 1), bp > 2 && 0 == (4095 & aR)) {
            var d, g = 8 * aR, c = bP - bz;
            for (d = 0; aa > d; d++) {
                g += bK[d].fc * (5 + au[d]);
            }
            if (g>>=3, parseInt(aR / 2) > b5 && parseInt(c / 2) > g) {
                return !0;
            }
        }
        return aR == bY - 1 || b5 == ah;
    }, bO = function(b, q) {
        var k, d, j, c, h = 0, m = 0, g = 0, p = 0;
        if (0 != aR) {
            do {
                0 == (7 & h) && (p = ck[g++]), d = 255 & bV[h++], 0 == (1 & p) ? co(d, b) : (j = ci[d], co(j + ak + 1, b), c = aK[j], 0 != c && (d -= aD[j], ao(d, c)), k = bI[m++], j = a5(k), co(j, q), c = au[j], 0 != c && (k -= bW[j], ao(k, c))), p>>=1;
            }
            while (aR > h);
        }
        co(aE, b);
    }, am = 16, ao = function(b, a) {
        bN > am - a ? (aF|=b<<bN, ag(aF), aF = b>>am - bN, bN += a - am) : (aF|=b<<bN, bN += a);
    }, aZ = function(b, a) {
        var c = 0;
        do {
            c|=1 & b, b>>=1, c<<=1;
        }
        while (--a > 0);
        return c>>1;
    }, ay = function() {
        bN > 8 ? ag(aF) : bN > 0 && bT(aF), aF = 0, bN = 0;
    }, aj = function() {
        if (0 != a7) {
            var b, a;
            for (b = cu(), null == aG ? aG = aI = b : aI = aI.next = b, b.len = a7 - aH, a = 0; b.len > a; a++) {
                b.ptr[a] = ab[aH + a];
            }
            a7 = aH = 0;
        }
    }, cf = function(g, d) {
        var j, k;
        aw = g, b8 = 0, d === void 0 && (d = aV), ax(d);
        for (var h = Array(1024), c = []; (j = cq(h, 0, h.length)) > 0;) {
            var b = Array(j);
            for (k = 0; j > k; k++) {
                b[k] = String.fromCharCode(h[k]);
            }
            c[c.length] = b.join("");
        }
        return aw = null, c.join("");
    };
    aQ.RawDeflate || (aQ.RawDeflate = {}), aQ.RawDeflate.deflate = cf;
})(self), function(an) {
    var al, aA, aq, az, ap, aw, aE, at, ak, am, aC, ax, aB, ae, aF, aj, ag = 32768, ai = 0, ar = 9, ay = 6, ah = null, aD = Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535), ao = Array(3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0), Q = Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99), ac = Array(1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577), ad = Array(0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13), af = Array(16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15), V = function() {
        this.next = null, this.list = null;
    }, O = function() {
        this.e = 0, this.b = 0, this.n = 0, this.t = null;
    }, G = function(U, R, aQ, aJ, aP, aI) {
        this.BMAX = 16, this.N_MAX = 288, this.status = 0, this.root = null, this.m = 0;
        var aM, aU, aL, N, S, aS, aN, aR, aH, aV, I, E, H, aK, aO, F, aT, aG = Array(this.BMAX + 1), k = Array(this.BMAX + 1), T = new O, Z = Array(this.BMAX), D = Array(this.N_MAX), j = Array(this.BMAX + 1);
        for (aT = this.root = null, aS = 0; aG.length > aS; aS++) {
            aG[aS] = 0;
        }
        for (aS = 0; k.length > aS; aS++) {
            k[aS] = 0;
        }
        for (aS = 0; Z.length > aS; aS++) {
            Z[aS] = null;
        }
        for (aS = 0; D.length > aS; aS++) {
            D[aS] = 0;
        }
        for (aS = 0; j.length > aS; aS++) {
            j[aS] = 0;
        }
        aU = R > 256 ? U[256] : this.BMAX, aH = U, aV = 0, aS = R;
        do {
            aG[aH[aV]]++, aV++;
        }
        while (--aS > 0);
        if (aG[0] == R) {
            return this.root = null, this.m = 0, this.status = 0, void 0;
        }
        for (aN = 1; this.BMAX >= aN && 0 == aG[aN]; aN++) {}
        for (aR = aN, aN > aI && (aI = aN), aS = this.BMAX; 0 != aS && 0 == aG[aS]; aS--) {}
        for (N = aS, aI > aS && (aI = aS), aK = 1<<aN; aS > aN; aN++, aK<<=1) {
            if (0 > (aK -= aG[aN])) {
                return this.status = 2, this.m = aI, void 0;
            }
        }
        if (0 > (aK -= aG[aS])) {
            return this.status = 2, this.m = aI, void 0;
        }
        for (aG[aS] += aK, j[1] = aN = 0, aH = aG, aV = 1, H = 2; --aS > 0;) {
            j[H++] = aN += aH[aV++];
        }
        aH = U, aV = 0, aS = 0;
        do {
            0 != (aN = aH[aV++]) && (D[j[aN]++] = aS);
        }
        while (R>++aS);
        for (R = j[N], j[0] = aS = 0, aH = D, aV = 0, S =- 1, E = k[0] = 0, I = null, aO = 0; N >= aR; aR++) {
            for (aM = aG[aR]; aM-->0;) {
                for (; aR > E + k[1 + S];) {
                    if (E += k[1 + S], S++, aO = (aO = N - E) > aI ? aI : aO, (aL = 1<<(aN = aR - E)) > aM + 1) {
                        for (aL -= aM + 1, H = aR; aO>++aN&&!(aG[++H] >= (aL<<=1)
                            );
                        ) {
                            aL -= aG[H];
                        }
                    }
                    for (E + aN > aU && aU > E && (aN = aU - E), aO = 1<<aN, k[1 + S] = aN, I = Array(aO), F = 0; aO > F; F++) {
                        I[F] = new O;
                    }
                    aT = null == aT ? this.root = new V : aT.next = new V, aT.next = null, aT.list = I, Z[S] = I, S > 0 && (j[S] = aS, T.b = k[S], T.e = 16 + aN, T.t = I, aN = (aS & (1<<E) - 1)>>E - k[S], Z[S - 1][aN].e = T.e, Z[S - 1][aN].b = T.b, Z[S - 1][aN].n = T.n, Z[S - 1][aN].t = T.t);
                }
                for (T.b = aR - E, aV >= R ? T.e = 99 : aQ > aH[aV] ? (T.e = 256 > aH[aV] ? 16 : 15, T.n = aH[aV++]) : (T.e = aP[aH[aV] - aQ], T.n = aJ[aH[aV++] - aQ]), aL = 1<<aR - E, aN = aS>>E; aO > aN; aN += aL) {
                    I[aN].e = T.e, I[aN].b = T.b, I[aN].n = T.n, I[aN].t = T.t;
                }
                for (aN = 1<<aR - 1; 0 != (aS & aN); aN>>=1) {
                    aS^=aN;
                }
                for (aS^=aN; (aS & (1<<E) - 1) != j[S];) {
                    E -= k[S], S--;
                }
            }
        }
        this.m = k[1], this.status = 0 != aK && 1 != N ? 1 : 0;
    }, ab = function() {
        return aF.length == aj?-1 : 255 & aF.charCodeAt(aj++);
    }, av = function(a) {
        for (; a > aw;) {
            ap|=ab()<<aw, aw += 8;
        }
    }, au = function(a) {
        return ap & aD[a];
    }, P = function(a) {
        ap>>=a, aw -= a;
    }, L = function(c, g, d) {
        var e, b, a;
        if (0 == d) {
            return 0;
        }
        for (a = 0; ;) {
            for (av(aB)
                , b = aC.list[au(aB)], e = b.e;
            e > 16;
            ) {
                if (99 == e) {
                    return - 1;
                }
                P(b.b), e -= 16, av(e), b = b.t[au(e)], e = b.e;
            }
            if (P(b.b), 16 != e) {
                if (15 == e) {
                    break;
                }
                for (av(e)
                    , ak = b.n + au(e), P(e), av(ae), b = ax.list[au(ae)], e = b.e;
                e > 16;
                ) {
                    if (99 == e) {
                        return - 1;
                    }
                    P(b.b), e -= 16, av(e), b = b.t[au(e)], e = b.e;
                }
                for (P(b.b)
                    , av(e), am = aA - b.n - au(e), P(e);
                ak > 0 && d > a;
                ) {
                    ak--, am&=ag - 1, aA&=ag - 1, c[g + a++] = al[aA++] = al[am++];
                }
                if (a == d) {
                    return d;
                }
            } else {
                if (aA&=ag - 1, c[g + a++] = al[aA++] = b.n, a == d) {
                    return d;
                }
            }
        }
        return aE =- 1, a;
    }, W = function(b, d, c) {
        var a;
        if (a = 7 & aw, P(a), av(16), a = au(16), P(16), av(16), a != (65535&~ap)) {
            return - 1;
        }
        for (P(16)
            , ak = a, a = 0;
        ak > 0 && c > a;
        ) {
            ak--, aA&=ag - 1, av(8), b[d + a++] = al[aA++] = au(8), P(8);
        }
        return 0 == ak && (aE =- 1), a;
    }, J = function(f, d, g) {
        if (null == ah) {
            var h, c, b = Array(288);
            for (h = 0; 144 > h; h++) {
                b[h] = 8;
            }
            for (; 256 > h; h++) {
                b[h] = 9;
            }
            for (; 280 > h; h++) {
                b[h] = 7;
            }
            for (; 288 > h; h++) {
                b[h] = 8;
            }
            if (az = 7, c = new G(b, 288, 257, ao, Q, az), 0 != c.status) {
                return alert("HufBuild error: " + c.status), - 1;
            }
            for (ah = c.root, az = c.m, h = 0; 30 > h; h++) {
                b[h] = 5;
            }
            if (zip_fixed_bd = 5, c = new G(b, 30, 0, ac, ad, zip_fixed_bd), c.status > 1) {
                return ah = null, alert("HufBuild error: " + c.status), - 1;
            }
            aq = c.root, zip_fixed_bd = c.m;
        }
        return aC = ah, ax = aq, aB = az, ae = zip_fixed_bd, L(f, d, g);
    }, q = function(b, y, k) {
        var d, j, c, h, m, g, x, z, w, p = Array(316);
        for (d = 0; p.length > d; d++) {
            p[d] = 0;
        }
        if (av(5), x = 257 + au(5), P(5), av(5), z = 1 + au(5), P(5), av(4), g = 4 + au(4), P(4), x > 286 || z > 30) {
            return - 1;
        }
        for (j = 0; g > j; j++) {
            av(3), p[af[j]] = au(3), P(3);
        }
        for (; 19 > j; j++) {
            p[af[j]] = 0;
        }
        if (aB = 7, w = new G(p, 19, 19, null, null, aB), 0 != w.status) {
            return - 1;
        }
        for (aC = w.root, aB = w.m, h = x + z, d = c = 0; h > d;) {
            if (av(aB), m = aC.list[au(aB)], j = m.b, P(j), j = m.n, 16 > j) {
                p[d++] = c = j;
            } else {
                if (16 == j) {
                    if (av(2), j = 3 + au(2), P(2), d + j > h) {
                        return - 1;
                    }
                    for (; j-->0;) {
                        p[d++] = c;
                    }
                } else {
                    if (17 == j) {
                        if (av(3), j = 3 + au(3), P(3), d + j > h) {
                            return - 1;
                        }
                        for (; j-->0;) {
                            p[d++] = 0;
                        }
                        c = 0;
                    } else {
                        if (av(7), j = 11 + au(7), P(7), d + j > h) {
                            return - 1;
                        }
                        for (; j-->0;) {
                            p[d++] = 0;
                        }
                        c = 0;
                    }
                }
            }
        }
        if (aB = ar, w = new G(p, x, 257, ao, Q, aB), 0 == aB && (w.status = 1), 0 != w.status) {
            return 1 == w.status, - 1;
        }
        for (aC = w.root, aB = w.m, d = 0; z > d; d++) {
            p[d] = p[d + x];
        }
        return ae = ay, w = new G(p, z, 0, ac, ad, ae), ax = w.root, ae = w.m, 0 == ae && x > 257?-1 : (1 == w.status, 0 != w.status?-1 : L(b, y, k));
    }, aa = function() {
        null == al && (al = Array(2 * ag)), aA = 0, ap = 0, aw = 0, aE =- 1, at=!1, ak = am = 0, aC = null;
    }, Y = function(b, e, c) {
        var d, a;
        for (d = 0; c > d;) {
            if (at&&-1 == aE) {
                return d;
            }
            if (ak > 0) {
                if (aE != ai) {
                    for (; ak > 0 && c > d;) {
                        ak--, am&=ag - 1, aA&=ag - 1, b[e + d++] = al[aA++] = al[am++];
                    }
                } else {
                    for (; ak > 0 && c > d;) {
                        ak--, aA&=ag - 1, av(8), b[e + d++] = al[aA++] = au(8), P(8);
                    }
                    0 == ak && (aE =- 1);
                }
                if (d == c) {
                    return d;
                }
            }
            if ( - 1 == aE) {
                if (at) {
                    break;
                }
                av(1), 0 != au(1) && (at=!0), P(1), av(2), aE = au(2), P(2), aC = null, ak = 0;
            }
            switch (aE) {
            case 0:
                a = W(b, e + d, c - d);
                break;
            case 1:
                a = null != aC ? L(b, e + d, c - d) : J(b, e + d, c - d);
                break;
            case 2:
                a = null != aC ? L(b, e + d, c - d) : q(b, e + d, c - d);
                break;
            default:
                a =- 1;
            }
            if ( - 1 == a) {
                return at ? 0 : - 1;
            }
            d += a;
        }
        return d;
    }, K = function(b) {
        var a, d;
        aa(), aF = b, aj = 0;
        for (var h = Array(1024), c = []; (a = Y(h, 0, h.length)) > 0;) {
            var g = Array(a);
            for (d = 0; a > d; d++) {
                g[d] = String.fromCharCode(h[d]);
            }
            c[c.length] = g.join("");
        }
        return aF = null, c.join("");
    };
    an.RawDeflate || (an.RawDeflate = {}), an.RawDeflate.inflate = K;
}(self), self.onmessage = function(b) {
    var a = b.data.json, d = b.data.type;
    if (3 === d) {
        var g = RawDeflate.deflate(unescape(encodeURIComponent(a)));
        if (!g) {
            return postMessage("Compress fail"), void 0;
        }
        var c = RawDeflate.inflate(g);
        if (!c) {
            return postMessage("Decompress fail"), void 0;
        }
        postMessage(base64(g));
    } else {
        2 === d && postMessage("" + base64(unescape(encodeURIComponent("" + lzw_encode(a)))));
    }
}; /* Copyright (c) 2014, Yahoo! Inc.  All rights reserved. */

