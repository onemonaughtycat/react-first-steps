(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(11),o=n.n(i),s=(n(16),n(2)),c=n(3),u=n(6),l=n(5),p=n(4),h=(n(17),n(0)),d=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selected:-1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleClick",value:function(e){for(var t=0;t<e.target.parentNode.children.length;t++)e.target===e.target.parentNode.children[t]&&this.setState({selected:t});this.props.onItemClick(e.target.outerText)}},{key:"render",value:function(){var e=this,t=this.props.ids.map((function(t,n){var a="system-menu-item";return n===e.state.selected&&(a+=" selected"),Object(h.jsx)("li",{className:a,onClick:e.handleClick,children:t},n)}));return Object(h.jsx)("div",{className:"system-menu-wrapper",children:Object(h.jsx)("ul",{className:"system-menu-container",children:t})})}}]),n}(r.a.Component),b=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("h1",{children:"Hello, world!"})}}]),n}(r.a.Component),j=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("blockquote",{children:"The quick brown fox jump over a lazy dog."})}}]),n}(r.a.Component),f=n(9),m=n(7),O=[{id:1,name:"\u041b\u0435\u0433\u043a\u0438\u0439",options:{width:"9",height:"9",bombsCount:"10"}},{id:2,name:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439",options:{width:"16",height:"16",bombsCount:"40"}},{id:3,name:"\u0421\u043b\u043e\u0436\u043d\u044b\u0439",options:{width:"30",height:"16",bombsCount:"99"}}],v=(n(19),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={options:Object(m.a)({},e.props.options)},e.handleSelectChange=function(t){var n=t.target,a=O.filter((function(e){return+e.id===+n.value}));if(a.length){var r=Object(m.a)({},a[0].options);e.setState({options:r})}},e.handleInputChange=function(t){var n=t.target,a=Object(m.a)(Object(m.a)({},e.state.options),{},Object(f.a)({},n.name,n.value));e.setState({options:a})},e.handleClick=function(){for(var t in e.state.options)if(!e.state.options[t])return;e.props.onApplyClick(e.state.options)},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"options",children:[Object(h.jsx)("label",{children:"\u041f\u0440\u0435\u0441\u0435\u0442"}),Object(h.jsx)("select",{onChange:this.handleSelectChange,children:O.map((function(e){return Object(h.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f"}),Object(h.jsx)("input",{type:"text",name:"width",value:this.state.options.width,onChange:this.handleInputChange}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u043f\u043e\u043b\u044f"}),Object(h.jsx)("input",{type:"text",name:"height",value:this.state.options.height,onChange:this.handleInputChange}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u043e\u043c\u0431"}),Object(h.jsx)("input",{type:"text",name:"bombsCount",value:this.state.options.bombsCount,onChange:this.handleInputChange}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:this.handleClick,children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})]})}}]),n}(r.a.Component)),k={prepared:1,running:2,lose:3,win:4},C=(n(20),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={expanded:!1},e.handleRestartClick=function(){e.props.onRestartClick()},e.handleOptionsClick=function(){e.setState({expanded:!e.state.expanded})},e.handleApplyClick=function(t){e.props.onRestartClick(t)},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"bar",children:[Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)("div",{className:"main-item button",onClick:this.handleRestartClick,children:"\u21bb"}),Object(h.jsx)("div",{className:"main-item message",children:this.message}),Object(h.jsx)("div",{className:"main-item button expander",onClick:this.handleOptionsClick,children:"\u2699"})]}),Object(h.jsx)("div",{className:this.expandable,children:Object(h.jsx)(v,{options:this.props.options,onApplyClick:this.handleApplyClick})})]})}},{key:"message",get:function(){switch(this.props.status){case k.win:return"\u041f\u043e\u0431\u0435\u0434\u0430!";case k.lose:return"\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430";default:return""}}},{key:"expandable",get:function(){return"expandable"+(this.state.expanded?" open":"")}}]),n}(r.a.Component)),y={bomb:"\ud83d\udca3",mark:"\u2755",helper:"\u2754",exploded:"\ud83d\udca5"},x={openSquare:1,setMark:2,openNearSquares:3},g=(n(21),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleContextMenu=function(e){e.preventDefault()},e.handleMouseDown=function(t){e.buttons=t.buttons},e.handleMouseUp=function(t){if(e.buttons){switch(e.buttons){case 1:e.props.onSquareClick(x.openSquare,e.props);break;case 2:e.props.onSquareClick(x.setMark,e.props);break;case 3:e.props.onSquareClick(x.openNearSquares,e.props)}e.buttons=null}},e.handleTouchStart=function(t){e._timeStamp=t.timeStamp},e.handleTouchEnd=function(t){t.preventDefault();var n=t.timeStamp-e._timeStamp;!e.props.isOpened&&n<500&&e.props.onSquareClick(x.openSquare,e.props),!e.props.isOpened&&n>=500&&e.props.onSquareClick(x.setMark,e.props),e.props.isOpened&&e.props.onSquareClick(x.openNearSquares,e.props)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=["square"],t="";return this.props.isOpened?(e.push("opened"),this.props.withBomb&&(t=y.bomb),this.props.nearBombsCount&&(t=this.props.nearBombsCount)):this.props.isMarked&&(t=y.mark),Object(h.jsxs)("div",{className:e.join(" "),onContextMenu:this.handleContextMenu,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,children:[Object(h.jsx)("div",{className:"dummy"}),Object(h.jsx)("div",{className:"value",children:t})]})}}]),n}(r.a.Component)),S=(n(22),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleSquareClick=function(t,n){e.props.onSquareClick(t,n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsx)("div",{className:"board",children:this.props.data.map((function(t,n){return Object(h.jsx)("div",{className:"row",children:t.map((function(t,n){return Object(h.jsx)(g,{x:t.x,y:t.y,withBomb:t.withBomb,nearBombsCount:t.nearBombsCount,isOpened:t.isOpened,isMarked:t.isMarked,onSquareClick:e.handleSquareClick},n)}))},n)}))})}}]),n}(r.a.Component)),w=n(8),M=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"initBoard",value:function(e,t){return Array(+t).fill().map((function(t,n){return Array(+e).fill().map((function(e,t){return{x:t,y:n,withBomb:!1,nearBombsCount:0,isOpened:!1,isMarked:!1}}))}))}},{key:"generateBombs",value:function(e,t,n){e=e.map((function(e){return e.map((function(e){return e}))}));for(var a=t.x,r=t.y,i=e[0].length,o=e.length,s=0;s<+n;s++){var c=Math.floor(Math.random()*i),u=Math.floor(Math.random()*o),l=!0;e[u][c].withBomb&&(l=!1);var p=Math.random()>=.75?1:0;a-p<=c&&c<=a+p&&r-p<=u&&u<=r+p&&(l=!1),l?e[u][c].withBomb=!0:s--}var h,d=Object(w.a)(e);try{for(d.s();!(h=d.n()).done;){var b,j=h.value,f=Object(w.a)(j);try{var m=function(){var t=b.value;if(t.withBomb)return"continue";var n=0;q(e,t,(function(e){e.withBomb&&n++})),n&&(t.nearBombsCount=n)};for(f.s();!(b=f.n()).done;)m()}catch(O){f.e(O)}finally{f.f()}}}catch(O){d.e(O)}finally{d.f()}return e}},{key:"openSquare",value:function(e,t){return t.isOpened?null:(B(e=e.map((function(e){return e.map((function(e){return e}))})),t=e[t.y][t.x]),t.isOpened&&t.withBomb&&e.forEach((function(e){return e.forEach((function(e){return e.isOpened=!0}))})),e)}},{key:"setMark",value:function(e,t){return t.isOpened?null:((t=(e=e.map((function(e){return e.map((function(e){return e}))})))[t.y][t.x]).isMarked=!t.isMarked,e)}},{key:"openNearSquares",value:function(e,t){var n=0,a=!1;return q(e,t,(function(e){e.isOpened||e.isMarked||(n++,e.withBomb&&(a=!0))})),!n||a?null:(q(e=e.map((function(e){return e.map((function(e){return e}))})),t,(function(t){t.isOpened||t.isMarked||B(e,t)})),e)}},{key:"getStatus",value:function(e,t){var n,a=!0,r=Object(w.a)(e);try{for(r.s();!(n=r.n()).done;){var i,o=n.value,s=Object(w.a)(o);try{for(s.s();!(i=s.n()).done;){var c=i.value;c.isOpened||c.withBomb||(a=!1)}}catch(u){s.e(u)}finally{s.f()}if(!a)break}}catch(u){r.e(u)}finally{r.f()}return t.isOpened&&t.withBomb?k.lose:a?k.win:k.running}},{key:"logBoard",value:function(e){console.log(e.map((function(e){return e.map((function(e){return e.withBomb?"Q":e.nearBombsCount?String(e.nearBombsCount):" "}))})))}}]),e}();function B(e,t){t.isOpened||t.isMarked||(t.isOpened=!0,t.withBomb||t.nearBombsCount||q(e,t,(function(t){return B(e,t)})))}function q(e,t,n){for(var a=t.x,r=t.y,i=-1;i<=1;i++)for(var o=-1;o<=1;o++)if(e[r+i]&&e[r+i][a+o]){var s=e[r+i][a+o];s.x===a&&s.y===r||n(s)}}n(23);var N=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state=e.restart(),e.handleRestartClick=function(t){e.setState(e.restart(t))},e.handleSquareClick=function(t,n){if(!e.isGameOver){var a;switch(t){case x.openSquare:e.state.status===k.prepared&&(a=M.generateBombs(e.state.board,n,e.state.options.bombsCount)),a=M.openSquare(a||e.state.board,n);break;case x.setMark:a=M.setMark(e.state.board,n);break;case x.openNearSquares:a=M.openNearSquares(e.state.board,n)}if(a){var r=M.getStatus(a,a[n.y][n.x]);e.setState({board:a,status:r})}}},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(C,{options:this.state.options,status:this.state.status,onRestartClick:this.handleRestartClick}),Object(h.jsx)(S,{data:this.state.board,onSquareClick:this.handleSquareClick})]})}},{key:"restart",value:function(e){var t=e||this.state&&this.state.options||{},n=t.width,a=void 0===n?9:n,r=t.height,i=void 0===r?9:r,o=t.bombsCount,s=void 0===o?10:o;return{options:{width:a,height:i,bombsCount:s},board:M.initBoard(a,i,s),status:k.prepared}}},{key:"isGameOver",get:function(){var e=this.state.status;return e===k.win||e===k.lose}}]),n}(r.a.Component),A={Hello:b,Fox:j,Minesweeper:function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(N,{})}}]),n}(r.a.Component)},I=Object.keys(A),T=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=A[this.props.id];return e?Object(h.jsx)(e,{}):null}}]),n}(r.a.Component),R=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={id:""},a.handleMenuItemClick=a.handleMenuItemClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleMenuItemClick",value:function(e){this.state.id!==e&&this.setState({id:e})}},{key:"render",value:function(){var e=this.state.id;return Object(h.jsxs)("div",{children:[Object(h.jsx)(d,{ids:I,onItemClick:this.handleMenuItemClick}),Object(h.jsx)(T,{id:e})]})}}]),n}(r.a.Component);o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.5e738c10.chunk.js.map