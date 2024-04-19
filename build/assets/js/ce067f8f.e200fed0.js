"use strict";(self.webpackChunkiudx_website=self.webpackChunkiudx_website||[]).push([[1382],{3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=m(a),u=r,N=d["".concat(o,".").concat(u)]||d[u]||k[u]||l;return a?n.createElement(N,i(i({ref:e},s),{},{components:a})):n.createElement(N,i({ref:e},s))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},51278:function(t,e,a){a.r(e),a.d(e,{contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={sidebar_position:3},o=void 0,m={unversionedId:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ",id:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ",isDocsHomePage:!1,title:"RabbitMQ",description:"Architecture",source:"@site/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ.md",sourceDirName:"Deployment/Docker Swarm-Based Deployment/IUDX Component Installation",slug:"/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ",editUrl:"https://github.com/datakaveri/iudx-developer-docs/blob/main/docs/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/RabbitMQ.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Immudb",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/Immudb"},next:{title:"PostgreSQL",permalink:"/docs/next/Deployment/Docker Swarm-Based Deployment/IUDX Component Installation/PostgreSQL"}},s=[{value:"Prerequisite",id:"prerequisite",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"Manual Configuration from RMQ Management UI",id:"manual-configuration-from-rmq-management-ui",children:[],level:3},{value:"Tests",id:"tests",children:[],level:3}],d={toc:s};function k(t){var e=t.components,p=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Architecture",src:a(19183).Z}))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RabbitMQ is utilized as a databroker in the IUDX system."),(0,l.kt)("li",{parentName:"ul"},"It facilitates the exchange of data between consumers and publishers using the AMQP streaming protocol."),(0,l.kt)("li",{parentName:"ul"},"Will be deploying using swarm stack yaml files")),(0,l.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generate Certificates for the Databroker Domain")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generating Let's Encrypt Wildcard Certificates"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install the required Let's Encrypt on Ubuntu VM. Please refer to the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://letsencrypt.org/getting-started/"},"official instructions"))," up to step 6.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Needed 2 wildcard domains, similar to the example:"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"*.iudx.io")," (for the rest of the server)**"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"*.catalogue.iudx.io")," (for the catalogue server)**"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generate wildcard certificates through DNS verification:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"sudo certbot certonly --manual --preferred-challenges dns -d <wildcard(*)**-qualified-domain-name\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the email-address to notify expiry")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Add the TXT record needed for DNS verification of certificate in the dns provider")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After successful verification the certificate is generated and a message is given on location of the letsencrypt certificate"))))),(0,l.kt)("h3",{id:"installation"},"Installation"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to the below directory: "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd iudx-deployment/Docker-Swarm-deployment/single-node/databroker/\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Assign the node label if not assigned during swarm installation using: "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"docker node update --label-add databroker_node=true <node_name\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Make a copy of sample secrets directory by running the following command:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cp -r example-secrets/secrets .\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Generate secrets"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"./create-secrets.sh\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Copy certificate files to secrets directory as shown below:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cp /etc/letsencrypt/live/<domain-name>/chain.pem  secrets/pki/rabbitmq-ca-cert.pem\n\ncp /etc/letsencrypt/live/<domain-name>/fullchain.pem  secrets/pki/rabbitmq-server-cert.pem\n\ncp /etc/letsencrypt/live/<domain-name>/privkey.pem secrets/pki/rabbitmq-server-key.pem\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If required, edit the config - secrets/init-config.json to suit the needs for users, exchanges, queues, bindings and policies.\nFolder structure for RabbitMQ secrets is as follows")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Folder structure for RabbitMQ secrets is as follows"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"}," secrets/\n \u251c\u2500\u2500 init-config.json\n \u251c\u2500\u2500 passwords\n \u2502   \u251c\u2500\u2500 admin-password\n \u2502   \u251c\u2500\u2500 cat-password\n \u2502   \u251c\u2500\u2500 di-password\n \u2502   \u251c\u2500\u2500 fs-password\n \u2502   \u251c\u2500\u2500 gis-password\n \u2502   \u251c\u2500\u2500 lip-password\n \u2502   \u251c\u2500\u2500 logstash-password\n \u2502   \u251c\u2500\u2500 profanity-cat-password\n \u2502   \u2514\u2500\u2500 rs-password\n \u2514\u2500\u2500 pki\n     \u251c\u2500\u2500 rabbitmq-ca-cert.pem\n     \u251c\u2500\u2500 rabbitmq-server-cert.pem\n     \u2514\u2500\u2500 rabbitmq-server-key.pem\n     \u2514\u2500\u2500 rabbitmq-server-key.pem\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Define Appropriate values of resources in ",(0,l.kt)("inlineCode",{parentName:"p"},"databroker-stack.resources.yaml")," for as shown in sample resource-values file ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/blob/5.0.0/Docker-Swarm-deployment/single-node/databroker/example-databroker-stack.resources.yaml"},"example-databroker-stack.resources.yaml"))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CPU requests and limits"),(0,l.kt)("li",{parentName:"ul"},"RAM requests and limits"),(0,l.kt)("li",{parentName:"ul"},"PID limit")))),(0,l.kt)("ol",{start:9},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"We can deploy RabbitMQ using the following command "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cp example-databroker-stack.resources.yaml databroker-stack.resources.yaml \n\ndocker stack deploy -c databroker-stack.yaml -c databroker-stack.resources.yaml  databroker\n")),(0,l.kt)("p",{parentName:"li"},"Expect the following output on successful deployment"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"Creating secret databroker_backup-ssh-pubkey\nCreating secret databroker_rabbitmq-admin-passwd\nCreating secret databroker_rabbitmq-ca-cert.pem\nCreating secret databroker_rabbitmq-server-cert.pem\nCreating secret databroker_rabbitmq-server-key.pem\nCreating secret databroker_rabbitmq-definitions.json\nCreating secret databroker_backup-ssh-privkey\nCreating config databroker_rabbitmq-config\nCreating service databroker_backup\nCreating service databroker_rabbitmq\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"In order to verify the installation, use the following commands"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"docker stack ls\n\nNAME        SERVICES   ORCHESTRATOR\ndatabroker   2          Swarm\n")),(0,l.kt)("p",{parentName:"li"},"  Use this command to display information about the services in the 'databroker' stack:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"ID"),(0,l.kt)("th",{parentName:"tr",align:null},"NAME"),(0,l.kt)("th",{parentName:"tr",align:null},"IMAGE"),(0,l.kt)("th",{parentName:"tr",align:null},"NODE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESIRED STATE"),(0,l.kt)("th",{parentName:"tr",align:null},"CURRENT STATE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR"),(0,l.kt)("th",{parentName:"tr",align:null},"PORTS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"5zq8uo4bk8vi"),(0,l.kt)("td",{parentName:"tr",align:null},"databroker_rabbitmq.1"),(0,l.kt)("td",{parentName:"tr",align:null},"rabbitmq:3.8.11-management"),(0,l.kt)("td",{parentName:"tr",align:null},"single-node"),(0,l.kt)("td",{parentName:"tr",align:null},"Running"),(0,l.kt)("td",{parentName:"tr",align:null},"Running 4 minutes ago"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},":24567-5671/tcp,"),":24567-5671/tcp,",(0,l.kt)("em",{parentName:"td"},":28042-15672/tcp,"),":28042-15672/tcp,",(0,l.kt)("em",{parentName:"td"},":28041-15671/tcp,"),":28041-15671/tcp,",(0,l.kt)("em",{parentName:"td"},":24568-5672/tcp,"),":24568-5672/tcp")))),(0,l.kt)("p",{parentName:"li"}," RabbitMQ UI can be accessed from ",(0,l.kt)("strong",{parentName:"p"},"https://< rabbitmq-domain :28041/")),(0,l.kt)("div",{style:{textAlign:"center"}},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"Architecture",src:a(76219).Z})))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Bring up the account generator stack ",(0,l.kt)("strong",{parentName:"p"},"(clean deployment or whenever any change in init-config)")," for RMQ vhosts, users, exchanges, queues, policies creation"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"docker stack deploy -c rmq-init-setup.yaml  rmq-tmp\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Monitor logs to ensure creation of vhosts, users, queues"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"docker service logs rmq-tmp_rmq-init-setup -f\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Remove stack, once vhosts, users, exchanges, queues, policies are created"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"docker stack rm rmq-tmp\n")))),(0,l.kt)("h3",{id:"manual-configuration-from-rmq-management-ui"},"Manual Configuration from RMQ Management UI"),(0,l.kt)("p",null,"This is an alternative to steps 10 and 11 of the installation. Steps 10 and 11 automate the configuration through the init-setup job."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure admin user"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Log in to RMQ with default credentials: "),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Username:")," admin"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Password:")," admin"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"Admin-Users - admin - Change Password"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the definitions file and replace the file at ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets/rabbitmq-definitions.json"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Set the password you chose above in ",(0,l.kt)("inlineCode",{parentName:"p"},"secrets/rabbitmq-admin-passwd"),".")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Log in to the RMQ UI at ",(0,l.kt)("strong",{parentName:"p"},"https://< RMQ-domain-name :28041 /")," as the admin user.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure appropriate vhosts, exchanges, queues, and bindings from the UI as given in the table below."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create vHosts"),": Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Admin - Virtual Hosts")," and add a virtual host at the bottom by entering the name. Following vhosts need to be added:")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL")))),(0,l.kt)("br",null),(0,l.kt)("ol",{parentName:"li",start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create Exchanges"),": Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Exchanges")," - Add a new Exchange by entering the name, select the appropriate vHost, type, rest all defaults. Following exchanges need to be created:")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type of Exchange"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"latest-data-unique-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"processed-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"catalogue-rating"),(0,l.kt)("td",{parentName:"tr",align:null},"topic")))),(0,l.kt)("br",null),(0,l.kt)("ol",{parentName:"li",start:3},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create Queues"),": Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Queues")," - Add a queue by entering the name, select the appropriate vHost, rest all defaults. Following queues need to be created:")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Queue Name"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-invalid-sub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-processed-messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-unique-attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-invalid-sub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-unique-attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"redis-latest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"catalogue-rating")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-async-query")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"auditing-messages")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"fs-invalid-sub")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"gis-invalid-sub")))),(0,l.kt)("br",null),(0,l.kt)("ol",{parentName:"li",start:4},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create Exchange-Queue bindings"),": Go to a particular vHost - particular exchange - Bindings - enter queue name to bind to, add routing key - bind. Following exchange-queue bindings need to be created:  ")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Queue"),(0,l.kt)("th",{parentName:"tr",align:null},"Routing Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"gis-invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"fs-invalid-sub"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"latest-data-unique-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-unique-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"latest-data-unique-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-unique-attributes"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"processed-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"lip-processed-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"catalogue-rating"),(0,l.kt)("td",{parentName:"tr",align:null},"catalogue-rating"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"async-query"),(0,l.kt)("td",{parentName:"tr",align:null},"rs-async-query"),(0,l.kt)("td",{parentName:"tr",align:null},"#")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDEX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"auditing"),(0,l.kt)("td",{parentName:"tr",align:null},"auditing-messages"),(0,l.kt)("td",{parentName:"tr",align:null},"#")))),(0,l.kt)("br",null),(0,l.kt)("ol",{parentName:"li",start:5},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Create Policies"),": Go to ",(0,l.kt)("inlineCode",{parentName:"li"},"Admin - Policies")," (right-hand side)** - Add policy - Select VHOST, add Name, pattern to match queues, apply to queues, Set priority, set definition. Following policies need to be created:")),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Pattern"),(0,l.kt)("th",{parentName:"tr",align:null},"Definition"),(0,l.kt)("th",{parentName:"tr",align:null},"Priority"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"internal-lip-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"lip.*"),(0,l.kt)("td",{parentName:"tr",align:null},"max-length-bytes: 2097152"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"internal-fs-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"fs.*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"internal-gis-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"gis.*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"internal-cat-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"catalogue.*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"auditing-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"auditing-messages"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX-INTERNAL"),(0,l.kt)("td",{parentName:"tr",align:null},"internal-rs-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"rs.*"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"redis-queue"),(0,l.kt)("td",{parentName:"tr",align:null},"redis.*"),(0,l.kt)("td",{parentName:"tr",align:null},"max-length-bytes: 10485760"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"0")))))),(0,l.kt)("h3",{id:"tests"},"Tests"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Navigate to the below directory :"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"cd iudx-deployment/K8s-deployment/Charts/databroker/tests\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Test the publishing of messages to exchange and routing to queue through a Python script."),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create a Python virtual environment on the Rancher/Bootstrap machine:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"# Create venv env\npython3 -m venv /home/iudx/.venv/iudx-tests\n\n# go into venv\nsource /home/iudx/.venv/iudx-tests/bin/activate\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Install all necessary packages from the ",(0,l.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"pip install -r requirements.txt\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure test exchanges as follows:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type of Exchange"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"test-itms"),(0,l.kt)("td",{parentName:"tr",align:null},"topic")))),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the exchange-queue binding as follows:"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"VHost"),(0,l.kt)("th",{parentName:"tr",align:null},"Exchange"),(0,l.kt)("th",{parentName:"tr",align:null},"Queue"),(0,l.kt)("th",{parentName:"tr",align:null},"Routing Key"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"test-itms"),(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"IUDX"),(0,l.kt)("td",{parentName:"tr",align:null},"test-itms"),(0,l.kt)("td",{parentName:"tr",align:null},"redis-latest"),(0,l.kt)("td",{parentName:"tr",align:null},"key")))),(0,l.kt)("br",null)),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the following parameters in the Python script ",(0,l.kt)("strong",{parentName:"p"},"(you can use admin user and password)"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},'username = ""\npassword = ""\nhost = ""\n# Public AMQPS port\nport = 24567\n'))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the Python script:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"python3 rabbitmq.py\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Test if the messages have reached the database and redis-latest queue. Log in to the RMQ management interface at ",(0,l.kt)("strong",{parentName:"p"},"https://< rmq-domain-name :28041/ - goto - queues"),"\n."))),(0,l.kt)("p",{parentName:"li"},"Refer ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://github.com/datakaveri/iudx-deployment/tree/5.0.0/K8s-deployment/Charts/databroker/tests"},"here"))," for more detailed information."))))}k.isMDXComponent=!0},19183:function(t,e,a){e.Z=a.p+"assets/images/rabbitMQ-arch-e7ce59f380baa7f475200269971a0737.png"},76219:function(t,e,a){e.Z=a.p+"assets/images/rabbitmQ-83258586b6f57cb3f3089e3d38995210.png"}}]);