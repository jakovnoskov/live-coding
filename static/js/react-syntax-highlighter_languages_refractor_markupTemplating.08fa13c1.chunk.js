"use strict";(self.webpackChunklive_coding=self.webpackChunklive_coding||[]).push([[3047],{595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var i=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,c=i.length;-1!==t.code.indexOf(o=n(a,c));)++c;return i[c]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function i(c){for(var u=0;u<c.length&&!(o>=r.length);u++){var l=c[u];if("string"===typeof l||l.content&&"string"===typeof l.content){var s=r[o],g=t.tokenStack[s],p="string"===typeof l?l:l.content,f=n(a,s),k=p.indexOf(f);if(k>-1){++o;var d=p.substring(0,k),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=p.substring(k+f.length),v=[];d&&v.push.apply(v,i([d])),v.push(h),m&&v.push.apply(v,i([m])),"string"===typeof l?c.splice.apply(c,[u,1].concat(v)):l.content=v}}else l.content&&i(l.content)}return c}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.08fa13c1.chunk.js.map