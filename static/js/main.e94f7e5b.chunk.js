(this["webpackJsonpdice-betting-game"]=this["webpackJsonpdice-betting-game"]||[]).push([[0],{362:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"userGuess","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dieRollValue","type":"uint256"}],"name":"Game","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"guessValue","type":"uint256"},{"internalType":"uint256","name":"stakeAmount","type":"uint256"}],"name":"playGame","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mod","type":"uint256"}],"name":"randomMod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},363:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},382:function(e,t){},401:function(e,t){},403:function(e,t){},523:function(e,t){},525:function(e,t){},557:function(e,t){},562:function(e,t){},564:function(e,t){},571:function(e,t){},584:function(e,t){},601:function(e,t){},606:function(e,t){},608:function(e,t){},625:function(e,t){},703:function(e,t){},770:function(e,t){},811:function(e,t){},863:function(e,t,n){},864:function(e,t,n){},874:function(e,t,n){"use strict";n.r(t);var a,r=n(10),i=n.n(r),s=n(359),c=n.n(s),u=n(80),o=n(15),l=n.n(o),p=n(100),d=n(55),b=n(360),y=n(193),f=n.n(y),m=n(194),j=n(19),x=n.n(j),O=(n(863),n(864),n(13)),v=function(e){var t=e.face,n=e.rolling;return Object(O.jsx)("i",{className:"die fas fa-dice-".concat(t," ").concat(n&&"shaking")})},h=n(362),w=n(363),g=n(364),T=n.n(g),k=n(192),S=function(e){var t=e.sides,n=Object(k.css)(a||(a=Object(b.a)(["\n    display: block;\n    margin: auto;\n    /* border-color: red; */\n  "]))),i=Object(r.useState)(),s=Object(d.a)(i,2),c=s[0],o=s[1],y=Object(r.useState)(),j=Object(d.a)(y,2),g=j[0],S=j[1],N=Object(r.useState)(),A=Object(d.a)(N,2),B=A[0],C=A[1],M=Object(r.useState)(1),D=Object(d.a)(M,2),F=D[0],G=D[1],V=Object(r.useState)(.5),U=Object(d.a)(V,2),E=U[0],P=U[1],R=Object(r.useState)(),J=Object(d.a)(R,2),W=J[0],I=J[1],K=Object(r.useState)(),L=Object(d.a)(K,2),Y=L[0],z=L[1],q=Object(r.useState)({die:"six",rolling:!1,side:6}),H=Object(d.a)(q,2),Q=H[0],X=H[1];Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te("\u231b Loading..."),e.next=3,ie();case 3:return e.next=5,se();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[W]);var Z="0x727ed4FcB209C99826F7889986AB9Ce2be63bEF5",$=Q.die,_=Q.rolling,ee=Q.side,te=function(e){z(e)},ne=function(e){z()},ae=function(){var e=Object(p.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E>0){e.next=2;break}return e.abrupt("return",te("\u26a0\ufe0f Invalid Stake amount"));case 2:if(!(F<=0||F>6)){e.next=4;break}return e.abrupt("return",te("\u26a0\ufe0f Guess Range is from 1 ~ 6"));case 4:return te("\u231b Waiting for payment approval..."),e.prev=5,X((function(e){return Object(u.a)(Object(u.a)({},e),{},{rolling:!0})})),e.next=9,re(E);case 9:return te("\u231b Awaiting payment for your ".concat(E," cUSD Stake")),X((function(e){return Object(u.a)(Object(u.a)({},e),{},{rolling:!0})})),e.next=13,g.methods.playGame(F,new x.a(E).shiftedBy(18).toString()).send({from:c.defaultAccount});case 13:se(),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),te("\u26a0\ufe0f ".concat(e.t0,"."));case 19:X((function(e){return Object(u.a)(Object(u.a)({},e),{},{rolling:!1})}));case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(p.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.methods.approve(Z,new x.a(t).shiftedBy(18).toString()).send({from:c.defaultAccount});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(p.a)(l.a.mark((function e(){var n,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.celo){e.next=24;break}return te("\u26a0\ufe0f Please approve this DApp to use it."),e.prev=2,e.next=5,window.celo.enable();case 5:return ne(),n=new f.a(window.celo),a=Object(m.newKitFromWeb3)(n),e.next=10,a.web3.eth.getAccounts();case 10:r=e.sent,a.defaultAccount=r[0],o(a),i=new c.web3.eth.Contract(h,Z),S(i),i.once("Game",{},{fromBlock:6523028,toBlock:"latest"},(function(e,n){var a=t[parseInt(n.returnValues.dieRollValue)],r=Object.values(a);X({die:Object.keys(a),rolling:!1,side:r[0]}),n.returnValues.userGuess===n.returnValues.dieRollValue?te("\ud83c\udf89 You got it right!!! you have won ".concat(2*E," cUSD.")):te("\u26a0\ufe0f oops! you got it wrong!!! you lost ".concat(E," cUSD."))})),C(new c.web3.eth.Contract(w,"0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1")),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),te("\u26a0\ufe0f ".concat(e.t0,"."));case 22:e.next=25;break;case 24:te("\u26a0\ufe0f Please install the CeloExtensionWallet.");case 25:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(p.a)(l.a.mark((function e(){var t,n,a,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return te("\u231b Loading..."),e.next=3,window.celo.enable();case 3:return t=new f.a(window.celo),n=Object(m.newKitFromWeb3)(t),e.next=7,n.web3.eth.getAccounts();case 7:return a=e.sent,e.next=10,n.getTotalBalance(a[0]);case 10:r=e.sent,i=r.cUSD.shiftedBy(-18).toFixed(2),I(i),ne();case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"hero",children:Object(O.jsxs)("div",{className:"container mt-2",children:[Object(O.jsx)("nav",{className:"navbar bg-white navbar-light",children:Object(O.jsxs)("div",{className:"container-fluid",children:[Object(O.jsx)("span",{className:"navbar-brand m-0 h4 fw-bold",children:"Dice Betting Game"}),Object(O.jsxs)("span",{className:"nav-link border rounded-pill bg-light text-dark",children:[Object(O.jsx)("span",{id:"balance",children:"".concat(null!==W&&void 0!==W?W:0," ")}),"cUSD"]})]})}),Y&&Object(O.jsx)("div",{className:"alert alert-warning sticky-top mt-2",role:"alert",children:Object(O.jsx)("span",{id:"notification",children:Y})}),W?Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"randomNum",children:Object(O.jsxs)("p",{children:["Dice Roll Output: ",Object(O.jsx)("span",{children:ee})]})}),_?Object(O.jsx)(T.a,{color:"green",loading:!0,className:"loader",css:n,size:150}):Object(O.jsx)(v,{face:String($),rolling:_}),Object(O.jsxs)("div",{className:"numContainer",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Your Prediction:"}),Object(O.jsx)("input",{type:"number",value:F,onChange:function(e){return G(+e.target.value)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"cUSD stake:"}),Object(O.jsx)("input",{type:"number",value:E,onChange:function(e){return P(+e.target.value)}})]})]}),Object(O.jsx)("button",{onClick:ae,disabled:_,children:_?"...":"Place Bet "})]}):Object(O.jsx)("div",{})," "]})})};S.defaultProps={sides:[{one:1},{two:2},{three:3},{four:4},{five:5},{six:6}]};var N=S;n(873);var A=function(){return Object(O.jsx)(N,{})};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[874,1,2]]]);
//# sourceMappingURL=main.e94f7e5b.chunk.js.map