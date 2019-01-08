(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{412:function(e,t,l){l(164),l(413),e.exports=l(414)},414:function(e,t,l){"use strict";l.r(t),function(e){var t=l(60),n=l(427);Object(t.configure)(function(){n.keys().forEach(function(e){return n(e)})},e)}.call(this,l(328)(e))},427:function(e,t,l){var n={"./Trans.story.tsx":428,"./interpolations.story.tsx":430,"./precreated.story.tsx":431,"./readme.story.tsx":433,"./useT.story.tsx":434,"./withT.story.tsx":435};function a(e){var t=o(e);return l(t)}function o(e){var t=n[e];if(!(t+1)){var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}return t}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=427},428:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(88),{Provider:r,Trans:c}=o.default(),s=({t:e,T:t})=>n.createElement("div",null,e("Hello"),", user! ",e("welcome"),n.createElement("br",null),n.createElement("button",{onClick:()=>t.setLocale("en")},"en"),n.createElement("button",{onClick:()=>t.setLocale("fr")},"fr"));a.storiesOf("Trans",e).add("Switch preloaded translations as FaCC",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}},fr:{main:{Hello:"Bonjour",welcome:"Lala!"}}}},n.createElement(c,null,({t:e,T:t})=>n.createElement(s,{t:e,T:t})),n.createElement(c,null,"Hello"),n.createElement(c,null," yo ","welcome"," ... ",e=>e("welcome"),"!"))).add('Switch preloaded translations as "children" render prop',()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}},fr:{main:{Hello:"Bonjour",welcome:"Lala!"}}}},n.createElement(c,{children:({t:e,T:t})=>n.createElement(s,{t:e,T:t})}))).add("Missing language",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}}},n.createElement(c,null,({t:e,T:t})=>n.createElement(s,{t:e,T:t})))).add("Load translations dynamically, 2 sec delay",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}},loader:()=>new Promise(e=>{setTimeout(()=>{e({Hello:"Bonjour",welcome:"Lala!"})},2e3)})},n.createElement(c,null,({t:e,T:t})=>n.createElement(s,{t:e,T:t})))).add("Without provider",()=>n.createElement(c,null,({t:e,T:t})=>n.createElement(s,{t:e,T:t})))}).call(this,l(42)(e))},430:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(88),{Provider:r,useT:c}=o.default(),s=e=>{const[t]=c();return n.createElement("div",null,t("Hello"),", ",e.name,"! ",t("you_have_likes",3),n.createElement("div",null,t.t("hello_user")`Hello, ${e.name}!`),n.createElement("div",null,t.t("missing")`Hello, ${e.name}!`))};a.storiesOf("Interpolations",e).add("Example",()=>n.createElement(r,{locale:"de",map:{de:{main:{Hello:"Hallo",you_have_likes:e=>`You have ${e} likes.`,hello_user:e=>`Hi, ${e}!`}}}},n.createElement(s,{name:"Mike"})))}).call(this,l(42)(e))},431:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(432),r=()=>{const[e,{setLocale:t}]=o.useT();return n.createElement("div",null,e("Hello"),", user! ",e("welcome"),n.createElement("br",null),n.createElement("button",{onClick:()=>t("en")},"en"),n.createElement("button",{onClick:()=>t("fr")},"fr"))};a.storiesOf("useT precreated",e).add("Switch preloaded translations",()=>n.createElement(o.Provider,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}},fr:{main:{Hello:"Bonjour",welcome:"Lala!"}}}},n.createElement(r,null))).add("Missing language",()=>n.createElement(o.Provider,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}}},n.createElement(r,null))).add("Load translations dynamically, 2 sec delay",()=>n.createElement(o.Provider,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}},loader:()=>new Promise(e=>{setTimeout(()=>{e({Hello:"Bonjour",welcome:"Lala!"})},2e3)})},n.createElement(r,null))).add("Without provider",()=>n.createElement(r,null))}).call(this,l(42)(e))},432:function(e,t,l){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),n=l(88).default(),t.Consumer=n.Consumer,t.Provider=n.Provider,t.Trans=n.Trans,t.context=n.context,t.useT=n.useT,t.withT=n.withT,t.T=n.T},433:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(88),{Provider:r,useT:c}=o.default(),s=e=>{const[t]=c();return n.createElement("div",null,n.createElement("div",null,t("Hello"),", ",e.name,"!"),n.createElement("div",null,t.t("hello_user")`Hello, ${e.name}!`))};a.storiesOf("Readme",e).add("Example",()=>n.createElement(r,{locale:"de",map:{de:{main:{Hello:"Hallo",hello_user:e=>`Hi, ${e}!`}}}},n.createElement(s,{name:"Mike"})))}).call(this,l(42)(e))},434:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(88),{Provider:r,useT:c,withT:s}=o.default(),i=()=>{const[e,{setLocale:t}]=c();return n.createElement("div",null,e("Hello"),", user! ",e("welcome"),n.createElement("br",null),n.createElement("button",{onClick:()=>t("en")},"en"),n.createElement("button",{onClick:()=>t("fr")},"fr"))};a.storiesOf("useT",e).add("Switch preloaded translations",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}},fr:{main:{Hello:"Bonjour",welcome:"Lala!"}}}},n.createElement(i,null))).add("Missing language",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}}},n.createElement(i,null))).add("Load translations dynamically, 2 sec delay",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}},loader:()=>new Promise(e=>{setTimeout(()=>{e({Hello:"Bonjour",welcome:"Lala!"})},2e3)})},n.createElement(i,null))).add("Without provider",()=>n.createElement(i,null)).add("Initial language not default, loaded with loader",()=>n.createElement(r,{defaultLocale:"en",locale:"fr",map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}},loader:async(e,t)=>({Hello:"Bonjour",welcome:"Lala!"})},n.createElement(i,null)))}).call(this,l(42)(e))},435:function(e,t,l){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(60),o=l(88),{Provider:r,withT:c}=o.default(),s=c(({t:e,T:t})=>n.createElement("div",null,e("Hello"),", user! ",e("welcome"),n.createElement("br",null),n.createElement("button",{onClick:()=>t.setLocale("en")},"en"),n.createElement("button",{onClick:()=>t.setLocale("fr")},"fr")));a.storiesOf("withT",e).add("Switch preloaded translations",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}},fr:{main:{Hello:"Bonjour",welcome:"Lala!"}}}},n.createElement(s,null))).add("Missing language",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}}},n.createElement(s,null))).add("Load translations dynamically",()=>n.createElement(r,{map:{en:{main:{Hello:"Hello",welcome:"Welcome!"}}},loader:()=>Promise.resolve({Hello:"Bonjour",welcome:"Lala!"})},n.createElement(s,null))).add("Without provider",()=>n.createElement(s,null))}).call(this,l(42)(e))},88:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=l(1),a=l(429),o=(e,t)=>{let l="",n=0;for(;n<t.length;n++)l+=e[n]+t[n];return l+e[n]};t.createTranslations=((e="main")=>{var t;const l=n.createContext({}),{Consumer:r}=l,c=((t=class extends n.Component{constructor(e){super(e),this.load=(async(e,t)=>{if(this.state.map[e]||(this.state.map[e]={}),!this.state.map[e][t]){this.state.map[e][t]={},this.setState(Object.assign({},this.state)),a.default(this.props.loader,"use-t provider .loader() prop not set.");const l=await this.props.loader(e,t);this.state.map[e][t]=l,this.setState(Object.assign({},this.state))}}),this.setLocale=(e=>{e!==this.state.locale&&(this.state.map[e]||(this.state.map[e]={}),this.setState({locale:e}))}),this.createT=((e=[this.props.ns])=>{const{locale:t}=this.state,l=this.state.map[t];for(const n of e)l[n]||this.load(t,n).catch(e=>console.error(e));const n=(l,...n)=>{for(const a of[t,this.props.defaultLocale]){if(!a)break;const t=this.state.map[a];for(const a of e){const e=t[a][l];if(void 0!==e)return"function"==typeof e?e(...n):e||l}}return l};return n.t=(e=>(t,...l)=>{const a=n(e,...l);return a!==e?a:o(t,l)}),n});const{map:t={},locale:l,defaultLocale:n,ns:r}=e;t[n]?t[n][r]||(t[n][r]={}):t[n]={[r]:{}},this.state={locale:l,ns:r,map:t,load:this.load,setLocale:this.setLocale,createT:this.createT},l!==n&&this.load(l,r)}render(){return n.createElement(l.Provider,{value:this.state,children:this.props.children})}}).defaultProps={locale:"en",defaultLocale:"en",ns:e},t),s=e=>e;s.t=(e=>(e,...t)=>o(e,t));return{Consumer:r,Provider:c,context:l,useT:t=>{const a=t instanceof Array?t:[t||e],o=n.useContext(l);return[o.createT?o.createT(a):s,o]},Trans:e=>n.createElement(r,null,t=>{const l=Array.isArray(e.ns)?e.ns:"string"==typeof e.ns?[e.ns]:void 0,a=t.createT?t.createT(l):s;return"function"==typeof e.children?e.children({t:a,T:t})||null:Array.isArray(e.children)?n.createElement(n.Fragment,null,...e.children.map(e=>"function"==typeof e?e(a):"string"==typeof e?a(e):e)):e.children||null}),withT:(t,l=e)=>{Array.isArray(l)||(l=[l]);return e=>n.createElement(r,null,a=>{const o=a.createT?a.createT(l):s,r=a;return n.createElement(t,Object.assign({},e,{t:o,T:r}))})},T:s}}),t.default=t.createTranslations}},[[412,2,4]]]);
//# sourceMappingURL=iframe.081f5b0961439cc12d4a.bundle.js.map