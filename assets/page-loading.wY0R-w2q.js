import{x as a,s as e,_ as t,r as s,o,c as n,w as d,d as i,g as c,t as l,h as r,j as p,i as u}from"./index-CXYRgNF1.js";const m=(t={})=>new Promise(((s,o)=>{a({url:"https://api.example.com"+t.url,method:t.method||"GET",data:t.data||{},header:{"content-type":"application/json",...t.header},success:a=>{200===a.statusCode?0===a.data.code?s(a.data.data):(e({title:a.data.message||"请求失败",icon:"none"}),o(a.data)):(e({title:"网络错误",icon:"none"}),o(a))},fail:a=>{e({title:"请求失败",icon:"none"}),o(a)}})}));const f=t({name:"PageLoading",props:{show:{type:Boolean,default:!0},text:{type:String,default:"加载中..."}}},[["render",function(a,e,t,m,f,g){const h=s("u-loading"),x=p,_=u;return t.show?(o(),n(_,{key:0,class:"page-loading"},{default:d((()=>[i(h,{mode:"circle",size:"40",color:"#fa3534"}),i(x,{class:"loading-text"},{default:d((()=>[c(l(t.text),1)])),_:1})])),_:1})):r("",!0)}],["__scopeId","data-v-5a4f9c03"]]);export{f as P,m as r};
