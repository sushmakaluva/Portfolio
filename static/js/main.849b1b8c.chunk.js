(this.webpackJsonpPortfolio=this.webpackJsonpPortfolio||[]).push([[0],{124:function(e,a,t){e.exports=t.p+"static/media/avatar.e77108f8.png"},125:function(e,a,t){e.exports=t.p+"static/media/resume.5b400ce2.pdf"},139:function(e,a,t){e.exports=t(390)},380:function(e,a,t){},382:function(e,a,t){},384:function(e,a,t){},390:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),s=t.n(r),c=t(23),i=t(19),o=t(30),m=t(31),u=t(36),d=t(9),p=t.n(d),h=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=p()("nav").outerHeight();p()(".navbar-toggler").on("click",(function(){p()("#mainNav").hasClass("navbar-reduce")||p()("#mainNav").addClass("navbar-reduce")})),p()("body").scrollspy({target:"#mainNav",offset:e}),p()(".js-scroll").on("click",(function(){p()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"):document.querySelector(".navbar-expand-md").classList.add("navbar-trans")})),p()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var a=p()(this.hash);if((a=a.length?a:p()("[name="+this.hash.slice(1)+"]")).length)return p()("html, body").animate({scrollTop:a.offset().top-e+5},1e3,"easeInExpo"),!1}})),p()(".js-scroll").on("click",(function(){p()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},l.a.createElement("div",{className:"container",style:{listStyleType:"none",marginLeft:"0px"}},l.a.createElement("li",{className:"nav-item fixed-top navbar-dark justify-content-start"},l.a.createElement("a",{className:"navbar-brand",href:"https://github.com/sushmakaluva"},l.a.createElement("i",{className:"fa fa-github fa-md"}))),l.a.createElement("li",{className:"nav-item fixed-top navbar-dark justify-content-start"},l.a.createElement("a",{className:"navbar-brand",href:"https://www.linkedin.com/in/sushma-reddy-kaluva/"},l.a.createElement("i",{className:"fa fa-linkedin-square fa-md"}))),l.a.createElement("li",{className:"nav-item fixed-top navbar-dark justify-content-start"},l.a.createElement("a",{className:"navbar-brand",href:"mailto:kaluvasushma@gmail.com?Subject=Hello Sushma&Body=I would like to get in touch !"},l.a.createElement("i",{className:"fa fa-envelope fa-md"}))),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",style:{listStyleType:"none",marginRight:"0px"}},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),a}(l.a.Component),v=t(121),E=t(419),b=Object(E.a)((function(e){return{particlesCanvas:{position:"fixed",opacity:"0.3",backgroundColor:"#233"}}})),f=function(){var e=b();return l.a.createElement(v.Particles,{canvasClassName:e.particlesCanvas,params:{particles:{number:{value:45,density:{enable:!0,value_area:800}},shape:{type:"circle",stroke:{width:1,color:"tomato"}},size:{value:8,random:!0,anim:{enable:!1,speed:6,size_min:0,sync:!0}},opacity:{value:.5,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}}}}})},y=t(421),g=t(74),N=t.n(g),w=t(423),k=t(428),x=t(124),S=t.n(x),j=t(125),M=t.n(j),C=Object(E.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),margin:e.spacing(1)},title:{color:"tomato"},subtitle:{color:"tan",textTransform:"uppercase"},typedContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100vw",textAlign:"center",zIndex:1}}}));var O=function(){var e=C();return l.a.createElement("div",{id:"home",className:"intro route"},l.a.createElement("div",{className:"intro-content display-table"},l.a.createElement("div",{className:"table-cell"},l.a.createElement("div",{className:"container"},l.a.createElement(y.a,{container:!0,justify:"center"},l.a.createElement(k.a,{className:e.avatar,src:S.a,alt:"Sushma Kaluva"})),l.a.createElement(w.a,{className:e.title,variant:"h3"},l.a.createElement(N.a,{strings:["Sushma Kaluva"],typeSpeed:40})),l.a.createElement(w.a,{className:e.subtitle,variant:"h6"},l.a.createElement(N.a,{strings:["Front-end Developer","Web Developer","Full-stack Developer"],typeSpeed:40,backSpeed:50,loop:!0})),l.a.createElement("p",{className:"pt-3"},l.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:M.a,target:"_blank",role:"button"},"View my Resume"))))))},I=t(427),R=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(o.a)(this,Object(m.a)(a).call(this))).state={about_me:[{id:"first-p-about",content:" Innovative Front-End Developer with a passion for solving logical problems with efficient and readable code. Skilled in building web applications with HTML, CSS, JavaScript, ReactJS, MERN stack. Ready to add experience and skills to a team of spirited developers and contribute meaningfully to a project."},{id:"second-p-about",content:"My coding journey started off with designing a few web pages for my organization. Learning Javascript was my next venture; this is the one which gave me a taste of what coding is all about. That's how I kick-started my coding journey which eventually led me into programming and web-designing."},{id:"third-p-about",content:" And, there was no looking back ! Now I completely enjoy coding and it has become a part of my life. I am ever-ready to learn new frameworks, libraries & technologies and continuously strive to be a better developer."}],btnStyle:{backgroundColor:"tan",margin:"10px",padding:"5px"},headingStyle:{color:"tomato",margin:"10px"},aboutStyle:{color:"tan",fontFamily:"Handlee"}},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{id:"about",className:"paralax-mf footer-paralax bg-image sect-mt4 sect-pt4 route"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"container",style:{background:"#233",padding:"30px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},l.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},l.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:""})))),l.a.createElement("div",{className:"skill-mf"},"return (",l.a.createElement(l.a.Fragment,null,l.a.createElement("h5",{style:this.state.headingStyle},"Web Technologies :"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle}," HTML5")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"CSS3")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Javascript")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Bootstrap")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"React")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"jQuery")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"AJAX")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Express")," ",l.a.createElement("h5",{style:this.state.headingStyle},"Frameworks:"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"React")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Node JS")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"RESTful API")," ",l.a.createElement("h5",{style:this.state.headingStyle},"Databases:"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"MySQL")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"MongoDB")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"PostgreSQL")," ",l.a.createElement("h5",{style:this.state.headingStyle},"Tools:"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Git")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Linux")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Bitbucket")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Postman")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Linux")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Heroku")," ",l.a.createElement("h5",{style:this.state.headingStyle},"Package Management:"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"  npm")," ",l.a.createElement("h5",{style:this.state.headingStyle},"Analytics & Reporting:"),l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Tableau")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Oracle BI")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Power BI")," ",l.a.createElement(I.a,{variant:"primary",style:this.state.btnStyle},"Advanced Excel")," "),"); }}")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"about-me pt-4 pt-md-0"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement(w.a,{variant:"h5",style:{color:"#ff4d4d",padding:"10px"}},"ABOUT ME"),l.a.createElement("div",{className:"line-mf"})),this.state.about_me.map((function(a){return l.a.createElement("p",{style:e.state.aboutStyle,className:"lead",key:a.id},a.content)}))))))))))}}]),a}(l.a.Component),L=t(426),A=t(424),B=t(77),P=t.n(B),T=t(78),z=t.n(T),J=t(79),D=t.n(J),q=t(80),Q=t.n(q),W=t(81),H=t.n(W),F=t(82),G=t.n(F),_=Object(E.a)((function(e){return{contactContainer:{background:"#233",padding:"30px"},heading:{color:"tomato",textAlign:"center",textTransform:"uppercase",marginBottom:"1rem"},form:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute"},input:{color:"#fff"},button:{marginTop:"1rem",color:"tomato",borderColor:"tan"},field:{margin:"1rem 0rem"}}}));var Y=function(){var e=_();return l.a.createElement("section",{id:"work",className:"paralax-mf footer-paralax bg-image sect-mt4 sect-pt4 route"},l.a.createElement(L.a,{component:"div",className:e.contactContainer},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"title-box text-center"},l.a.createElement(w.a,{variant:"h5",className:e.heading},"PROJECTS"),l.a.createElement("div",{className:"line-mf"})))),l.a.createElement("div",{className:"row card-group"},l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:H.a,"data-lightbox":"gallery-smth"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:H.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"ReachMe - A Social media application"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"MERN(Mongo, Express, React, Node), Firebase, Heroku, Mongo Atlas "))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/ReachMe"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://rocky-dawn-25327.herokuapp.com/"},"Live Demo")))),l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:P.a,"data-lightbox":"gallery-vmarine"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:P.a,alt:"goAds-website",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"goAds.com - A classified e-commerce application"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Bootstrap JS Jquery Handlebars Express node.js Mysql MVC"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/goAds.com"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://fathomless-hollows-88186.herokuapp.com/"},"Live Demo")))),l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:z.a,"data-lightbox":"gallery-aguadeluz"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:z.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"flYjet - Flight search application"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 JS jQuery Bootstrap WebAPI VanillaJS")," ")),l.a.createElement("div",{className:"col-sm-4",style:{height:"70px"}},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/flYjet-Flight-Search"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://sushmakaluva.github.io/flYjet-Flight-Search/"},"Live Demo")))),l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:D.a,"data-lightbox":"gallery-todo"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:D.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Weather Dashboard - A weather tracking application"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Bootstrap Javascript Jquery JSON AJAX WebAPI LocalStorage"))),l.a.createElement("div",{className:"col-sm-4",style:{height:"70px"}},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/Weather-dashboard"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://sushmakaluva.github.io/Weather-dashboard/"},"Live Demo")))),l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:Q.a,"data-lightbox":"gallery-medlingos"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:Q.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Coding Quiz - A Javascript quiz application"),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"HTML5 CSS3 Javascript Jquery JSON Bootstrap LocalStorage Timers"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/Code-Quiz"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://sushmakaluva.github.io/Code-Quiz/"},"Live Demo")))),l.a.createElement("div",{className:"col-md-4 h-100"},l.a.createElement("div",{className:"work-box",style:{borderRadius:"20px"}},l.a.createElement("a",{href:G.a,"data-lightbox":"gallery-mf"},l.a.createElement("div",{className:"work-img",style:{borderRadius:"20px"}},l.a.createElement("img",{src:G.a,alt:"",className:"img-fluid"})),l.a.createElement("div",{className:"work-content"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("h2",{className:"w-title"},"Employee Directory - Built using React "),l.a.createElement("div",{className:"w-more"},l.a.createElement("span",{className:"w-ctegory"},"React CSS3 Bootstrap WebAPI"))),l.a.createElement("div",{className:"col-sm-4"},l.a.createElement("div",{className:"w-like"},l.a.createElement("span",{className:"ion-ios-plus-outline"})))))),l.a.createElement(A.a,{style:{justifyContent:"space-between",margin:"10px"}},l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://github.com/sushmakaluva/react-employee-directory"},"Github"),l.a.createElement(I.a,{size:"small",style:{backgroundColor:"tan"},href:"https://sushmakaluva.github.io/react-employee-directory/"},"Live Demo")))))))},K=t(6),V=t(425),X=t(126),U=t.n(X),$=Object(E.a)((function(e){return{contactContainer:{background:"#233",height:"100vh"},heading:{color:"tomato",textAlign:"center",textTransform:"uppercase",marginBottom:"1rem"},form:{top:"50%",left:"50%",transform:"translate(-50%, -50%)",position:"absolute"},input:{color:"#fff"},button:{marginTop:"1rem",color:"tomato",borderColor:"tan"},field:{margin:"1rem 0rem"}}})),Z=Object(K.a)({root:{"& label.Mui-focused":{color:"tomato"},"& label":{color:"tan"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"tan"},"&:hover fieldset":{borderColor:"tan"},"&.Mui-focused fieldset":{color:"#fff",borderColor:"tan"}}}})(V.a);var ee=function(){var e=$();return l.a.createElement("section",{id:"contact",className:"paralax-mf footer-paralax bg-image sect-mt4 route"},l.a.createElement(L.a,{component:"div",className:e.contactContainer},l.a.createElement(y.a,{container:!0,justify:"center"},l.a.createElement(L.a,{component:"form",className:e.form},l.a.createElement(w.a,{variant:"h5",className:e.heading},"Hire or Contact me..."),l.a.createElement("div",{className:"line-mf"}),l.a.createElement("br",null),l.a.createElement("p",{style:{color:"tan"}},l.a.createElement("i",null,"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you. Simply fill the from and send me an email.")),l.a.createElement("form",{action:"https://formspree.io/f/mjvpwyzz",method:"POST"},l.a.createElement(Z,{fullWidth:!0,label:"Name",name:"Name",variant:"outlined",inputProps:{className:e.input}}),l.a.createElement(Z,{fullWidth:!0,label:"Email",name:"Email",variant:"outlined",inputProps:{className:e.input},className:e.field}),l.a.createElement(Z,{fullWidth:!0,label:"Message",name:"Message",variant:"outlined",multiline:!0,rows:4,inputProps:{className:e.input}}),l.a.createElement(I.a,{variant:"outlined",fullWidth:!0,endIcon:l.a.createElement(U.a,null),className:e.button,type:"submit"},"Contact Me"))))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container",style:{marginTop:"90px"}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12"},l.a.createElement("div",{className:"copyright-box",style:{color:"tan"}},"2020 \xa9 Copyright Sushma Kaluva. All Rights Reserved"))))))};p.a.easing.jswing=p.a.easing.swing,p.a.extend(p.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,l){return p.a.easing[p.a.easing.def](e,a,t,n,l)},easeInQuad:function(e,a,t,n,l){return n*(a/=l)*a+t},easeOutQuad:function(e,a,t,n,l){return-n*(a/=l)*(a-2)+t},easeInOutQuad:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,l){return n*(a/=l)*a*a+t},easeOutCubic:function(e,a,t,n,l){return n*((a=a/l-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,l){return n*(a/=l)*a*a*a+t},easeOutQuart:function(e,a,t,n,l){return-n*((a=a/l-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,l){return n*(a/=l)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,l){return n*((a=a/l-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,l){return(a/=l/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,l){return-n*Math.cos(a/l*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,l){return n*Math.sin(a/l*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,l){return-n/2*(Math.cos(Math.PI*a/l)-1)+t},easeInExpo:function(e,a,t,n,l){return 0===a?t:n*Math.pow(2,10*(a/l-1))+t},easeOutExpo:function(e,a,t,n,l){return a===l?t+n:n*(1-Math.pow(2,-10*a/l))+t},easeInOutExpo:function(e,a,t,n,l){return 0===a?t:a===l?t+n:(a/=l/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,l){return-n*(Math.sqrt(1-(a/=l)*a)-1)+t},easeOutCirc:function(e,a,t,n,l){return n*Math.sqrt(1-(a=a/l-1)*a)+t},easeInOutCirc:function(e,a,t,n,l){return(a/=l/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;return 0===a?t:1===(a/=l)?t+n:(s||(s=.3*l),c<Math.abs(n)?(c=n,r=s/4):r=s/(2*Math.PI)*Math.asin(n/c),-c*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)+t)},easeOutElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;return 0===a?t:1===(a/=l)?t+n:(s||(s=.3*l),c<Math.abs(n)?(c=n,r=s/4):r=s/(2*Math.PI)*Math.asin(n/c),c*Math.pow(2,-10*a)*Math.sin((a*l-r)*(2*Math.PI)/s)+n+t)},easeInOutElastic:function(e,a,t,n,l){var r=1.70158,s=0,c=n;return 0===a?t:2===(a/=l/2)?t+n:(s||(s=l*(.3*1.5)),c<Math.abs(n)?(c=n,r=s/4):r=s/(2*Math.PI)*Math.asin(n/c),a<1?c*Math.pow(2,10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)*-.5+t:c*Math.pow(2,-10*(a-=1))*Math.sin((a*l-r)*(2*Math.PI)/s)*.5+n+t)},easeInBack:function(e,a,t,n,l,r){return void 0===r&&(r=1.70158),n*(a/=l)*a*((r+1)*a-r)+t},easeOutBack:function(e,a,t,n,l,r){return void 0===r&&(r=1.70158),n*((a=a/l-1)*a*((r+1)*a+r)+1)+t},easeInOutBack:function(e,a,t,n,l,r){return void 0===r&&(r=1.70158),(a/=l/2)<1?n/2*(a*a*((1+(r*=1.525))*a-r))+t:n/2*((a-=2)*a*((1+(r*=1.525))*a+r)+2)+t},easeInBounce:function(e,a,t,n,l){return n-p.a.easing.easeOutBounce(e,l-a,0,n,l)+t},easeOutBounce:function(e,a,t,n,l){return(a/=l)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,l){return a<l/2?.5*p.a.easing.easeInBounce(e,2*a,0,n,l)+t:.5*p.a.easing.easeOutBounce(e,2*a-l,0,n,l)+.5*n+t}});var ae=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){p()(".back-to-top").click((function(){return p()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return l.a.createElement("a",{href:"/",className:"back-to-top animated"},l.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),a}(l.a.Component),te=function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){p()(window).on("load",(function(){p()("#preloader").length&&p()("#preloader").delay(100).fadeOut("slow",(function(){p()(this).remove()}))}))}},{key:"render",value:function(){return l.a.createElement("div",{id:"preloader"})}}]),a}(l.a.Component);var ne=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(h,null),l.a.createElement(O,null),l.a.createElement(R,null),l.a.createElement(Y,null),l.a.createElement(ee,null),l.a.createElement(ae,null),l.a.createElement(te,null))};t(379),t(380),t(381),t(382),t(383),t(384),t(385),t(386),t(387),t(389),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},77:function(e,a,t){e.exports=t.p+"static/media/image1.b6cc46ad.jpg"},78:function(e,a,t){e.exports=t.p+"static/media/image2.9b2e6267.jpg"},79:function(e,a,t){e.exports=t.p+"static/media/image3.3bc26f06.jpg"},80:function(e,a,t){e.exports=t.p+"static/media/image4.6eddf7c2.jpg"},81:function(e,a,t){e.exports=t.p+"static/media/image5.987e6e1f.png"},82:function(e,a,t){e.exports=t.p+"static/media/image6.fa4e9b4d.jpg"}},[[139,1,2]]]);
//# sourceMappingURL=main.849b1b8c.chunk.js.map