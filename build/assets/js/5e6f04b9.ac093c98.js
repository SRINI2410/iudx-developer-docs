"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[1420],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67358:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={sidebar_position:13},p=void 0,s={unversionedId:"Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server",id:"Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server",isDocsHomePage:!1,title:"Catalogue-Server",description:"Architecture",source:"@site/docs/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server.md",sourceDirName:"Deployment/Kubernetes-Based Deployment/IUDX Component Installation",slug:"/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Catalogue-Server.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"ACL-APD",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/ACL-APD"},next:{title:"Resource-Server",permalink:"/docs/next/Deployment/Kubernetes-Based Deployment/IUDX Component Installation/Resource-Server"}},m=[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"Notes",id:"notes",children:[],level:3}],c={toc:m};function u(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"img_background"},(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:a(93930).Z}),(0,o.kt)("br",null)))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The catalogue is IUDXs data discovery and dataset metadata publishing portal. It allows data providers to publish their data resources by making an IUDX vocabulary annotated meta-data document describing their datasource and affiliated terminologies. The datasources publish their data to the IUDX Resource Server. It allows consumers of such data to easily discover such resources by means of powerful queries and consume the data from Resource Servers in an automated and machine interpretable way.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Will be deploying using swarm stack YAML files."))),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"Create a static COS cat index in Elasticsearch through Kibana."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a static cat index with the name as  ",(0,o.kt)("inlineCode",{parentName:"p"},"< cos-prefix >__cat")," in Kibana by going to UI -> Dev tools using the following github\n",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/karthickp432001/iudx-developer-docs/blob/main/mapping/1.json"},"link")),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a static cat index with name as  ",(0,o.kt)("inlineCode",{parentName:"p"},"< cos-prefix >__cat_domains")," in  kibana  by going to  UI -> Dev tools using following github ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/karthickp432001/iudx-developer-docs/blob/main/mapping/2.json"},"link")),":")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a static cat index with name as  ",(0,o.kt)("inlineCode",{parentName:"p"},"< cos-prefix >__cat_instances")," in  kibana  by going to  UI -> Dev tools using following github ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/karthickp432001/iudx-developer-docs/blob/main/mapping/3.json"},"link")),":")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a  dynamic index \u201ccat-rating\u201d in elasticsearch through kibana "),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create Index Lifecycle policy (ILM) with name ",(0,o.kt)("inlineCode",{parentName:"p"},"ilm-cat-rating"),", by going to kibana  UI -> index stack management ."),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"enable rollover"),(0,o.kt)("li",{parentName:"ol"},"maximum index size 10 gigabytes"),(0,o.kt)("li",{parentName:"ol"},"maximum age 1000 days"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create Index template - with settings, ilm, mapping, with index-alias as \u201ccat_rating" in kibana  UI -> Dev tools using following github ',(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/karthickp432001/iudx-developer-docs/blob/main/mapping/4.json"},"link")),":")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a bootstrap index named ",(0,o.kt)("inlineCode",{parentName:"p"},"cat_rating-000001")," in Kibana UI -> Dev Tools using following github ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/karthickp432001/iudx-developer-docs/blob/main/mapping/5.json"},"link")),":")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The rs schema created using flyway using following steps:"),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"kubectl port-forward -n postgres svc/psql-postgresql-ha-pgpool 5432\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Port forward the pgpool (postgres proxy) on one terminalIn another terminal, "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"git clone -b 5.0.0 https://github.com/datakaveri/iudx-resource-server.git && cd iudx-resource-server/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The flyway.conf must be updated with the required data. which will be as follows"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"flyway.url=jdbc:postgresql://127.0.0.1:5432/iudx_rs\nflyway.user=postgres\nflyway.password=<value in secrets/passwords/postgresql-password>  \nflyway.schemas=public\nflyway.placeholders.authUser=iudx_rs_user\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"After this, the info command can be run to test the config."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mvn flyway:info -Dflyway.configFiles=flyway.conf\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Then, the migrate command can be run to set up the database."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"mvn flyway:migrate -Dflyway.configFiles=flyway.conf\n")))))),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the below directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"iudx-deployment/Docker-Swarm-deployment/single-node/catalogue/\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Assign the node label if not assigned during swarm installation using:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"docker node update --label-add cat-node=true <node_name>\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make a copy of the sample secrets directory by running the following command: \u2018cp -r example-secrets/secrets .\u2019"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp -r example-secrets/secrets .\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Provide a correct config file for bringing up catalogue-server. Substitute appropriate values using commands whatever mentioned in config files.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure the .cat.env file, refer to example-env")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Define appropriate values of resources in ",(0,o.kt)("inlineCode",{parentName:"p"},"cat-stack.resources.yml")," as shown in the sample file ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/blob/5.0.0/Docker-Swarm-deployment/single-node/catalogue/example-cat-stack.resources.yaml"},"example-cat-stack.resources.yml")),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CPU requests and limits"),(0,o.kt)("li",{parentName:"ul"},"RAM requests and limits"),(0,o.kt)("li",{parentName:"ul"},"PID limit")))),(0,o.kt)("ol",{start:7},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To install catalogue server stack, use the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"cp example-cat-stack.resources.yaml cat-stack.resources.yaml\ndocker stack deploy -c cat-stack.yaml -c cat-stack.resources.yaml cat\n")))),(0,o.kt)("h3",{id:"notes"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"cat-server api documentation can be accessed from ",(0,o.kt)("strong",{parentName:"li"},"https://< cop-domain >/cat/apis"),"."),(0,o.kt)("li",{parentName:"ol"},"To check if the cat-server are deployed and running: ",(0,o.kt)("inlineCode",{parentName:"li"},"docker stack ps cat")),(0,o.kt)("li",{parentName:"ol"},"For more information on installation instructions, refer ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/5.0.0/Docker-Swarm-deployment/single-node/catalogue"},"here")),"."),(0,o.kt)("li",{parentName:"ol"},"For more information about the catalogue-server, refer ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/5.0.0/Docker-Swarm-deployment/single-node/catalogue"},"here"),"."))))}u.isMDXComponent=!0},93930:function(e,t,a){t.Z=a.p+"assets/images/cat_overview-a41888862bbb5b24212ff84f042a74c9.png"}}]);