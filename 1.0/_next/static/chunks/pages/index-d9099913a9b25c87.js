(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4482)}])},4482:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return h}});var n=t(5893),a=t(7294),r=t(9008),c=t.n(r),i=t(1163),o=function(e){let{Component:s,pageProps:t,workspace:a}=e,r=(0,i.useRouter)(),c=e=>{r.push({pathname:"/new/[workspace]",query:{workspace:btoa(e.name)}})};return(0,n.jsx)("div",{onClick:()=>c(a),className:"w-[245px] h-[88px] transition-all relative cursor-pointer group flex p-2 items-center justify-center bg-slate-100/90 shadow rounded hover:shadow-xl hover:bg-gradient-to-r hover:from-slate-900 hover:to-cyan-800 hover:text-white",children:(0,n.jsx)("div",{className:"w-full h-full",children:(0,n.jsxs)("div",{className:"show-grid flex h-full items-center",children:[(0,n.jsx)("div",{className:"kasmcard-img flex h-full mx-4 items-center justify-center",children:(0,n.jsx)("img",{className:"w-[50px] max-h-[66px]",src:"icons/"+a.image_src})}),(0,n.jsxs)("div",{className:"kasmcard-detail settingPad",children:[(0,n.jsx)("h5",{className:"text-base",children:a.friendly_name}),(0,n.jsx)("p",{className:"text-xs opacity-50",children:a.categories&&a.categories[0]||"Unknown"})]})]})})})},l=t(7160),d=t.n(l);function h(e){let{searchText:s}=e,[t,r]=(0,a.useState)(null);(0,a.useEffect)(()=>{fetch("list.json").then(e=>e.json()).then(e=>{r(e)})},[]);let i=t&&t.workspaces&&t.workspaces.length>0?[...t.workspaces]:[],l=s&&s.toLowerCase();return s&&""!==s&&(i=i.filter(e=>{let s=e.categories&&e.categories.length>0?e.categories.filter(e=>e.toLowerCase().includes(l)):[];return e.name.toLowerCase().includes(l)||s.length>0})),(0,n.jsxs)("div",{className:"",children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:"Kasm Workspaces"}),(0,n.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:"p-8 py-10 xl:px-20",children:[(0,n.jsx)("h1",{className:"flex uppercase tracking-widest justify-center mb-10",children:(0,n.jsxs)("span",{className:"flex items-center text-lg bg-slate-100/90 rounded overflow-hidden shadow",children:[(0,n.jsx)("span",{className:"flex px-3 text-xs opacity-100",children:"Workspaces"})," ",(0,n.jsx)("span",{className:"text-white p-3 py-1 flex bg-[#374a70]",children:t&&t.workspacecount})]})}),(0,n.jsxs)("div",{className:"flex flex-wrap gap-1 justify-center",children:[i&&i.length>0&&i.map(function(e,s){return(0,n.jsx)(o,{workspace:e},e.sha)}),i&&0===i.length&&(0,n.jsxs)("p",{children:["No workspaces found ",""!==s&&'matching "'+s+'"']})]}),(0,n.jsx)("div",{className:d().grid})]})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,s,t){e.exports=t(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);