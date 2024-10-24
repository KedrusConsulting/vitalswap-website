import{j as n,L as Se,c as V,g as ge,r as z,a as h,F as xe}from"./index-Bo83_t3p.js";const we="/assets/vitalswap-logo-DAMQ07VP.svg";function ye(){return n(Se,{className:"",to:"/",children:n("div",{className:"vitalswap-logo",children:n("img",{src:we,alt:"Vitalswap Logo"})})})}function k({route:y,label:P,onClick:B}){return n("li",{children:n("a",{href:y,className:"navbar__link",onClick:B,children:P})})}var K={exports:{}};/*!
 * Platform.js v1.3.6
 * Copyright 2014-2020 Benjamin Tan
 * Copyright 2011-2013 John-David Dalton
 * Available under MIT license
 */K.exports;(function(y,P){(function(){var B={function:!0,object:!0},A=B[typeof window]&&window||this,x=P,O=y&&!y.nodeType&&y,S=x&&O&&typeof V=="object"&&V;S&&(S.global===S||S.window===S||S.self===S)&&(A=S);var _=Math.pow(2,53)-1,R=/\bOpera/,q=Object.prototype,ae=q.hasOwnProperty,J=q.toString;function Y(a){return a=String(a),a.charAt(0).toUpperCase()+a.slice(1)}function te(a,l,d){var m={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return l&&d&&/^Win/i.test(a)&&!/^Windows Phone /i.test(a)&&(m=m[/[\d.]+$/.exec(a)])&&(a="Windows "+m),a=String(a),l&&d&&(a=a.replace(RegExp(l,"i"),d)),a=I(a.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]),a}function ie(a,l){var d=-1,m=a?a.length:0;if(typeof m=="number"&&m>-1&&m<=_)for(;++d<m;)l(a[d],d,a);else F(a,l)}function I(a){return a=j(a),/^(?:webOS|i(?:OS|P))/.test(a)?a:Y(a)}function F(a,l){for(var d in a)ae.call(a,d)&&l(a[d],d,a)}function M(a){return a==null?Y(a):J.call(a).slice(8,-1)}function re(a,l){var d=a!=null?typeof a[l]:"number";return!/^(?:boolean|number|string|undefined)$/.test(d)&&(d=="object"?!!a[l]:!0)}function w(a){return String(a).replace(/([ -])(?!$)/g,"$1?")}function N(a,l){var d=null;return ie(a,function(m,T){d=l(d,m,T,a)}),d}function j(a){return String(a).replace(/^ +| +$/g,"")}function G(a){var l=A,d=a&&typeof a=="object"&&M(a)!="String";d&&(l=a,a=null);var m=l.navigator||{},T=m.userAgent||"";a||(a=T);var ne=d?!!m.likeChrome:/\bChrome\b/.test(a)&&!/internal|\n/i.test(J.toString()),D="Object",oe=d?D:"ScriptBridgingProxyObject",le=d?D:"Environment",se=d&&l.java?"JavaPackage":M(l.java),ce=d?D:"RuntimeObject",W=/\bJava/.test(se)&&l.java,pe=W&&M(l.environment)==le,de=W?"a":"α",be=W?"b":"β",U=l.document||{},C=l.operamini||l.opera,$=R.test($=d&&C?C["[[Class]]"]:M(C))?$:C=null,e,L=a,s=[],X=null,E=a==T,r=E&&C&&typeof C.version=="function"&&C.version(),H,c=fe([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]),t=me(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Vivaldi","Waterfox","WebPositive",{label:"Yandex Browser",pattern:"YaBrowser"},{label:"UC Browser",pattern:"UCBrowser"},"Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chromium","Chrome",{label:"Chrome",pattern:"(?:HeadlessChrome)"},{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"]),o=Q([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),f=he({Apple:{iPad:1,iPhone:1,iPod:1},Alcatel:{},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},Huawei:{},Lenovo:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Oppo:{},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1},Xiaomi:{Mi:1,Redmi:1}}),i=ue(["Windows Phone","KaiOS","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian",{label:"DragonFly BSD",pattern:"DragonFly"},"Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function fe(u){return N(u,function(b,p){return b||RegExp("\\b"+(p.pattern||w(p))+"\\b","i").exec(a)&&(p.label||p)})}function he(u){return N(u,function(b,p,g){return b||(p[o]||p[/^[a-z]+(?: +[a-z]+\b)*/i.exec(o)]||RegExp("\\b"+w(g)+"(?:\\b|\\w*\\d)","i").exec(a))&&g})}function me(u){return N(u,function(b,p){return b||RegExp("\\b"+(p.pattern||w(p))+"\\b","i").exec(a)&&(p.label||p)})}function ue(u){return N(u,function(b,p){var g=p.pattern||w(p);return!b&&(b=RegExp("\\b"+g+"(?:/[\\d.]+|[ \\w.]*)","i").exec(a))&&(b=te(b,g,p.label||p)),b})}function Q(u){return N(u,function(b,p){var g=p.pattern||w(p);return!b&&(b=RegExp("\\b"+g+" *\\d+[.\\w_]*","i").exec(a)||RegExp("\\b"+g+" *\\w+-[\\w]*","i").exec(a)||RegExp("\\b"+g+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(a))&&((b=String(p.label&&!RegExp(g,"i").test(p.label)?p.label:b).split("/"))[1]&&!/[\d.]+/.test(b[0])&&(b[0]+=" "+b[1]),p=p.label||p,b=I(b[0].replace(RegExp(g,"i"),p).replace(RegExp("; *(?:"+p+"[_-])?","i")," ").replace(RegExp("("+p+")[-_.]?(\\w)","i"),"$1 $2"))),b})}function ee(u){return N(u,function(b,p){return b||(RegExp(p+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(a)||0)[1]||null})}function ve(){return this.description||""}if(c&&(c=[c]),/\bAndroid\b/.test(i)&&!o&&(e=/\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(a))&&(o=j(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i,"")||null),f&&!o?o=Q([f]):f&&o&&(o=o.replace(RegExp("^("+w(f)+")[-_.\\s]","i"),f+" ").replace(RegExp("^("+w(f)+")[-_.]?(\\w)","i"),f+" $2")),(e=/\bGoogle TV\b/.exec(o))&&(o=e[0]),/\bSimulator\b/i.test(a)&&(o=(o?o+" ":"")+"Simulator"),t=="Opera Mini"&&/\bOPiOS\b/.test(a)&&s.push("running in Turbo/Uncompressed mode"),t=="IE"&&/\blike iPhone OS\b/.test(a)?(e=G(a.replace(/like iPhone OS/,"")),f=e.manufacturer,o=e.product):/^iP/.test(o)?(t||(t="Safari"),i="iOS"+((e=/ OS ([\d_]+)/i.exec(a))?" "+e[1].replace(/_/g,"."):"")):t=="Konqueror"&&/^Linux\b/i.test(i)?i="Kubuntu":f&&f!="Google"&&(/Chrome/.test(t)&&!/\bMobile Safari\b/i.test(a)||/\bVita\b/.test(o))||/\bAndroid\b/.test(i)&&/^Chrome/.test(t)&&/\bVersion\//i.test(a)?(t="Android Browser",i=/\bAndroid\b/.test(i)?i:"Android"):t=="Silk"?(/\bMobi/i.test(a)||(i="Android",s.unshift("desktop mode")),/Accelerated *= *true/i.test(a)&&s.unshift("accelerated")):t=="UC Browser"&&/\bUCWEB\b/.test(a)?s.push("speed mode"):t=="PaleMoon"&&(e=/\bFirefox\/([\d.]+)\b/.exec(a))?s.push("identifying as Firefox "+e[1]):t=="Firefox"&&(e=/\b(Mobile|Tablet|TV)\b/i.exec(a))?(i||(i="Firefox OS"),o||(o=e[1])):!t||(e=!/\bMinefield\b/i.test(a)&&/\b(?:Firefox|Safari)\b/.exec(t))?(t&&!o&&/[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(e+"/")+8))&&(t=null),(e=o||f||i)&&(o||f||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(i))&&(t=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(i)?i:e)+" Browser")):t=="Electron"&&(e=(/\bChrome\/([\d.]+)\b/.exec(a)||0)[1])&&s.push("Chromium "+e),r||(r=ee(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)","Version",w(t),"(?:Firefox|Minefield|NetFront)"])),(e=c=="iCab"&&parseFloat(r)>3&&"WebKit"||/\bOpera\b/.test(t)&&(/\bOPR\b/.test(a)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(a)&&!/^(?:Trident|EdgeHTML)$/.test(c)&&"WebKit"||!c&&/\bMSIE\b/i.test(a)&&(i=="Mac OS"?"Tasman":"Trident")||c=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(t)&&"NetFront")&&(c=[e]),t=="IE"&&(e=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a)||0)[1])?(t+=" Mobile",i="Windows Phone "+(/\+$/.test(e)?e:e+".x"),s.unshift("desktop mode")):/\bWPDesktop\b/i.test(a)?(t="IE Mobile",i="Windows Phone 8.x",s.unshift("desktop mode"),r||(r=(/\brv:([\d.]+)/.exec(a)||0)[1])):t!="IE"&&c=="Trident"&&(e=/\brv:([\d.]+)/.exec(a))&&(t&&s.push("identifying as "+t+(r?" "+r:"")),t="IE",r=e[1]),E){if(re(l,"global"))if(W&&(e=W.lang.System,L=e.getProperty("os.arch"),i=i||e.getProperty("os.name")+" "+e.getProperty("os.version")),pe){try{r=l.require("ringo/engine").version.join("."),t="RingoJS"}catch{(e=l.system)&&e.global.system==l.system&&(t="Narwhal",i||(i=e[0].os||null))}t||(t="Rhino")}else typeof l.process=="object"&&!l.process.browser&&(e=l.process)&&(typeof e.versions=="object"&&(typeof e.versions.electron=="string"?(s.push("Node "+e.versions.node),t="Electron",r=e.versions.electron):typeof e.versions.nw=="string"&&(s.push("Chromium "+r,"Node "+e.versions.node),t="NW.js",r=e.versions.nw)),t||(t="Node.js",L=e.arch,i=e.platform,r=/[\d.]+/.exec(e.version),r=r?r[0]:null));else M(e=l.runtime)==oe?(t="Adobe AIR",i=e.flash.system.Capabilities.os):M(e=l.phantom)==ce?(t="PhantomJS",r=(e=e.version||null)&&e.major+"."+e.minor+"."+e.patch):typeof U.documentMode=="number"&&(e=/\bTrident\/(\d+)/i.exec(a))?(r=[r,U.documentMode],(e=+e[1]+4)!=r[1]&&(s.push("IE "+r[1]+" mode"),c&&(c[1]=""),r[1]=e),r=t=="IE"?String(r[1].toFixed(1)):r[0]):typeof U.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(t)&&(s.push("masking as "+t+" "+r),t="IE",r="11.0",c=["Trident"],i="Windows");i=i&&I(i)}if(r&&(e=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(r)||/(?:alpha|beta)(?: ?\d)?/i.exec(a+";"+(E&&m.appMinorVersion))||/\bMinefield\b/i.test(a)&&"a")&&(X=/b/i.test(e)?"beta":"alpha",r=r.replace(RegExp(e+"\\+?$"),"")+(X=="beta"?be:de)+(/\d+\+?/.exec(e)||"")),t=="Fennec"||t=="Firefox"&&/\b(?:Android|Firefox OS|KaiOS)\b/.test(i))t="Firefox Mobile";else if(t=="Maxthon"&&r)r=r.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(o))o=="Xbox 360"&&(i=null),o=="Xbox 360"&&/\bIEMobile\b/.test(a)&&s.unshift("mobile mode");else if((/^(?:Chrome|IE|Opera)$/.test(t)||t&&!o&&!/Browser|Mobi/.test(t))&&(i=="Windows CE"||/Mobi/i.test(a)))t+=" Mobile";else if(t=="IE"&&E)try{l.external===null&&s.unshift("platform preview")}catch{s.unshift("embedded")}else(/\bBlackBerry\b/.test(o)||/\bBB10\b/.test(a))&&(e=(RegExp(o.replace(/ +/g," *")+"/([.\\d]+)","i").exec(a)||0)[1]||r)?(e=[e,/BB10/.test(a)],i=(e[1]?(o=null,f="BlackBerry"):"Device Software")+" "+e[0],r=null):this!=F&&o!="Wii"&&(E&&C||/Opera/.test(t)&&/\b(?:MSIE|Firefox)\b/i.test(a)||t=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(i)||t=="IE"&&(i&&!/^Win/.test(i)&&r>5.5||/\bWindows XP\b/.test(i)&&r>8||r==8&&!/\bTrident\b/.test(a)))&&!R.test(e=G.call(F,a.replace(R,"")+";"))&&e.name&&(e="ing as "+e.name+((e=e.version)?" "+e:""),R.test(t)?(/\bIE\b/.test(e)&&i=="Mac OS"&&(i=null),e="identify"+e):(e="mask"+e,$?t=I($.replace(/([a-z])([A-Z])/g,"$1 $2")):t="Opera",/\bIE\b/.test(e)&&(i=null),E||(r=null)),c=["Presto"],s.push(e));(e=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(a)||0)[1])&&(e=[parseFloat(e.replace(/\.(\d)$/,".0$1")),e],t=="Safari"&&e[1].slice(-1)=="+"?(t="WebKit Nightly",X="alpha",r=e[1].slice(0,-1)):(r==e[1]||r==(e[2]=(/\bSafari\/([\d.]+\+?)/i.exec(a)||0)[1]))&&(r=null),e[1]=(/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(a)||0)[1],e[0]==537.36&&e[2]==537.36&&parseFloat(e[1])>=28&&c=="WebKit"&&(c=["Blink"]),!E||!ne&&!e[1]?(c&&(c[1]="like Safari"),e=(e=e[0],e<400?1:e<500?2:e<526?3:e<533?4:e<534?"4+":e<535?5:e<537?6:e<538?7:e<601?8:e<602?9:e<604?10:e<606?11:e<608?12:"12")):(c&&(c[1]="like Chrome"),e=e[1]||(e=e[0],e<530?1:e<532?2:e<532.05?3:e<533?4:e<534.03?5:e<534.07?6:e<534.1?7:e<534.13?8:e<534.16?9:e<534.24?10:e<534.3?11:e<535.01?12:e<535.02?"13+":e<535.07?15:e<535.11?16:e<535.19?17:e<536.05?18:e<536.1?19:e<537.01?20:e<537.11?"21+":e<537.13?23:e<537.18?24:e<537.24?25:e<537.36?26:c!="Blink"?"27":"28")),c&&(c[1]+=" "+(e+=typeof e=="number"?".x":/[.+]/.test(e)?"":"+")),t=="Safari"&&(!r||parseInt(r)>45)?r=e:t=="Chrome"&&/\bHeadlessChrome/i.test(a)&&s.unshift("headless")),t=="Opera"&&(e=/\bzbov|zvav$/.exec(i))?(t+=" ",s.unshift("desktop mode"),e=="zvav"?(t+="Mini",r=null):t+="Mobile",i=i.replace(RegExp(" *"+e+"$"),"")):t=="Safari"&&/\bChrome\b/.exec(c&&c[1])?(s.unshift("desktop mode"),t="Chrome Mobile",r=null,/\bOS X\b/.test(i)?(f="Apple",i="iOS 4.3+"):i=null):/\bSRWare Iron\b/.test(t)&&!r&&(r=ee("Chrome")),r&&r.indexOf(e=/[\d.]+$/.exec(i))==0&&a.indexOf("/"+e+"-")>-1&&(i=j(i.replace(e,""))),i&&i.indexOf(t)!=-1&&!RegExp(t+" OS").test(i)&&(i=i.replace(RegExp(" *"+w(t)+" *"),"")),c&&!/\b(?:Avant|Nook)\b/.test(t)&&(/Browser|Lunascape|Maxthon/.test(t)||t!="Safari"&&/^iOS/.test(i)&&/\bSafari\b/.test(c[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(t)&&c[1])&&(e=c[c.length-1])&&s.push(e),s.length&&(s=["("+s.join("; ")+")"]),f&&o&&o.indexOf(f)<0&&s.push("on "+f),o&&s.push((/^on /.test(s[s.length-1])?"":"on ")+o),i&&(e=/ ([\d.+]+)$/.exec(i),H=e&&i.charAt(i.length-e[0].length-1)=="/",i={architecture:32,family:e&&!H?i.replace(e[0],""):i,version:e?e[1]:null,toString:function(){var u=this.version;return this.family+(u&&!H?" "+u:"")+(this.architecture==64?" 64-bit":"")}}),(e=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(L))&&!/\bi686\b/i.test(L)?(i&&(i.architecture=64,i.family=i.family.replace(RegExp(" *"+e),"")),t&&(/\bWOW64\b/i.test(a)||E&&/\w(?:86|32)$/.test(m.cpuClass||m.platform)&&!/\bWin64; x64\b/i.test(a))&&s.unshift("32-bit")):i&&/^OS X/.test(i.family)&&t=="Chrome"&&parseFloat(r)>=39&&(i.architecture=64),a||(a=null);var v={};return v.description=a,v.layout=c&&c[0],v.manufacturer=f,v.name=t,v.prerelease=X,v.product=o,v.ua=a,v.version=t&&r,v.os=i||{architecture:null,family:null,version:null,toString:function(){return"null"}},v.parse=G,v.toString=ve,v.version&&s.unshift(r),v.name&&s.unshift(t),i&&t&&!(i==String(i).split(" ")[0]&&(i==t.split(" ")[0]||o))&&s.push(o?"("+i+")":"on "+i),s.length&&(v.description=s.join(" ")),v}var Z=G();x&&O?F(Z,function(a,l){x[l]=a}):A.platform=Z}).call(V)})(K,K.exports);var Oe=K.exports;const Ce=ge(Oe),Ee=()=>{switch(Ce.os.family){case"Android":return"https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1";case"Windows":return"https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1";case"OS X":return"https://apps.apple.com/us/app/swap-by-vitalswap/id1595742241";case"Mac OS":return"https://apps.apple.com/us/app/swap-by-vitalswap/id1595742241";case"iOS":return"https://apps.apple.com/lb/app/swap-by-vitalswap/id1595742241";default:return"https://play.google.com/store/apps/details?id=com.swap.swap&hl=en&gl=US&pli=1"}};function Me(){const[y,P]=z.useState(!1),B=Ee();return z.useEffect(()=>{(function(x,O,S){O.BrevoConversationsID="613fed0170e3861a7377a46a",O[S]=O[S]||function(){(O[S].q=O[S].q||[]).push(arguments)};var _=x.createElement("script");_.async=!0,_.src="https://conversations-widget.brevo.com/brevo-conversations.js",x.head&&x.head.appendChild(_)})(document,window,"BrevoConversations")},[]),z.useEffect(()=>{window.BrevoConversationsSetup={customWidgetButton:".custom-chat-button",chatWidth:400,chatHeight:550}},[]),n("nav",{className:"nav",children:n("div",{className:"container",children:h("div",{className:"navbar",children:[n("div",{className:"navbar__logo",children:n(ye,{})}),h("ul",{className:`navbar__list ${y?"open":""}`,onClick:()=>P(!1),children:[n(k,{route:"https://blog.vitalswap.com/how-it-works",label:"How it Works"}),n(k,{route:"https://blog.vitalswap.com/vitalswap-rate/",label:"Our Rates"}),n(k,{route:"https://blog.vitalswap.com",label:"Blog"}),n(k,{route:"https://blog.vitalswap.com/faq/",label:"FAQ"}),n(k,{onClick:x=>{x.preventDefault(),window.BrevoConversations?window.BrevoConversations("openChat",!0):console.log("Brevo Conversations widget is not loaded yet.")},route:"#contact",label:"Contact Us"})]}),n("a",{href:B,className:"navbar__cta btn btn--primary",target:"_blank",children:"Download App"})]})})})}const Ne="/assets/hero-image-4@2x-DFGhzHKn.webp",Pe=()=>n("div",{className:"hero hero--home",children:n("div",{className:"container",children:h("div",{className:"hero__inner hero__inner--home",children:[h("div",{className:"hero__content",children:[n("h1",{"data-aos":"fade-up",className:"heading heading--primary",children:"Borderless payments at your convenience"}),n("p",{"data-aos":"fade-up","data-aos-delay":"500",children:"Pay anyone, anywhere in the world."}),h("div",{className:"hero__ctas",children:[n("a",{"data-aos":"fade-up","data-aos-delay":"1000",className:"btn btn--primary",href:"https://business.vitalswap.com",children:"Get a business account"}),n("a",{"data-aos":"fade-up","data-aos-delay":"1000",className:"btn btn--white",href:"https://app.vitalswap.com",children:"Get a personal account"})]})]}),h("div",{className:"hero__img hero__img--home",children:[n("div",{className:"layer-glow "}),n("img",{"data-aos":"fade-left","data-aos-offset":"-100","data-aos-delay":"1000",className:"img-main",src:Ne,alt:"pattern"}),n("svg",{className:"hero__svg hero__svg--3",viewBox:"0 0 761 567",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M128.323 84.6419C169.624 60.7966 214.846 49.8256 259.39 50.4552L259.429 50.4328L260.626 50.4701C262.34 50.5081 264.049 50.5613 265.765 50.6243L294.695 51.4775L635.728 58.9381L637.786 2.62259L642.167 0.613687L749.109 98.0221C763.037 112.036 764.551 120.318 749.888 121.137L624.912 117.422L422.951 111.806L266.408 107.617C229.317 105.714 191.316 114.116 156.834 134.024C61.1362 189.275 28.6611 312.179 84.2973 408.544C139.934 504.909 262.609 538.236 358.307 482.985C405.875 455.522 437.814 411.345 451.087 362.015L509.177 363.29C494.67 432.112 452.281 494.585 386.823 532.377C264.034 603.27 106.634 560.508 35.2473 436.863C-36.1338 313.227 5.53363 155.535 128.323 84.6419V84.6419Z",fill:"white"})}),h("div",{className:"rate__card",children:[h("div",{className:"rate__send",children:[h("div",{className:"rate__left",children:[n("span",{className:"label",children:"Amount you’ll receive"}),n("span",{className:"atm",children:"N3,567,689.79"})]}),h("div",{className:"rate__right",children:[n("span",{className:"rate",children:"Exchange Rate"}),h("span",{className:"atm",children:["1 USD = ",1589," NGN"]})]})]}),h("div",{className:"rate__receive",children:[h("div",{className:"rate__left",children:[n("span",{className:"label",children:"Amount you’ll Pay"}),h("span",{className:"atm",children:["$5,000"," ",n("span",{className:"rate__btn",children:"Splittable"})]})]}),n("div",{className:"rate__right",children:h("span",{className:"rate__cta",children:[n("span",{children:"Buy Dollar"}),n("img",{src:"/us-flag.svg",alt:"USD svg"})]})})]})]}),h("div",{className:"wallet-card",children:[h("div",{className:"wallet-card__dollar",children:[n("span",{children:"USD Wallet"}),n("span",{children:"$10,000"})]}),n("button",{className:"wallet-card__btn",children:"Manage"})]})]})]})})}),_e=()=>n(xe,{children:h("header",{className:"header header--home",children:[n(Me,{}),n(Pe,{})]})});export{_e as default};
