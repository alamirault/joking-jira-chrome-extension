(()=>{"use strict";var e,t,n,r={535:(e,t,n)=>{var r=n(540),o=n(338),a=n(840);const l={disableEmojiAutocomplete:!1,sprintGoalAsTitle:!1,forceDisplayCopyLink:!1};(0,o.H)(document.getElementById("root")).render(r.createElement(r.StrictMode,null,r.createElement((()=>{const[e,t]=(0,r.useState)(l);(0,r.useEffect)((()=>{var e,n,r,o;(e=void 0,n=void 0,r=void 0,o=function*(){const e=yield chrome.storage.sync.get(l);return Object.assign(Object.assign({},l),e)},new(r||(r=Promise))((function(t,a){function l(e){try{i(o.next(e))}catch(e){a(e)}}function c(e){try{i(o.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(e){e(n)}))).then(l,c)}i((o=o.apply(e,n||[])).next())}))).then((e=>t(e)))}),[]);const n=(n,r)=>{const o=Object.assign(Object.assign({},e),{[n]:r});chrome.storage.sync.set(o).then((()=>{t(o)}))},o="On",c="Off";return r.createElement("div",{id:"configuration-pop-up"},r.createElement("div",{className:"container"},r.createElement("h1",{className:"text-center mt-0"},r.createElement("span",{className:"d-block"},"Joking Jira"),r.createElement("img",{src:"./icon-128.png",alt:"Joking Jira",title:"Joking Jira"})),r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("label",{htmlFor:"disableEmojiAutocomplete",className:"d-block me-1"},r.createElement("h5",null,"Prevent emojis autocomplete"),r.createElement("p",{className:"my-0"},"Automatically add a space after any colon typed in order to prevent emojis autocomplete to disturb typing")),r.createElement(a.A,{id:"disableEmojiAutocomplete",checkedChildren:o,unCheckedChildren:c,checked:e.disableEmojiAutocomplete,onChange:e=>n("disableEmojiAutocomplete",e)})),r.createElement("hr",null),r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("label",{htmlFor:"sprintGoalAsTitle",className:"d-block me-1"},r.createElement("h5",null,"Sprint goal as title"),r.createElement("p",{className:"my-0"},"Add a title attribute to sprint goal so it can be displayed properly on hover")),r.createElement(a.A,{id:"sprintGoalAsTitle",checkedChildren:o,unCheckedChildren:c,checked:e.sprintGoalAsTitle,onChange:e=>n("sprintGoalAsTitle",e)})),r.createElement("hr",null),r.createElement("div",{className:"d-flex justify-content-between"},r.createElement("label",{htmlFor:"forceDisplayCopyLink",className:"d-block me-1"},r.createElement("h5",null,"Force display copy issue link"),r.createElement("p",{className:"my-0"},"Add custom CSS to make copy issue link button always visible in issue breadcrumbs")),r.createElement(a.A,{id:"forceDisplayCopyLink",checkedChildren:o,unCheckedChildren:c,checked:e.forceDisplayCopyLink,onChange:e=>n("forceDisplayCopyLink",e)})),r.createElement("p",{className:"text-center text-secondary mb-0 mt-2"},"Made from frustration")))}),null)))}},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,e=[],a.O=(t,n,r,o)=>{if(!n){var l=1/0;for(m=0;m<e.length;m++){for(var[n,r,o]=e[m],c=!0,i=0;i<n.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(m--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[n,r,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);a.r(o);var l={};t=t||[null,n({}),n([]),n(n)];for(var c=2&r&&e;"object"==typeof c&&!~t.indexOf(c);c=n(c))Object.getOwnPropertyNames(c).forEach((t=>l[t]=()=>e[t]));return l.default=()=>e,a.d(o,l),o},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={597:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[l,c,i]=n,s=0;if(l.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(i)var m=i(a)}for(t&&t(n);s<l.length;s++)o=l[s],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(m)},n=self.webpackChunkjoking_jira_chrome_extension=self.webpackChunkjoking_jira_chrome_extension||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=a.O(void 0,[121],(()=>a(535)));l=a.O(l)})();