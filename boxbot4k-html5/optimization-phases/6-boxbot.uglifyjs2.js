!function(){function x(x){var o,e=x.split("|"),t=e.shift();for(o=e[S];o--;)t=t.replace(RegExp(e[o].charAt(0),"g"),e[o].substring(1));return t}function o(x,o,e,t){for(t=e[S];t--;)e[t]=x.charCodeAt(o*e[S]+t)-h}function e(x,e){for(0>v?v=49:v>49&&(v=0),i=0,q=0,c=!1,o(A,v,f),x=s;x--;)for(e=g;e--;)4==f[s*e+x]&&(f[s*e+x]=1,k.x=x,k.y=e)}function t(x,o,e){for(x=0;3>x;x++){for(o=s;o--;)for(e=g;e--;)p?0!=x||f[s*e+o]>2?1==x&&f[s*e+o]>2?y[w](n[8],o*h+4,e*h+4):2==x&&f[s*e+o]>2&&y[w](n[f[s*e+o]],o*h,e*h):y[w](n[f[s*e+o]],o*h,e*h):y[w](n[0],o*h,e*h);1==x&&p?y[w](n[7],k.x*h+4,k.y*h+4):2==x&&p&&y[w](n[4],k.x*h,k.y*h)}if(y.font="bold 14px sans-serif",y[$]="rgba(255,255,255,0.4)",y.textAlign="center",p)c&&y[j](O[0],l,19),y[j](O[11]+(v+1)+O[10]+O[12]+i+O[10]+O[13]+q,l,376);else{for(x=1;x<O[S]-5;x++)y[j](O[x],l,19*x+106);y[j](O[9],l,376)}}function r(x,r,l,j,w,u){if(x=d.boxbot4k,null!=x&&x[z]){for(y=x[z]("2d"),n=Array(R[S]),r=Array(256),x=n[S];x--;){for(o(E,R[x][3],r),l=document.createElement("canvas"),l.width=h,l.height=h,j=l[z]("2d"),w=16;w--;)for(u=16;u--;)j[$]=R[x][r[16*u+w]],j.fillRect(2*w,2*u,2,2);n[x]=l}f=Array(s*g),v=0,k={x:0,y:0},p=!1,a=!1,e(),t(),d[b]("keydown",function(x,o,r,n,y){if(x.preventDefault(),!a){if(a=!0,p){switch(y={x:0,y:0},x.keyCode){case 38:y.y=-1;break;case 40:y.y=1;break;case 37:y.x=-1;break;case 39:y.x=1;break;case 33:v++,e();break;case 34:v--,e();break;case 8:e();break;case 13:c&&(v++,e());break;default:return}if((0!=y.x||0!=y.y)&&!c){for(o=s*(k.y+y.y)+k.x+y.x,r=s*(k.y+2*y.y)+k.x+2*y.x,1==f[o]||2==f[o]?(k.x+=y.x,k.y+=y.y,i++):5!=f[o]&&6!=f[o]||1!=f[r]&&2!=f[r]||(f[o]=5==f[o]?1:2,f[r]=1==f[r]?5:6,k.x+=y.x,k.y+=y.y,i++,q++),r=!0,n=f[S];n--;)5==f[n]&&(r=!1);c=r}}else p=!0;t()}},!1),d[b]("keyup",function(){a=!1},!1)}}var n,f,y,i,q,c,v,k,p,a,s=14,g=12,h=32,l=224,b="addEventListener",j="fillText",w="drawImage",$="fillStyle",z="getContext",S="length",d=window,u="rgba(0,0,0,0)",T="rgba(0,0,0,0.3)",R=[["#21285c","#19204c","#303378",2],["#5c3c20","#4c3018","#785830",2],["#74060c","#640305","#8e1618",2],["#a29b79","#cec491","#7f7543",3],[u,"#c0c0c0","#808080",0],["#c4a864","#a88448","#6f4e2a",1],["#c47865","#a85449","#6f2c2b",1],[u,T,T,0],[T,T,T,1]],O=x("~ COMPLETED! PRzS ENTER TO CONTINUE.,BOXBOT4K,,GAME CONTROLS:,ARROW KEYS - MOVE,BACKSPACE - RzTART ~,PGUP/PGDN - NEXT/PREVIOUS ~,,PRzS ANY KEY TO START.,(C) 2014 GABOR BATA,     ,~: ,MOVz: ,PUSHz: |~LEVEL|zES").split(","),A=x('s,FjK~q-#ccH$Z":Yw`D9q%$po&TpxZQFU9qGx&jpq$Kgp9Y~FUU;x4Gjv"pWmV>0j/Cq$KBGx2w`iOgvH6&%$rgv:2Viyxaj@"poa;vpx2iyxagph"xSoP"4GqGBxpYi3vvnbx!dgvSv"$"n/o=hQiy xvOgvHf#kSqGxPK~Yi0hetooxzqoc!1hco1of!h1xP!-2~>xAP%8eq&heh%Txlt2,FqO o"ZM$%kRvxpjK~2~Nxv"4jpg3!a#k$KhCJ~i0h:Zrj&ZdbqnP!q7VFj$p~9oc4Tp9YwiRhMkodoqTH8oS%jknPv=Ji=g"MxjS!hrqokrq$!%dqq7tyxqtlgP"eg@"eX!%"ethQ,I;!xMhS%6orb6vHXrE<~FU/$p~j%xR"cdo"hxlgZethpi#<F9;vpB/3"cnb"oMhng3Ut<~WSvX1okoc1q"$"Z1xkbxeoTT7w`Dq-q6THkk$rhOJVi=BT"nhoRvGb%Cq$QVDXyxZL;%kMoonj"Z7VDo"pxqLbcng!R%oCj$"Q~>R/odq%$kHgrjf!xrWm,Wygpq"%t1x&"cveP"%hAv-YwVWS!"Zrb&%oHPZrqTxrWmwyzWSff$xlqk#keqckeXZetJw,Oi!$nq%kMTkRf!CJVtOo"$8HkcS&#&xr55qOim~WM"Znq%fR/&xrb$Zrgv:YVtyxagLoofnb@$Roo0q"QViRhnb@$njf!LEmwNxZp;vR!kLb&KojKq"CJ~Dax#kLqcnP#&Tdq&8SE<~iRPvnBk"nqkdxoxS!cn5jv=J~DXy PT0j"%CbGEmVDXSo8rP@crhBSjvCJVFUqO of&!S!@$!rhOhQ>=q"kxA!"okH"b$S8knqOimFq-g$!xlo6"%&!Av#cSZ=Jwiutqrhf%xlb$okA%fZrXv:Y,>0o/3f$!M&"kMbLE<V xp~ jtnjfvMooxeh%k$Aq%kRhpi#<VtOX!"AZceq%#k"ehP!xlBxv:YV>pxZxrb@kHff!S!$!=J,tOjT$frq@k:!tlgZeg!keqWltsz|~  |z~~|yzz|x##|wyy|v!!|uz~|txx|sww|r#u|q#v|p#y|o#!|nr |mss|lz |k%!|j#"|i t|hq!|gqv|f""|e#l|dxu|c%v|bo%|aqp|`y~|_#m|Zv!|Ytm|Xqx|Wtx|Vyu|Ua~|T"!|Srx|Rnx|Qpi_|P#$|Otu|Ntp|Mno|Ld |K!p|Jt_|IN |Hro|Gkp|Ft`|EgpW|Di`|Cxy|Bj!|Aex|@%%|>Ih|=xn|<sw|;o$|:rt|9Xp|8"v|7nW_|6"&|5g!n|4pb|3Lx|2UY|1#z|0p |/#%|-tr|,yl'),E=x('x tgssgtg!igtgvzxqsmm!fssxs!fssxztjix~vvp s~gs~spys~ysx~v~vpp~" rfoooonnw yvvvfpxo rfpl h e~!pllpe~! h lp l!~j jxoj "yxqzy~"eqidvf dj~t kj "j~"ky~"yokk!qz!~zk!~i! idv~i dl! kjxo!~zyxqz! ieqi i~vf |~  |z""|y!!|x~~|w y"|vzz|uz !x~! v|tyy|s!"|ryztyzy" y~ty~yvvv|q~ |pxx|oq"|nwwwwwwwwwww|mtyssxs|ltt|k!o|jy!|iz"|hvuuuuuz|gsp~|fv"|e!x|dk ');r()}();