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
        L = D('pp~v,#idEa#VVRN!";MkwP%$9&ibGUkdEPl4&JPT8PwtLkd7u$w@lb_"4ehg"#:PTbilXdMHCR"&&%$nC;7DqXb"F"9x9NXdzsqX8tm"Bu#3@lPlbiwtzswq`j6w!KCn#03`%uw' +
              'yGsqgxo~CRW#lOxltqTdzshcouuwUxfr!1mVu1/im1qTwa7Lhqsq$%_cx&mcm%iAo7QkqY2Y$-`Ebid7Lob0@J8#S!xblTtm5L hnqmnJ&r!Kfx`Tx>e,J$dE@r@iPwtevoSmYl' +
              'uKuxiR_uO%Jl`Nw`zsow="Yq"O!mnxulnxT%Kxx>zUqXosj#3cjF"cE!%"comgQot uTwYmO%"&unf"&rRxajtowI  kd#%$dJ%wS"VK/mAC!comt wqIkw9Nbi#:S"V6"uYm=#' +
              'S7oI  oa#xxqUulfr10$21wlfqsuii>Mkwa0&iRll$nmo~#Dow`ii"ymu`xl@:P$gDk5m#Y$-Yuu`"2>D,/X#6V=!S%u5"3gLh>%uKx%$lRjn#WiBQwq8P"%wqUw&"Vrc#3%mc#' +
              'EaeZUoB!2nf&%uR#N!nxiBM oBWW$Axl#lcxVlcx#mcwqeZvqyo!$<-YilS"i5eH/$_RlVO&#&aj!=!<qyLowY2<%W>%&afN!nC;eqX8#YuW6F$Suut 0gDoSm6F$`Wi#=4D ob' +
              'm9NS!l#6&!9#iP"5L ktql#<V`$#&iKx&_OjtowIvo>N`il"<lKwuB!V=!`_w`L k#g$igW:@l84DkBu_n#$FVnm#inq_5ekdxqYW&!O!FTnmo~GUhw<"lqsw!"ulR"f$O_l<qy' +
              'zUkwajTA/&"%&!c#x#Vn#mw`evo~oxnmW%Af$ulcw%"2nx#x;Qht u#:SWTY&"lYf#=4zvwd Jo`W_Yuuqsm-$cwx-SG  HE!"c#mVcx:l"cm#TA#i#x;ehbmafFlRW"iO!Tw`Q' +
              'HJi$WnxFl;!osC!cj!lcxoAopp|~      |z####~~~~~~~~~~|y#~ |x#!!|w##|v   |u#!|ty |sv  |r!!|qw#|p~~~|oww|n#~|mx!|l%!|kqyvx|jxr|i"!|hot m|gt ' +
              '#|fu%|ezp|dyv|c#s|bt#|aq~|`y#|_"r|Z~~|Yyu|Xtwx|W""|V%r|Uv |T$!|Syw|Rnu|QzZs|Ptx|Onw|N$r|MeZ |Lz~|Kw~|J#"|IppZ|Hoo~|Gmgz|F%%|Exw|De |Cjr' +
              '|Baw|Aws|@tf|>yq|=yj|<yx|;no|:%#|9tu|8tj|7xd|6yf|5#b|4tw|3$"|2_!|1#U|0x"|/u"|-%l|,qd'),
        I = D('~jynttnyynhnyynivtumtumthomthomouhliol~trntrtv ytjtlz"rz"lllwouoywrujpggggssssp"ll~wouoywrujp"v uy ffxiel!v uuyyvelkffxi uyl~uy!jky!vdk' +
              'dvoyr"!vzq ize~w!jy qykd!r"qyrd~"qqq"!roq!rzkzq z"rze~wukqy!v"!royvokz!vz zriz |~   |z"""|y!!|xzz !~~! |w" y|v~~ |uyyy|t!"|swwwwww|r  |' +
              'q!~"|pzzzzz"|o""|nt~v|mtt~ |l~~|k! |jry|izz|h!z|g"~|fxx|e !|d"y'),
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
        if (!!a && !!a[X]) {
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
                    e.preventDefault();
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
