import{_ as p,o as i,c as o,a as t,r as g,d as h,b as c,w as d,e as n,t as s,f as m,F as v,g as y,h as b}from"./ch-QUOu-.js";const w={},f={class:"title text"};function k(a,r){return i(),o("div",null,[t("span",f,[g(a.$slots,"default",{},void 0,!0)])])}const S=p(w,[["render",k],["__scopeId","data-v-e457bce9"]]),I={class:"cv-block"},D={key:0,class:"cv-block-description text"},x={class:"years"},W={key:0},C={class:"job"},B=h({__name:"CvBlock",props:{title:String,description:String,items:Array},setup(a){return(r,l)=>{const _=S,u=b;return i(),o("div",I,[c(_,{class:"cv-block-title"},{default:d(()=>[n(s(a.title),1)]),_:1}),r.$slots.default?(i(),o("p",D,[g(r.$slots,"default",{},void 0,!0)])):m("",!0),(i(!0),o(v,null,y(a.items,e=>(i(),o("div",{key:e.id,class:"cv-block-item text"},[t("div",x,[n(s(e.years),1),l[0]||(l[0]=t("br",null,null,-1)),e.yearSum?(i(),o("span",W,"( "+s(e.yearSum)+" )",1)):m("",!0)]),t("div",C,[c(u,{to:e.institutionWeb,class:"job-title"},{default:d(()=>[n(s(e.position)+" at "+s(e.institution),1)]),_:2},1032,["to"]),t("p",null,s(e.description),1)])]))),128))])}}}),E=p(B,[["__scopeId","data-v-95cc55fb"]]),A={class:"cv-container"},N=h({__name:"index",setup(a){const r=[{years:"2022 — now",yearSum:"2 years",position:"Back End Developer",institution:"Devo",institutionWeb:"https://www.devo.com/",description:"Currently working in Devo using Kotlin"},{years:"2019 — 2022",yearSum:"3 years",position:"Full Stack Developer & Squad Lead",institution:"Taiger",institutionWeb:"https://www.taiger.com/",description:`Worked in TAIGER’s main poduct, IDP.
• Angular, Jasmine, GraphQL
• Python, MySQL, Docker, Kubernetes, RabbitMQ, Microservices`},{years:"03 — 08/2019",yearSum:"6 months",position:"Artificial Intelligence Researcher",institution:"LINKS",institutionWeb:"https://linksfoundation.com/en/",description:"Research Institute. Worked on research projects on Computer Vision and Natural Language Processing, using Deep Learning techniques."},{years:"2016 — 2018",yearSum:"2 years",position:"Full Stack Developer",institution:"United Academics",institutionWeb:"https://www.ua-foundation.org/",description:"Development using React, Django and MongoDB."},{years:"01 — 08/2016",yearSum:"8 months",position:"Front End Developer Intern",institution:"Sugerendo",institutionWeb:"https://www.sugerendo.com/",description:"E-commerce consultancy specialized in Magento."}],l=[{years:"2016 — 2019",position:"M.Sc. Artificial Intelligence",institution:"University of Amsterdam",institutionWeb:"https://www.uva.nl/shared-content/programmas/en/masters/artificial-intelligence/artificial-intelligence.html",description:"Thesis: Bayesian 3D Convolutional Neural Networks with Variational Inference"},{years:"2012 — 2016",position:"BSc. Computer Science and Engineering",institution:"Universidad Carlos III de Madrid",institutionWeb:"https://www.uc3m.es/ss/Satellite/Grado/en/Detalle/Estudio_C/1371212562160/1371212987094/Bachelor_s_Degree_in_Computer_Science_and_Engineering",description:`Specialization in Computation and Artificial Intelligence.
Erasmus in Vienna (TU Wien) and Warsaw (Politechnika Waszawska).
Thesis: E-commerce website embedded to a Data Visualization app - Tableau.`}];return(_,u)=>{const e=E;return i(),o("div",A,[c(e,{title:"about me"},{default:d(()=>u[0]||(u[0]=[n(" I’m a Developer with a Master’s in Artificial Intelligence. With around 8 years of experience in both frontend and backend, I love developing apps and learning new technologies."),t("br",null,null,-1),t("br",null,null,-1),n(" What I value in a job opportunity is "),t("b",null,"how interesting the project/s is",-1),n(" (technologically and/or socially), a "),t("b",null,"good working environment",-1),n(" (knowledge sharing, teamwork) and a "),t("b",null,"modern company culture",-1),n(" (remote work, flexible hours...). ")])),_:1}),c(e,{title:"experience",items:r}),c(e,{title:"education",items:l})])}}}),L=p(N,[["__scopeId","data-v-8d471e94"]]);export{L as default};
