(function() {
    var W = 14,
        H = 12,
        Z = 32,
        C = 224,
        A = 'addEventListener',
        F = 'fillText',
        M = 'drawImage',
        S = 'fillStyle',
        X = 'getContext',
        N = 'length',
        O = window,
        R = 'rgba(0,0,0,0)',
        Q = 'rgba(0,0,0,0.3)',
        P = [
          ['#21285c','#19204c','#303378',2],['#5c3c20','#4c3018','#785830',2],['#74060c','#640305','#8e1618',2],
          ['#a29b79','#cec491','#7f7543',3],[R,'#c0c0c0','#808080',0],['#c4a864','#a88448','#6f4e2a',1],
          ['#c47865','#a85449','#6f2c2b',1],[R,Q,Q,0],
          [Q,Q,Q,1]
        ],
        E = D('~ COMPLETED! PRzS ENTER TO CONTINUE.,BOXBOT4K,,GAME CONTROLS:,ARROW KEYS - MOVE,BACKSPACE - RzTART ~,PGUP/PGDN - NEXT/PREVIOUS ~,' +
              ',PRzS ANY KEY TO START.,(C) 2014 GABOR BATA,     ,~: ,MOVz: ,PUSHz: |~LEVEL|zES').split(','),
        L = D('s,FjK~q-#ccH$Z":Yw`D9q%$po&TpxZQFU9qGx&jpq$Kgp9Y~FUU;x4Gjv"pWmV>0j/Cq$KBGx2w`iOgvH6&%$rgv:2Viyxaj@"poa;vpx2iyxagph"xSoP"4GqGBxpYi3vvnbx' +
              '!dgvSv"$"n/o=hQiy xvOgvHf#kSqGxPK~Yi0hetooxzqoc!1hco1of!h1xP!-2~>xAP%8eq&heh%Txlt2,FqO o"ZM$%kRvxpjK~2~Nxv"4jpg3!a#k$KhCJ~i0h:Zrj&Zdbqn' +
              'P!q7VFj$p~9oc4Tp9YwiRhMkodoqTH8oS%jknPv=Ji=g"MxjS!hrqokrq$!%dqq7tyxqtlgP"eg@"eX!%"ethQ,I;!xMhS%6orb6vHXrE<~FU/$p~j%xR"cdo"hxlgZethpi#<F' +
              '9;vpB/3"cnb"oMhng3Ut<~WSvX1okoc1q"$"Z1xkbxeoTT7w`Dq-q6THkk$rhOJVi=BT"nhoRvGb%Cq$QVDXyxZL;%kMoonj"Z7VDo"pxqLbcng!R%oCj$"Q~>R/odq%$kHgrjf' +
              '!xrWm,Wygpq"%t1x&"cveP"%hAv-YwVWS!"Zrb&%oHPZrqTxrWmwyzWSff$xlqk#keqckeXZetJw,Oi!$nq%kMTkRf!CJVtOo"$8HkcS&#&xr55qOim~WM"Znq%fR/&xrb$Zrgv' +
              ':YVtyxagLoofnb@$Roo0q"QViRhnb@$njf!LEmwNxZp;vR!kLb&KojKq"CJ~Dax#kLqcnP#&Tdq&8SE<~iRPvnBk"nqkdxoxS!cn5jv=J~DXy PT0j"%CbGEmVDXSo8rP@crhBS' +
              'jvCJVFUqO of&!S!@$!rhOhQ>=q"kxA!"okH"b$S8knqOimFq-g$!xlo6"%&!Av#cSZ=Jwiutqrhf%xlb$okA%fZrXv:Y,>0o/3f$!M&"kMbLE<V xp~ jtnjfvMooxeh%k$Aq%' +
              'kRhpi#<VtOX!"AZceq%#k"ehP!xlBxv:YV>pxZxrb@kHff!S!$!=J,tOjT$frq@k:!tlgZeg!keqWltsz|~  |z~~|yzz|x##|wyy|v!!|uz~|txx|sww|r#u|q#v|p#y|o#!|n' +
              'r |mss|lz |k%!|j#"|i t|hq!|gqv|f""|e#l|dxu|c%v|bo%|aqp|`y~|_#m|Zv!|Ytm|Xqx|Wtx|Vyu|Ua~|T"!|Srx|Rnx|Qpi_|P#$|Otu|Ntp|Mno|Ld |K!p|Jt_|IN ' +
              '|Hro|Gkp|Ft`|EgpW|Di`|Cxy|Bj!|Aex|@%%|>Ih|=xn|<sw|;o$|:rt|9Xp|8"v|7nW_|6"&|5g!n|4pb|3Lx|2UY|1#z|0p |/#%|-tr|,yl'),
        I = D('x tgssgtg!igtgvzxqsmm!fssxs!fssxztjix~vvp s~gs~spys~ysx~v~vpp~" rfoooonnw yvvvfpxo rfpl h e~!pllpe~! h lp l!~j jxoj "yxqzy~"eqidvf dj~t' +
              ' kj "j~"ky~"yokk!qz!~zk!~i! idv~i dl! kjxo!~zyxqz! ieqi i~vf |~  |z""|y!!|x~~|w y"|vzz|uz !x~! v|tyy|s!"|ryztyzy" y~ty~yvvv|q~ |pxx|oq"' +
              '|nwwwwwwwwwww|mtyssxs|ltt|k!o|jy!|iz"|hvuuuuuz|gsp~|fv"|e!x|dk '),
        z, t, w, m, h, f, v, u, q, b;

    function D(k) {
        var i, x = k.split('|'), y = x.shift();
        for (i = x[N]; i--;) {
            y = y.replace(RegExp(x[i].charAt(0),'g'), x[i].substring(1));
        }
        return y;
    }

    function g(k, x, o, i) {
        for (i = o[N];i--;) {
            o[i] = k.charCodeAt(x * o[N] + i) - Z;
        }
    }

    function l(x, y) {
        if (v < 0) {
            v = 50 - 1;
        } else if (v > 50 - 1) {
            v = 0;
        }
        m = 0;
        h = 0;
        f = !1;
        g(L, v, t);
        for (x = W; x--;) {
            for (y = H; y--;) {
                if (t[W * y + x] == 4) {
                    t[W * y + x] = 1;
                    u.x = x;
                    u.y = y;
                }
            }
        }
    }

    function p(i, x, y) {
        for (i = 0; i < 3; i++) {
            for (x = W; x--;) {
                for (y = H; y--;) {
                    if (!q) {
                        w[M](z[0], x * Z, y * Z);
                    } else if (i == 0 && t[W * y + x] <= 2) {
                        w[M](z[t[W * y + x]], x * Z, y * Z);
                    } else if (i == 1 && t[W * y + x] > 2) {
                        w[M](z[8], x * Z + 4, y * Z + 4);
                    } else if (i == 2 && t[W * y + x] > 2) {
                        w[M](z[t[W * y + x]], x * Z, y * Z);
                    }
                }
            }
            if (i == 1 && q) {
                w[M](z[7], u.x * Z + 4, u.y * Z + 4);
            } else if (i == 2 && q) {
                w[M](z[4], u.x * Z, u.y * Z);
            }
        }
        w.font = 'bold 14px sans-serif';
        w[S] = 'rgba(255,255,255,0.4)';
        w.textAlign = 'center';
        if (!q) {
            for(i = 1; i < E[N] - 5; i++) {
              w[F](E[i], C, i * 19 + 106);
            }
            w[F](E[9], C, 376);
        } else {
            if (f) {
                w[F](E[0], C, 19);
            }
            w[F](E[11] + (v + 1) + E[10] + E[12] + m + E[10] + E[13] + h, C, 376);
        }
    }

    function B(a, r, e, s, x, y) {
        a = O['boxbot4k'];
        if (a != null && !!a[X]) {
            w = a[X]('2d');
            z = Array(P[N]);
            r = Array(256);
            for (a = z[N]; a--;) {
                g(I, P[a][3], r);
                e = document.createElement('canvas');
                e.width = Z;
                e.height = Z;
                s = e[X]('2d');
                for (x = 16; x--;) {
                    for (y = 16; y--;) {
                        s[S] = P[a][r[16 * y + x]];
                        s.fillRect(x * 2, y * 2, 2, 2);
                    }
                }
                z[a] = e;
            }
            t = Array(W * H);
            v = 0;
            u = { x: 0, y: 0 };
            q = !1;
            b = !1;
            l();
            p();
            O[A]('keydown', function(e, s, n, i, d) {
                e.preventDefault();
                if (!b) {
                    b = !0;
                    if (q) {
                        d = { x: 0, y: 0 };
                        switch (e.keyCode) {
                            case 38:
                                d.y = -1;
                                break;
                            case 40:
                                d.y = 1;
                                break;
                            case 37:
                                d.x = -1;
                                break;
                            case 39:
                                d.x = 1;
                                break;
                            case 33:
                                v++;
                                l();
                                break;
                            case 34:
                                v--;
                                l();
                                break;
                            case 8:
                                l();
                                break;
                            case 13:
                                if (f) {
                                    v++;
                                    l();
                                }
                                break;
                            default:
                                return;
                        }
                        if ((d.x != 0 || d.y != 0) && !f) {
                            s = W * (u.y + d.y) + u.x + d.x;
                            n = W * (u.y + d.y * 2) + u.x + d.x * 2;
                            if (t[s] == 1 || t[s] == 2) {
                                u.x += d.x;
                                u.y += d.y;
                                m++;
                            } else if ((t[s] == 5 || t[s] == 6) && (t[n] == 1 || t[n] == 2)) {
                                t[s] = t[s] == 5 ? 1 : 2;
                                t[n] = t[n] == 1 ? 5 : 6;
                                u.x += d.x;
                                u.y += d.y;
                                m++;
                                h++;
                            }
                            n = !0;
                            for (i = t[N]; i--;) {
                                if (t[i] == 5) {
                                    n = !1;
                                }
                            }
                            f = n;
                        }
                    } else {
                        q = !0;
                    }
                    p();
                }
            }, !1);
            O[A]('keyup', function() {
                b = !1;
            }, !1);
        }
    }
    B();
})();
