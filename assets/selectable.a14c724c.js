import{j as h,z as _,k as u,A as f,e as w,l as k,H as v,q as L,B as g,I as y,F as m,G as C,b as N}from"./framework.133f9ea6.js";const S=h({setup(p){const t=n=>{console.log(n)},a=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],r={children:"children",label:"label"};return(n,l)=>{const e=_("el-tree");return u(),f(e,{data:a,props:r,accordion:"",onNodeClick:t})}}});var Y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:S});const $=h({setup(p){const t=n=>{console.log(n)},a=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}],r={children:"children",label:"label"};return(n,l)=>{const e=_("el-tree");return u(),f(e,{data:a,props:r,onNodeClick:t})}}});var Z=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$});const z={class:"buttons"},D=m("get by node"),O=m("get by key"),T=m("set by node"),j=m("set by key"),M=m("reset"),P=h({setup(p){const t=w(),a=()=>{console.log(t.value.getCheckedNodes(!1,!1))},r=()=>{console.log(t.value.getCheckedKeys(!1))},n=()=>{t.value.setCheckedNodes([{id:5,label:"Level two 2-1"},{id:9,label:"Level three 1-1-1"}],!1)},l=()=>{t.value.setCheckedKeys([3],!1)},e=()=>{t.value.setCheckedKeys([],!1)},o={children:"children",label:"label"},c=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(b,s)=>{const d=_("el-tree"),i=_("el-button");return u(),k(y,null,[v(d,{ref_key:"treeRef",ref:t,data:c,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:o},null,512),L("div",z,[v(i,{onClick:a},{default:g(()=>[D]),_:1}),v(i,{onClick:r},{default:g(()=>[O]),_:1}),v(i,{onClick:n},{default:g(()=>[T]),_:1}),v(i,{onClick:l},{default:g(()=>[j]),_:1}),v(i,{onClick:e},{default:g(()=>[M]),_:1})])],64)}}});var ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const R=h({setup(p){const t={label:"name",children:"zones",isLeaf:"leaf"},a=(r,n)=>{if(r.level===0)return n([{name:"region"}]);if(r.level>1)return n([]);setTimeout(()=>{n([{name:"leaf",leaf:!0},{name:"zone"}])},500)};return(r,n)=>{const l=_("el-tree");return u(),f(l,{props:t,load:a,lazy:"","show-checkbox":""})}}});var le=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const V={class:"custom-tree-node-container"},B=h({setup(p){const t=(r,n)=>r.isPenultimate?"is-penultimate":null,a=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",isPenultimate:!0,children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",isPenultimate:!0,children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",isPenultimate:!0,children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(r,n)=>{const l=_("el-tree");return u(),k("div",V,[v(l,{data:a,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,props:{class:t}},null,8,["props"])])}}});var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:B});const E={class:"custom-tree-container"},K=L("p",null,"Using render-content",-1),A=L("p",null,"Using scoped slot",-1),F={class:"custom-tree-node"},U=["onClick"],I=["onClick"],q=h({setup(p){let t=1e3;const a=e=>{const o={id:t++,label:"testtest",children:[]};e.children||(e.children=[]),e.children.push(o),l.value=[...l.value]},r=(e,o)=>{const c=e.parent,b=c.data.children||c.data,s=b.findIndex(d=>d.id===o.id);b.splice(s,1),l.value=[...l.value]},n=(e,{node:o,data:c,store:b})=>e("span",{class:"custom-tree-node"},e("span",null,o.label),e("span",null,e("a",{onClick:()=>a(c)},"Append "),e("a",{onClick:()=>r(o,c)},"Delete"))),l=w([{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}]);return(e,o)=>{const c=_("el-tree");return u(),k("div",E,[K,v(c,{data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":n},null,8,["data"]),A,v(c,{data:l.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},{default:g(({node:b,data:s})=>[L("span",F,[L("span",null,C(b.label),1),L("span",null,[L("a",{onClick:d=>a(s)}," Append ",8,U),L("a",{onClick:d=>r(b,s)}," Delete ",8,I)])])]),_:1},8,["data"])])}}});var oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:q});const G=h({setup(p){const t={children:"children",label:"label"},a=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(r,n)=>{const l=_("el-tree");return u(),f(l,{data:a,"show-checkbox":"","node-key":"id","default-expanded-keys":[2,3],"default-checked-keys":[5],props:t})}}});var ne=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:G});const H=h({setup(p){const t={children:"children",label:"label",disabled:"disabled"},a=[{id:1,label:"Level one 1",children:[{id:3,label:"Level two 2-1",children:[{id:4,label:"Level three 3-1-1"},{id:5,label:"Level three 3-1-2",disabled:!0}]},{id:2,label:"Level two 2-2",disabled:!0,children:[{id:6,label:"Level three 3-2-1"},{id:7,label:"Level three 3-2-2",disabled:!0}]}]}];return(r,n)=>{const l=_("el-tree");return u(),f(l,{data:a,props:t,"show-checkbox":""})}}});var ae=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H});const J=h({setup(p){const t=(s,d)=>{console.log("drag start",s)},a=(s,d,i)=>{console.log("tree drag enter: ",d.label)},r=(s,d,i)=>{console.log("tree drag leave: ",d.label)},n=(s,d,i)=>{console.log("tree drag over: ",d.label)},l=(s,d,i,x)=>{console.log("tree drag end: ",d&&d.label,i)},e=(s,d,i,x)=>{console.log("tree drop: ",d.label,i)},o=(s,d,i)=>d.data.label==="Level two 3-1"?i!=="inner":!0,c=s=>s.data.label.indexOf("Level three 3-1-1")===-1,b=[{label:"Level one 1",children:[{label:"Level two 1-1",children:[{label:"Level three 1-1-1"}]}]},{label:"Level one 2",children:[{label:"Level two 2-1",children:[{label:"Level three 2-1-1"}]},{label:"Level two 2-2",children:[{label:"Level three 2-2-1"}]}]},{label:"Level one 3",children:[{label:"Level two 3-1",children:[{label:"Level three 3-1-1"}]},{label:"Level two 3-2",children:[{label:"Level three 3-2-1"}]}]}];return(s,d)=>{const i=_("el-tree");return u(),f(i,{"allow-drop":o,"allow-drag":c,data:b,draggable:"","default-expand-all":"","node-key":"id",onNodeDragStart:t,onNodeDragEnter:a,onNodeDragLeave:r,onNodeDragOver:n,onNodeDragEnd:l,onNodeDrop:e})}}});var re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});const Q=h({setup(p){const t=w(""),a=w(),r={children:"children",label:"label"};N(t,e=>{a.value.filter(e)});const n=(e,o)=>e?o.label.indexOf(e)!==-1:!0,l=[{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}];return(e,o)=>{const c=_("el-input"),b=_("el-tree");return u(),k(y,null,[v(c,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=s=>t.value=s),placeholder:"Filter keyword"},null,8,["modelValue"]),v(b,{ref_key:"treeRef",ref:a,class:"filter-tree",data:l,props:r,"default-expand-all":"","filter-node-method":n},null,512)],64)}}});var de=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Q});const W=h({setup(p){let t=1;const a={label:"name",children:"zones"},r=(l,e,o)=>{console.log(l,e,o)},n=(l,e)=>{if(l.level===0)return e([{name:"Root1"},{name:"Root2"}]);if(l.level>3)return e([]);let o=!1;l.data.name==="region1"?o=!0:l.data.name==="region2"?o=!1:o=Math.random()>.5,setTimeout(()=>{let c=[];o?c=[{name:`zone${t++}`},{name:`zone${t++}`}]:c=[],e(c)},500)};return(l,e)=>{const o=_("el-tree");return u(),f(o,{props:a,load:n,lazy:"","show-checkbox":"",onCheckChange:r})}}});var ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});export{Y as _,Z as a,ee as b,le as c,te as d,oe as e,ne as f,ae as g,re as h,de as i,ce as j};
