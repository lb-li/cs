import{_ as e,m as s,r as t,c as a,w as o,i as r,o as l,d as i,g as c,e as h,f as d,F as u,h as n,l as y,j as p}from"./index-CXYRgNF1.js";import{P as g,r as m}from"./page-loading.wY0R-w2q.js";import{P as f}from"./product-card.BnZqshTk.js";const w=e({components:{ProductCard:f,PageLoading:g},data:()=>({keyword:"",categoryId:null,categoryName:"",searchHistory:["连衣裙","智能手表","蓝牙耳机"],hotKeywords:["连衣裙","手机","电脑","零食","男装","女鞋","化妆品","家电"],searchResult:[],currentSort:"default",priceAsc:!0,page:1,loadStatus:"loadmore",isLoading:!1}),onLoad(e){e.categoryId&&(this.categoryId=e.categoryId,this.categoryName=decodeURIComponent(e.categoryName||""),this.searchByCategory())},onReachBottom(){this.loadMore()},methods:{search(){this.keyword.trim()?(this.searchHistory.includes(this.keyword)||(this.searchHistory.unshift(this.keyword),this.searchHistory.length>10&&this.searchHistory.pop()),this.searchProducts()):this.$refs.uToast.show({title:"请输入搜索关键词",type:"warning"})},searchByCategory(){this.isLoading=!0,setTimeout((()=>{m({url:"/products"}).then((e=>{this.searchResult=e,this.loadStatus=this.searchResult.length<6?"nomore":"loadmore",this.isLoading=!1}))}),1e3)},searchProducts(){this.isLoading=!0,this.page=1,setTimeout((()=>{m({url:"/products"}).then((e=>{this.searchResult=e.filter((e=>e.title.includes(this.keyword))),this.loadStatus=this.searchResult.length<6?"nomore":"loadmore",this.isLoading=!1}))}),1e3)},loadMore(){"loadmore"===this.loadStatus&&(this.loadStatus="loading",setTimeout((()=>{if(this.page<3){const e=this.searchResult.slice(0,2).map((e=>({...e,id:e.id+this.searchResult.length})));this.searchResult=[...this.searchResult,...e],this.page++,this.loadStatus="loadmore"}else this.loadStatus="nomore"}),1e3))},useHistoryKeyword(e){this.keyword=e,this.search()},removeHistory(e){this.searchHistory.splice(e,1)},clearHistory(){s({title:"提示",content:"确定要清空搜索历史吗？",success:e=>{e.confirm&&(this.searchHistory=[])}})},changeSort(e){"price"===e?("price"===this.currentSort?this.priceAsc=!this.priceAsc:(this.currentSort="price",this.priceAsc=!0),this.searchResult.sort(((e,s)=>this.priceAsc?e.price-s.price:s.price-e.price))):(this.currentSort=e,"sales"===e?this.searchResult.sort(((e,s)=>s.sales-e.sales)):this.searchResult.sort(((e,s)=>e.id-s.id)))},handleAddToCart(e){console.log("添加到购物车",e)}}},[["render",function(e,s,g,m,f,w){const k=t("u-search"),_=r,C=p,S=t("u-icon"),R=t("u-tag"),H=t("product-card"),x=t("u-loadmore"),A=t("u-empty"),T=t("page-loading"),L=t("u-toast");return l(),a(_,{class:"container"},{default:o((()=>[i(_,{class:"search-header"},{default:o((()=>[i(k,{placeholder:"搜索商品",modelValue:f.keyword,"onUpdate:modelValue":s[0]||(s[0]=e=>f.keyword=e),"show-action":!0,actionText:"搜索",onSearch:w.search,onCustom:w.search},null,8,["modelValue","onSearch","onCustom"])])),_:1}),f.keyword||f.searchResult.length?n("",!0):(l(),a(_,{key:0,class:"search-history"},{default:o((()=>[i(_,{class:"history-header"},{default:o((()=>[i(C,null,{default:o((()=>[c("搜索历史")])),_:1}),i(S,{name:"trash",size:"40rpx",onClick:w.clearHistory},null,8,["onClick"])])),_:1}),i(_,{class:"history-tags"},{default:o((()=>[(l(!0),h(u,null,d(f.searchHistory,((e,s)=>(l(),a(R,{key:s,text:e,plain:"",type:"info",mode:"light",onClick:s=>w.useHistoryKeyword(e),closable:"",onClose:e=>w.removeHistory(s)},null,8,["text","onClick","onClose"])))),128))])),_:1})])),_:1})),f.keyword||f.searchResult.length?n("",!0):(l(),a(_,{key:1,class:"hot-search"},{default:o((()=>[i(_,{class:"hot-header"},{default:o((()=>[i(C,null,{default:o((()=>[c("热门搜索")])),_:1})])),_:1}),i(_,{class:"hot-tags"},{default:o((()=>[(l(!0),h(u,null,d(f.hotKeywords,((e,s)=>(l(),a(R,{key:s,text:e,plain:"",type:s<3?"error":"info",mode:"light",onClick:s=>w.useHistoryKeyword(e)},null,8,["text","type","onClick"])))),128))])),_:1})])),_:1})),f.searchResult.length>0?(l(),a(_,{key:2,class:"search-result"},{default:o((()=>[i(_,{class:"filter-bar"},{default:o((()=>[i(_,{class:y(["filter-item",{active:"default"===f.currentSort}]),onClick:s[1]||(s[1]=e=>w.changeSort("default"))},{default:o((()=>[c(" 综合 ")])),_:1},8,["class"]),i(_,{class:y(["filter-item",{active:"sales"===f.currentSort}]),onClick:s[2]||(s[2]=e=>w.changeSort("sales"))},{default:o((()=>[c(" 销量 ")])),_:1},8,["class"]),i(_,{class:"filter-item",onClick:s[3]||(s[3]=e=>w.changeSort("price"))},{default:o((()=>[c(" 价格 "),i(S,{name:"price"!==f.currentSort||f.priceAsc?"arrow-up":"arrow-down",size:"24rpx"},null,8,["name"])])),_:1})])),_:1}),i(_,{class:"product-list"},{default:o((()=>[(l(!0),h(u,null,d(f.searchResult,((e,s)=>(l(),a(_,{class:"product-item",key:s},{default:o((()=>[i(H,{product:e,onAddToCart:w.handleAddToCart},null,8,["product","onAddToCart"])])),_:2},1024)))),128))])),_:1}),i(x,{status:f.loadStatus,"icon-type":"flower","loading-text":"努力加载中"},null,8,["status"])])),_:1})):n("",!0),f.keyword&&0===f.searchResult.length&&!f.isLoading?(l(),a(_,{key:3,class:"no-result"},{default:o((()=>[i(A,{mode:"search",icon:"http://cdn.uviewui.com/uview/empty/search.png"},{default:o((()=>[i(_,{slot:"message"},{default:o((()=>[c("没有找到相关商品")])),_:1})])),_:1})])),_:1})):n("",!0),i(T,{show:f.isLoading},null,8,["show"]),i(L,{ref:"uToast"},null,512)])),_:1})}],["__scopeId","data-v-283c2405"]]);export{w as default};
