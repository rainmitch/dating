(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(43)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),i=a.n(r),l=a(20),s=a(11),o=(a(28),a(1)),u=a(2),h=a(4),d=a(3),m=a(5),p=(a(29),function(e){function t(e){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Contents"},this.props.children)}}]),t}(c.a.Component)),f=function(e){function t(e){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"ContentsCard",style:{width:this.props.width+"%"}},c.a.createElement("div",{className:"ContentsCardTitle"},this.props.title),this.props.children)}}]),t}(c.a.Component),b=(c.a.Component,a(7)),v=(a(30),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={},a.tags=[],a.lastRenderedTagCount=0,a.boxRef=0,a.inputRef=0,a.handleKey=a.handleKey.bind(Object(b.a)(a)),a.handleFocus=a.handleFocus.bind(Object(b.a)(a)),a.handleFocusOut=a.handleFocusOut.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleKey",value:function(e){if("Enter"===e.key){e.preventDefault();var t=this.inputRef.value.toLowerCase();t=t[0].toUpperCase()+t.slice(1,t.length),this.tags.includes(t)||this.tags.push(t),this.inputRef.value="",this.forceUpdate()}}},{key:"getTags",value:function(){return this.tags}},{key:"handleFocus",value:function(){this.setState({focused:!0})}},{key:"handleFocusOut",value:function(){this.setState({focused:!1})}},{key:"removeTag",value:function(e){var t=this.tags.indexOf(e);t>-1&&this.tags.splice(t,1),this.forceUpdate()}},{key:"render",value:function(){var e=this,t="tags";null!=this.props.tagName&&(t=this.props.tagName);var a="400px";null!=this.props.width&&(a=this.props.width);var n="TagSelectorTitle noselect "+(this.state.focused?"TagSelectorTitleSelectedAnimation":"TagSelectorTitleUnselectedAnimation");return c.a.createElement("div",{className:"TagSelectorBox",style:{width:a}},c.a.createElement("div",{className:n},this.props.children),c.a.createElement("div",{className:"TagSelector",ref:function(t){e.boxRef=t}},c.a.createElement("div",{className:"TagSelectorTags"},this.tags.map(function(t,a){return c.a.createElement("div",{className:"TagSelectorBubble",key:a,onClick:function(){e.removeTag(t)}},t)})),c.a.createElement("input",{type:"text",className:"TagSelectorInput",onKeyPress:this.handleKey,onFocus:this.handleFocus,onBlur:this.handleFocusOut,ref:function(t){e.inputRef=t}})),c.a.createElement("div",{className:"TagSelectorText noselect"},"Press Enter to separate your ",t))}}]),t}(c.a.Component)),O=(a(31),function(e){function t(e){var a;Object(o.a)(this,t),a=Object(h.a)(this,Object(d.a)(t).call(this,e));var n=!1;return null!=e.state&&"on"===e.state&&(n=!0),a.state={status:n},a.handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){this.setState({status:!this.state.status})}},{key:"toggled",value:function(){return this.state.status}},{key:"render",value:function(){var e="SwitchBulb "+(this.state.status?"SwitchBulbOn":"SwitchBulbOff");return c.a.createElement("div",{className:"Switch",onClick:this.handleClick},c.a.createElement("div",{className:"SwitchBackground"}),c.a.createElement("div",{className:e}))}}]),t}(c.a.Component)),j=(a(32),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){null!=this.props.onClick?this.props.onClick():console.error("Button has no onClick event assigned to it!")}},{key:"render",value:function(){return c.a.createElement("div",{className:"Button noselect",style:this.props.style,onClick:this.handleClick},this.props.children)}}]),t}(c.a.Component)),E=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{clear:"both"}})}}]),t}(c.a.Component),k=(a(33),function(e){function t(e){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{style:{width:this.props.width,display:"inline-block",margin:"10px"}},c.a.createElement("input",{type:"text",style:{width:this.props.width},placeholder:this.props.children,className:"TextInput"}))}}]),t}(c.a.Component)),y=function(){return c.a.createElement(p,null,c.a.createElement(f,{width:"100px",title:"Set your interests"},c.a.createElement(v,{tagName:"interests"},"Select Your Interests"),c.a.createElement(j,{style:{float:"right"}},"Save"),c.a.createElement(E,null),c.a.createElement(O,null),c.a.createElement(E,null),c.a.createElement(k,null)))},g=function(){return c.a.createElement(p,null,c.a.createElement(f,{width:"80"},c.a.createElement("div",{style:{fontSize:"32px",textAlign:"center"}},"We're Sorry, But This Page Doesn't Exist.")))};function C(e,t,a){if(!function(e){for(var t=0;t<e.length;t++)if(!(e[t]>="a"&&e[t]<="z"||e[t]>="A"&&e[t]<="Z"||e[t]>="0"&&e[t]<="9"||"_"===e[t]))return!1;return!0}(e))return!1;var n=e+"="+encodeURIComponent(t);null!=a&&(n+="; expires="+a),n+="; path=/;",document.cookie=n+document.cookie}a(34);var S=function(e){function t(e){var a;Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).menuWidth=45,a.state={barState:"RegularBar"};var n=new Date,c=n.getDate(),r=n.getMonth()+1;return 6===r&&28===c?a.state.barState="GayBar":9===r&&23===c?a.state.barState="BiBar":5===r&&24===c?a.state.barState="PanBar":10===r&&22===c?a.state.barState="AceBar":11===r&&20===c||3===r&&31===c?a.state.barState="TransBar":10===r&&8===c&&(a.state.barState="LesBar"),C("username12","","Thu, 01 Jan 1970 00:00:01 GMT"),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e="Navbar "+this.state.barState+" noselect";return c.a.createElement("div",{className:e},c.a.createElement("div",{style:{marginRight:"auto"}},c.a.createElement("a",{href:"./",className:"Navbar-Title"},"Dating!"),this.props.children),c.a.createElement(N,null))}}]),t}(c.a.Component),w=function(e){function t(e){return Object(o.a)(this,t),Object(h.a)(this,Object(d.a)(t).call(this,e))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"NavbarEntry",href:this.props.link},this.props.children)}}]),t}(c.a.Component),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={showMenu:!1},a.handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){e.preventDefault(),this.setState({showMenu:!this.state.showMenu})}},{key:"render",value:function(){var e="NoRenderProfileMenu";return this.state.showMenu&&(e="RenderProfileMenu"),c.a.createElement("div",{style:{width:"32px"}},c.a.createElement("div",{className:"Profile",onClick:this.handleClick}),c.a.createElement("ul",{className:e},c.a.createElement("a",{href:"./profile"},"My Account"),c.a.createElement("a",{href:"./settings"},"Settings"),c.a.createElement("a",{href:"./logout"},"Log Out")))}}]),t}(c.a.Component);i.a.render(c.a.createElement(l.a,{onUpdate:function(){return window.scrollTo(0,0)}},c.a.createElement("div",null,c.a.createElement(S,null,c.a.createElement(w,{link:"./"},"Home")),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/"},c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/",component:y}),c.a.createElement(s.a,{component:g}))),c.a.createElement(s.a,{component:g})))),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4a023af9.chunk.js.map