(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(9),o=n.n(i),s=(n(15),n(2)),c=n(3),u=n(6),l=n(5),h=n(4),d=(n(16),n(0)),b=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={selected:-1},a.handleClick=a.handleClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleClick",value:function(e){for(var t=0;t<e.target.parentNode.children.length;t++)e.target===e.target.parentNode.children[t]&&this.setState({selected:t});this.props.onItemClick(e.target.outerText)}},{key:"render",value:function(){var e=this,t=this.props.ids.map((function(t,n){var a="system-menu-item";return n===e.state.selected&&(a+=" selected"),Object(d.jsx)("li",{className:a,onClick:e.handleClick,children:t},n)}));return Object(d.jsx)("div",{className:"system-menu-wrapper",children:Object(d.jsx)("ul",{className:"system-menu-container",children:t})})}}]),n}(r.a.Component),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("h1",{children:"Hello, world!"})}}]),n}(r.a.Component),j=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)("blockquote",{children:"The quick brown fox jump over a lazy dog."})}}]),n}(r.a.Component),m=n(10),f={running:1,lose:2,win:3},O=[{id:1,name:"\u041b\u0435\u0433\u043a\u0438\u0439",options:{width:"9",height:"9",bombsCount:"10"}},{id:2,name:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439",options:{width:"16",height:"16",bombsCount:"40"}},{id:3,name:"\u0421\u043b\u043e\u0436\u043d\u044b\u0439",options:{width:"30",height:"16",bombsCount:"99"}}],v=(n(18),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={width:"9",height:"9",bombsCount:"10",expanded:!1},e.handleRestartClick=function(t){var n=e.state,a=n.width,r=n.height,i=n.bombsCount;e.props.onRestartClick({width:a,height:r,bombsCount:i}),e.setState({expanded:!1})},e.handleOptionsClick=function(t){e.setState({expanded:!e.state.expanded})},e.handleInputChange=function(t){e.setState(Object(m.a)({},t.target.name,t.target.value))},e.handleSelectChange=function(t){var n=O.filter((function(e){return e.id===+t.target.value}))[0].options,a=n.width,r=n.height,i=n.bombsCount;e.setState({width:a,height:r,bombsCount:i})},e}return Object(c.a)(n,[{key:"render",value:function(){var e="";switch(this.props.status){case f.win:e="\u041f\u043e\u0431\u0435\u0434\u0430!";break;case f.lose:e="\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430"}var t="expandable"+(this.state.expanded?" open":"");return Object(d.jsxs)("div",{className:"bar",children:[Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"main-item button",onClick:this.handleRestartClick,children:"\u21bb"}),Object(d.jsx)("div",{className:"main-item message",children:e}),Object(d.jsx)("div",{className:"main-item button expander",onClick:this.handleOptionsClick,children:"\u2699"})]}),Object(d.jsxs)("div",{className:t,children:[Object(d.jsx)("label",{children:"\u041f\u0440\u0435\u0441\u0435\u0442"}),Object(d.jsx)("select",{onChange:this.handleSelectChange,children:O.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"\u0428\u0438\u0440\u0438\u043d\u0430 \u043f\u043e\u043b\u044f"}),Object(d.jsx)("input",{type:"text",name:"width",value:this.state.width,onChange:this.handleInputChange}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u043f\u043e\u043b\u044f"}),Object(d.jsx)("input",{type:"text",name:"height",value:this.state.height,onChange:this.handleInputChange}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0431\u043e\u043c\u0431"}),Object(d.jsx)("input",{type:"text",name:"bombsCount",value:this.state.bombsCount,onChange:this.handleInputChange}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:this.handleRestartClick,children:"\u041f\u0440\u0438\u043d\u044f\u0442\u044c"})]})]})}}]),n}(r.a.Component)),k={bomb:"\ud83d\udca3",mark:"\u2755",helper:"\u2754",exploded:"\ud83d\udca5"},C={openSquare:1,setMark:2,openNearSquares:3},x=(n(19),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleContextMenu=function(e){e.preventDefault()},e.handleMouseDown=function(t){e.buttons=t.buttons},e.handleMouseUp=function(t){if(e.buttons){switch(e.buttons){case 1:e.props.onSquareClick(C.openSquare,e.props);break;case 2:e.props.onSquareClick(C.setMark,e.props);break;case 3:e.props.onSquareClick(C.openNearSquares,e.props)}e.buttons=null}},e.handleTouchStart=function(t){e._timeStamp=t.timeStamp},e.handleTouchEnd=function(t){t.preventDefault();var n=t.timeStamp-e._timeStamp;!e.props.isOpened&&n<500&&e.props.onSquareClick(C.openSquare,e.props),!e.props.isOpened&&n>=500&&e.props.onSquareClick(C.setMark,e.props),e.props.isOpened&&e.props.onSquareClick(C.openNearSquares,e.props)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=["square"],t="";return this.props.isOpened?(e.push("opened"),this.props.withBomb&&(t=k.bomb),this.props.nearBombsCount&&(t=this.props.nearBombsCount)):this.props.isMarked&&(t=k.mark),Object(d.jsx)("div",{className:e.join(" "),onContextMenu:this.handleContextMenu,onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,children:Object(d.jsx)("div",{className:"value",children:t})})}}]),n}(r.a.Component)),y=(n(20),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).handleSquareClick=function(t,n){e.props.onSquareClick(t,n)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"board",children:this.props.data.map((function(t,n){return Object(d.jsx)("div",{className:"row",children:t.map((function(t,n){return Object(d.jsx)(x,{x:t.x,y:t.y,withBomb:t.withBomb,nearBombsCount:t.nearBombsCount,isOpened:t.isOpened,isMarked:t.isMarked,onSquareClick:e.handleSquareClick},n)}))},n)}))})}}]),n}(r.a.Component)),g=n(7),w=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"initBoard",value:function(t,n,a){for(var r=Array(+n).fill().map((function(e,n){return Array(+t).fill().map((function(e,t){return{x:t,y:n,withBomb:!1,nearBombsCount:0,isOpened:!1,isMarked:!1}}))})),i=0;i<+a;i++){var o=Math.floor(Math.random()*t),s=Math.floor(Math.random()*n);r[s][o].withBomb?i--:r[s][o].withBomb=!0}var c,u=Object(g.a)(r);try{for(u.s();!(c=u.n()).done;){var l,h=c.value,d=Object(g.a)(h);try{var b=function(){var e=l.value;if(e.withBomb)return"continue";var t=0;M(r,e,(function(e){e.withBomb&&t++})),t&&(e.nearBombsCount=t)};for(d.s();!(l=d.n()).done;)b()}catch(p){d.e(p)}finally{d.f()}}}catch(p){u.e(p)}finally{u.f()}return e.logBoard(r),r}},{key:"openSquare",value:function(e,t){return t.isOpened?null:(S(e=e.map((function(e){return e.map((function(e){return e}))})),t=e[t.y][t.x]),t.isOpened&&t.withBomb&&e.forEach((function(e){return e.forEach((function(e){return e.isOpened=!0}))})),e)}},{key:"setMark",value:function(e,t){return t.isOpened?null:((t=(e=e.map((function(e){return e.map((function(e){return e}))})))[t.y][t.x]).isMarked=!t.isMarked,e)}},{key:"openNearSquares",value:function(e,t){var n=0,a=!1;return M(e,t,(function(e){e.isOpened||e.isMarked||(n++,e.withBomb&&(a=!0))})),!n||a?null:(M(e=e.map((function(e){return e.map((function(e){return e}))})),t,(function(t){t.isOpened||t.isMarked||S(e,t)})),e)}},{key:"getStatus",value:function(e,t){var n,a=!0,r=Object(g.a)(e);try{for(r.s();!(n=r.n()).done;){var i,o=n.value,s=Object(g.a)(o);try{for(s.s();!(i=s.n()).done;){var c=i.value;c.isOpened||c.withBomb||(a=!1)}}catch(u){s.e(u)}finally{s.f()}if(!a)break}}catch(u){r.e(u)}finally{r.f()}return t.isOpened&&t.withBomb?f.lose:a?f.win:f.running}},{key:"logBoard",value:function(e){console.log(e.map((function(e){return e.map((function(e){return e.withBomb?"Q":e.nearBombsCount?String(e.nearBombsCount):" "}))})))}}]),e}();function S(e,t){t.isOpened||t.isMarked||(t.isOpened=!0,t.withBomb||t.nearBombsCount||M(e,t,(function(t){return S(e,t)})))}function M(e,t,n){for(var a=t.x,r=t.y,i=-1;i<=1;i++)for(var o=-1;o<=1;o++)if(e[r+i]&&e[r+i][a+o]){var s=e[r+i][a+o];s.x===a&&s.y===r||n(s)}}n(21);var B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={board:w.initBoard(9,9,10),status:f.running},e.handleRestartClick=function(t){var n=t.width,a=t.height,r=t.bombsCount;e.setState({board:w.initBoard(n,a,r),status:f.running})},e.handleSquareClick=function(t,n){if(e.state.status===f.running){var a;switch(t){case C.openSquare:a=w.openSquare(e.state.board,n);break;case C.setMark:a=w.setMark(e.state.board,n);break;case C.openNearSquares:a=w.openNearSquares(e.state.board,n)}if(a){var r=w.getStatus(a,a[n.y][n.x]);e.setState({board:a,status:r})}}},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(v,{status:this.state.status,onRestartClick:this.handleRestartClick}),Object(d.jsx)(y,{data:this.state.board,onSquareClick:this.handleSquareClick})]})}}]),n}(r.a.Component),q={Hello:p,Fox:j,Minesweeper:function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsx)(B,{width:"9",height:"9",bombsCount:"10"})}}]),n}(r.a.Component)},N=Object.keys(q),I=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=q[this.props.id];return e?Object(d.jsx)(e,{}):null}}]),n}(r.a.Component),T=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={id:""},a.handleMenuItemClick=a.handleMenuItemClick.bind(Object(u.a)(a)),a}return Object(c.a)(n,[{key:"handleMenuItemClick",value:function(e){this.state.id!==e&&this.setState({id:e})}},{key:"render",value:function(){var e=this.state.id;return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{ids:N,onItemClick:this.handleMenuItemClick}),Object(d.jsx)(I,{id:e})]})}}]),n}(r.a.Component);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.4d25f44b.chunk.js.map