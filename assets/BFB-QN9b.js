import{u as B,n as G,r as i,c as j,q as u,s as I,v as k,a as e,d as U,b as t,x as m,w,o as v,t as y,p as K}from"./ezZ-ngu0.js";import{d as J,e as q}from"./k75cBZoV.js";import{s as z,a as A,b as F}from"./a886gZvm.js";import{s as L,a as Y}from"./1vyKhhRk.js";const Z={class:"h-screen px-12 lg:px-32 py-32"},E={class:"w-full h-full flex flex-col md:justify-center"},H={class:"p-2 z-10"},R={key:0,class:"mt-3"},W={class:"flex justify-end gap-2"},P={class:"flex justify-end gap-2"},Q={class:"flex flex-col items-center p-8 bg-surface-0 dark:bg-surface-900 rounded"},X={class:"font-bold text-2xl block mb-2 mt-6"},aa={class:"mb-0"},ea={class:"flex items-center gap-2 mt-6"},oa={__name:"af6d22d8",setup(la){const C=B(),S=G();let d=5,p=new Date;{const n="data",a="af6d22d8";let l=JSON.parse(J(localStorage.getItem(n)||q("{}")));l[a]||(l[a]={sisaMenjawab:5,tanggalJawab:new Date},localStorage.setItem(n,q(JSON.stringify(l)))),d=l[a].sisaMenjawab,p=new Date(l[a].tanggalJawab),new Date().getDate()-p.getDate()>1&&(d=5,p=new Date,l[a].sisaMenjawab=d,l[a].tanggalJawab=p)}const g=i(!1),c=i(!1),x=i(!1),f=i(!1),r=i(!1),h=i(!1),b=i(""),D=()=>{g.value=!0};setTimeout(()=>{c.value=!0},5e3),setTimeout(()=>{x.value=!0},12e4);const _=()=>{if(!b.value){alert("Jawaban tidak boleh kosong");return}C.require({group:"headless",header:"Apakah anda yakin ?",message:`Silahkan jawab pertanyaan dengan benar, sisa jawaban anda ${d} kali`,accept:()=>{M()},reject:()=>{}})},M=()=>{let n=b.value.toLowerCase();if(n=n.replace(/\s/g,""),d=="0"){h.value=!0;return}if(n===atob("cGVuZ2VuZGFyYW1vdG9y"))S.add({severity:"success",summary:"Selamat",detail:"Jawaban anda benar",life:3e3}),K("/8boh7hfbj");else{r.value=!0,d=Number(d)-1;{const a="data",l="af6d22d8";let o=JSON.parse(J(localStorage.getItem(a)||q("{}")));o[l].sisaMenjawab=d,localStorage.setItem(a,q(JSON.stringify(o)))}}};return(n,a)=>{const l=L,o=Y,N=A,V=F,$=z;return v(),j("section",Z,[u(c)?(v(),I(l,{key:0,label:"Jawab",onClick:a[0]||(a[0]=s=>f.value=!0)})):k("",!0),e("div",E,[a[11]||(a[11]=e("h1",{class:"uppercase text-5xl xl:text-4xl mb-4 font-semibold"}," أولاً ",-1)),e("div",H,[a[9]||(a[9]=e("p",{class:"capitalize xl:w-1/2 md:w-1/2 text-stone-500"}," Gl vhexdk shuvlpsdqjdq mdodq bdqj vlexn, wljd hqwlwdv vhgdqj vdedu phqxqjjx shujdqwldq odpsx odox olqwdv: vhexdk nhqgduddq ehudw, bdlwx wuxn, vhexdk nhqgduddq ulqjdq, bdlwx vhshgd prwru, gdq pdnkoxn klgxs ehundnl hpsdw bdqj glwxqjjdqjl, bdlwx nxgd. Sdgd vxdwx wlwln, vhfdud wlgdn glvhqjdmd, shqjhpxgl nhqgduddq ehudw phqhndq nodnvrq, phqlpexondq nhjdgxkdq bdqj fxnxs xqwxn phpexdw pdnkoxn ehundnl hpsdw whuvhexw whunhmxw gdq ehuhdnvl djuhvli ghqjdq phqjjljlw shqjhqgdud nhqgduddq ulqjdq gl vhehodkqbd. Shqjhqgdud nhqgduddq ulqjdq, bdqj whunhmxw rohk vhudqjdq phqgdgdn whuvhexw, vhfdud uhiohnv phqduln jdv nhqgduddqqbd, phplfx udqjndldq shulvwlzd bdqj ehuxmxqj sdgd nhfhodnddq. Ghqjdq nrpsohnvlwdv vlwxdvl lql, lghqwlilndvlndq vldsd bdqj phodqjjdu shudwxudq odox olqwdv. ",-1)),u(x)?(v(),j("p",R,a[8]||(a[8]=[e("a",{href:"https://www.autumnhillnursery.com/choosing-right-tree/",class:"text-blue-800"},"Clue",-1),U(", berserah diri kepada yang "),e("b",null,"di atas",-1)]))):k("",!0)]),e("div",{class:"absolute bottom-0 right-0 overflow-hidden h-2/5 sm:h-1/2 md:h-3/5 lg:h-4/6",onClick:D},a[10]||(a[10]=[e("img",{src:"https://i.pinimg.com/736x/20/32/7c/20327cceca76303fb06aac39499f2113.jpg",alt:"img",class:"hidden md:block h-full"},null,-1)]))]),t(o,{visible:u(g),"onUpdate:visible":a[1]||(a[1]=s=>m(g)?g.value=s:null),modal:"",header:"Jangan sentuh christyku 😡",style:{width:"25rem"}},null,8,["visible"]),t(o,{visible:u(r),"onUpdate:visible":a[3]||(a[3]=s=>m(r)?r.value=s:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:w(()=>[a[12]||(a[12]=e("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, jawaban anda salah. Silahkan coba lagi ",-1)),e("div",W,[t(l,{label:"Ok",onClick:a[2]||(a[2]=s=>r.value=!1)})])]),_:1},8,["visible"]),t(o,{visible:u(h),"onUpdate:visible":a[5]||(a[5]=s=>m(h)?h.value=s:null),modal:"",header:"Mohon maaf",style:{width:"25rem"}},{default:w(()=>[a[13]||(a[13]=e("p",{class:"text-surface-500 dark:text-surface-400 block mb-8"}," Maaf, anda sudah tidak bisa menjawab lagi. Silahkan coba lagi besok ",-1)),e("div",P,[t(l,{label:"Ok",onClick:a[4]||(a[4]=s=>h.value=!1)})])]),_:1},8,["visible"]),t(o,{visible:u(f),"onUpdate:visible":a[7]||(a[7]=s=>m(f)?f.value=s:null),modal:"",header:"Jawab",style:{width:"25rem"}},{default:w(()=>[t(V,{class:"mt-5"},{default:w(()=>[t(N,{id:"username",modelValue:u(b),"onUpdate:modelValue":a[6]||(a[6]=s=>m(b)?b.value=s:null)},null,8,["modelValue"]),a[14]||(a[14]=e("label",{for:"username"},"Jawabnnya",-1)),t(l,{label:"Jawab",onClick:_})]),_:1})]),_:1},8,["visible"]),t($,{group:"headless"},{container:w(({message:s,acceptCallback:T,rejectCallback:O})=>[e("div",Q,[a[15]||(a[15]=e("div",{class:"rounded-full bg-black text-primary-contrast inline-flex justify-center items-center h-24 w-24 -mt-20"},[e("i",{class:"pi pi-question text-5xl"})],-1)),e("span",X,y(s.header),1),e("p",aa,y(s.message),1),e("div",ea,[t(l,{label:"Tidak yakin",onClick:O,outlined:"",class:"w-32"},null,8,["onClick"]),t(l,{label:"Yakin",onClick:T,class:"w-32"},null,8,["onClick"])])])]),_:1})])}}};export{oa as default};
