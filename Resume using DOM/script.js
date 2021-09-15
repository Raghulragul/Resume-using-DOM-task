const image = document.createElement("img");
image.setAttribute("src","images/img.jpg");
image.classList.add("pic");

const div1 = document.createElement("div");
div1.classList.add("top");
document.querySelector("body").appendChild(div1);
div1.appendChild(image);

const h11 = document.createElement("h1");
const h11text = document.createTextNode("BRIAN DUDEY");
h11.appendChild(h11text);
h11.classList.add("name");
document.querySelector("body").appendChild(h11);


const h12 = document.createElement("h1");
h12.innerHTML = "&nbsp;";
h12.classList.add("space");
document.querySelector("body").appendChild(h12);


const h13 = document.createElement("h1");
h13.innerHTML = "&nbsp;";
h13.classList.add("space2");
document.querySelector("body").appendChild(h13);


const p1 = document.createElement("p");
const p1text = document.createTextNode("N.Damen Avenue, Chicago 99999 |999-999-9999 | hello@Kickresume.com | www.kickresume.com");
p1.classList.add("text");
p1.appendChild(p1text);
const div2 = document.createElement("div");
document.querySelector("body").appendChild(div2);
div2.appendChild(p1);


const hr = document.createElement("hr");
hr.classList.add("space2");
document.querySelector("body").appendChild(hr);



//profile start

const div3 = document.createElement("div");
div3.classList.add("left");
document.querySelector("body").appendChild(div3);
const div31 = document.createElement("div");
div3.appendChild(div31);
const div32 = document.createElement("div");
div32.classList.add("container");
div31.appendChild(div32);
const div33 = document.createElement("div");
div33.classList.add("icon");
div32.appendChild(div33);

const icon1 = document.createElement("i");
icon1.innerHTML = ('<i class="fas fa-user-circle"></i>');
div33.appendChild(icon1);

const h2 = document.createElement("h1");
h2.innerHTML = "Profile";
div32.appendChild(h2);

const br1 = document.createElement("br");
div31.appendChild(br1);

const p2 =  document.createElement("p");
const p2text = document.createTextNode("Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.");
p2.appendChild(p2text);
p2.classList.add("name1");
div31.appendChild(p2);
const br2 = document.createElement("br");
div31.appendChild(br2);

//skills start  

const div41 = document.createElement("div");
div3.appendChild(div41);
const div42 = document.createElement("div");
div42.classList.add("container");
div41.appendChild(div42);
const div43 = document.createElement("div");
div43.classList.add("icon");
div42.appendChild(div43);

const icon2 = document.createElement("i");
icon2.innerHTML = ('<i class="fas fa-flask"></i> ');
div43.appendChild(icon2);
const h3 = document.createElement("h1");
h3.innerHTML = "Skills";
div42.appendChild(h3);

const table1 = document.createElement("table");
table1.classList.add("tb1");
div41.appendChild(table1);
const tr1 = document.createElement("tr");
table1.appendChild(tr1);
const th1 = document.createElement("th");
const th1text = document.createTextNode("Technical Skills");
th1.appendChild(th1text);
th1.setAttribute('colspan','2');
tr1.appendChild(th1);

const tr2 = document.createElement("tr");
table1.appendChild(tr2);

const td1 = document.createElement("td");
const td1text = document.createTextNode("Javascript");
td1.appendChild(td1text);
tr2.appendChild(td1);
const td2 = document.createElement("td");
tr2.appendChild(td2);
const input1 = document.createElement("input");
input1.setAttribute('type','range');
input1.setAttribute('value','80');
input1.classList.add("input1");
td2.appendChild(input1).disabled=true;

const tr3 = document.createElement("tr");
table1.appendChild(tr3);
const td3 = document.createElement("td");
const td2text = document.createTextNode("CSS");
td3.appendChild(td2text);
tr3.appendChild(td3);
const td4 = document.createElement("td");
tr3.appendChild(td4);
const input2 = document.createElement("input");
input2.setAttribute('type','range');
input2.setAttribute('value','80');
input2.classList.add("input1");
td4.appendChild(input2).disabled=true;


const tr4 = document.createElement("tr");
table1.appendChild(tr4);
const td5 = document.createElement("td");
const td3text = document.createTextNode("HTML");
td5.appendChild(td3text);
tr4.appendChild(td5);
const td6 = document.createElement("td");
tr4.appendChild(td6);
const input3 = document.createElement("input");
input3.setAttribute('type','range');
input3.setAttribute('value','60');
input3.classList.add("input1");
td6.appendChild(input3).disabled=true;


const tr5 = document.createElement("tr");
table1.appendChild(tr5);
const td7 = document.createElement("td");
const td4text = document.createTextNode("React");
td7.appendChild(td4text);
tr5.appendChild(td7);
const td8 = document.createElement("td");
tr5.appendChild(td8);
const input4 = document.createElement("input");
input4.setAttribute('type','range');
input4.setAttribute('value','60');
input4.classList.add("input1");
td8.appendChild(input4).disabled=true;



const tr6 = document.createElement("tr");
table1.appendChild(tr6);
const td9 = document.createElement("td");
const td5text = document.createTextNode("Redux");
td9.appendChild(td5text);
tr6.appendChild(td9);
const td10 = document.createElement("td");
tr6.appendChild(td10);
const input5 = document.createElement("input");
input5.setAttribute('type','range');
input5.setAttribute('value','80');
input5.classList.add("input1");
td10.appendChild(input5).disabled=true;



const tr7 = document.createElement("tr");
table1.appendChild(tr7);
const td11 = document.createElement("td");
const td6text = document.createTextNode("Mongo");
td11.appendChild(td6text);
tr7.appendChild(td11);
const td12 = document.createElement("td");
tr7.appendChild(td12);
const input6 = document.createElement("input");
input6.setAttribute('type','range');
input6.setAttribute('value','80');
input6.classList.add("input1");
td12.appendChild(input6).disabled=true;



const tr8 = document.createElement("tr");
table1.appendChild(tr8);
const td13 = document.createElement("td");
const td7text = document.createTextNode("Deployment");
td13.appendChild(td7text);
tr8.appendChild(td13);
const td14 = document.createElement("td");
tr8.appendChild(td14);
const input7 = document.createElement("input");
input7.setAttribute('type','range');
input7.setAttribute('value','100');
input7.classList.add("input1");
td14.appendChild(input7).disabled=true;

const tr9 = document.createElement("tr");
table1.appendChild(tr9);
const th2 = document.createElement("th");
const th2text = document.createTextNode("Additional Skills");
th2.appendChild(th2text);
th2.setAttribute('colspan','2');
tr9.appendChild(th2);


const tr10 = document.createElement("tr");
table1.appendChild(tr10);
const td15 = document.createElement("td");
const td8text = document.createTextNode("Project Management");
td15.appendChild(td8text);
tr10.appendChild(td15);
const td16 = document.createElement("td");
tr10.appendChild(td16);
const input8 = document.createElement("input");
input8.setAttribute('type','range');
input8.setAttribute('value','100');
input8.classList.add("input1");
td16.appendChild(input8).disabled=true;

const tr11 = document.createElement("tr");
table1.appendChild(tr11);
const td17 = document.createElement("td");
const td9text = document.createTextNode("Recruitment");
td17.appendChild(td9text);
tr11.appendChild(td17);
const td18 = document.createElement("td");
tr11.appendChild(td18);
const input9 = document.createElement("input");
input9.setAttribute('type','range');
input9.setAttribute('value','80');
input9.classList.add("input1");
td18.appendChild(input9).disabled=true;

const tr12 = document.createElement("tr");
table1.appendChild(tr12);
const td19 = document.createElement("td");
const td10text = document.createTextNode("Business Development");
td19.appendChild(td10text);
tr12.appendChild(td19);
const td20 = document.createElement("td");
tr12.appendChild(td20);
const input10 = document.createElement("input");
input10.setAttribute('type','range');
input10.setAttribute('value','100');
input10.classList.add("input1");
td20.appendChild(input10).disabled=true;


const tr13 = document.createElement("tr");
table1.appendChild(tr13);
const td21 = document.createElement("td");
const td11text = document.createTextNode("Editing");
td21.appendChild(td11text);
tr13.appendChild(td21);
const td22 = document.createElement("td");
tr13.appendChild(td22);
const input11 = document.createElement("input");
input11.setAttribute('type','range');
input11.setAttribute('value','80');
input11.classList.add("input1");
td22.appendChild(input11).disabled=true;


const tr14 = document.createElement("tr");
table1.appendChild(tr14);
const td23 = document.createElement("td");
const td12text = document.createTextNode("Fundraising");
td23.appendChild(td12text);
tr14.appendChild(td23);
const td24 = document.createElement("td");
tr14.appendChild(td24);
const input12 = document.createElement("input");
input12.setAttribute('type','range');
input12.setAttribute('value','100');
input12.classList.add("input1");
td24.appendChild(input12).disabled=true;



const br3 = document.createElement("br");
div41.appendChild(br3);

//work experience 1 start 

const div51 = document.createElement("div");
div3.appendChild(div51);
const div52 = document.createElement("div");
div52.classList.add("container");
div51.appendChild(div52);
const div53 = document.createElement("div");
div53.classList.add("icon");
div52.appendChild(div53);

const icon3 = document.createElement("i");
icon3.innerHTML = ('<i class="fas fa-briefcase"></i>');
div53.appendChild(icon3);
const h4 = document.createElement("h1");
h4.innerHTML = "Work experience";
div52.appendChild(h4);

const br4 = document.createElement("br");
div51.appendChild(br4);


const p3 = document.createElement("p");
p3.classList.add("p3text");
div51.appendChild(p3);
const b = document.createElement("b");
b.innerHTML = ("Event Manager");
p3.appendChild(b);
const span1 = document.createElement("span");
span1.innerHTML = ("03/2014 - 02/2017");
span1.classList.add("span1");
p3.appendChild(span1);



const p4 = document.createElement("p");
p4.innerHTML = ("C3 Presents, Washington DC");
p4.classList.add("p3text");
div51.appendChild(p4);

const br5 = document.createElement("br");
div51.appendChild(br5);


const ul1 = document.createElement("ul");
ul1.classList.add("ul1");
div51.appendChild(ul1);
const li1 = document.createElement("li");
li1.innerHTML = ("Lead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationship and on-site facilitation.");
ul1.appendChild(li1);
const li2 = document.createElement("li");
li2.innerHTML = ("Brought new business to the organisation through relentless networking and stewardship which helped the company win the bid for the state department summit on the middle East and, the companies largest civic event to date, the United state of women");
ul1.appendChild(li2);
const li3 = document.createElement("li");
li3.innerHTML = ("Exercise fiscal control over budget creation, tracking and reporting. collaborate with employees at all organizational levels to advance cohesive operations");
ul1.appendChild(li3);



const div61 = document.createElement("div");
div61.classList.add("vertical");
document.querySelector("body").appendChild(div61);

//work experience 2 start 

const div71 = document.createElement("div");
div71.classList.add("right");
document.querySelector("body").appendChild(div71);
const div72 = document.createElement("div");
div71.appendChild(div72);

const div73 = document.createElement("div");
div73.classList.add("container");
div72.appendChild(div73);
const div74 = document.createElement("div");
div74.classList.add("icon");
div73.appendChild(div74);

const icon4 = document.createElement("i");
icon4.innerHTML = ('<i class="fas fa-briefcase"></i>');
div74.appendChild(icon4);
const h5 = document.createElement("h1");
h5.innerHTML = "Work experience";
div73.appendChild(h5);

const br6 = document.createElement("br");
div72.appendChild(br6);

const p5 = document.createElement("p");
p5.classList.add("p3text");
div72.appendChild(p5);
const b1 = document.createElement("b");
b1.innerHTML = ("community relations");
p5.appendChild(b1);
const span2 = document.createElement("span");
span2.innerHTML = ("06/2011 - 01/2014");
span2.classList.add("span2");
p5.appendChild(span2);

const p6 = document.createElement("p");
p6.classList.add("p3text");
div72.appendChild(p6);
const b2 = document.createElement("b");
b2.innerHTML = ("Manager");
p6.appendChild(b2);
const p7 = document.createElement("p");
p7.innerHTML = ("Gay & Lesbian Elder Housing. Los Angeles");
p7.classList.add("p3text");
div72.appendChild(p7);

const br7 = document.createElement("br");
div72.appendChild(br7);

const ul2 = document.createElement("ul");
ul2.classList.add("ul1");
div72.appendChild(ul2);
const li4 = document.createElement("li");
li4.innerHTML = ("Arranging presentations and pitch deck.");
ul2.appendChild(li4);
const li5 = document.createElement("li");
li5.innerHTML = ("Designing a PR plan and establishing important focus points.");
ul2.appendChild(li5);
const li6 = document.createElement("li");
li6.innerHTML = ("Designing, creating and managing content across multiple communication platforms");
ul2.appendChild(li6);
const li7 = document.createElement("li");
li7.innerHTML = ("Building reletionship with key media players.");
ul2.appendChild(li7);


const br8 = document.createElement("br");
div72.appendChild(br8);

//education start

const div81 = document.createElement("div");
div71.appendChild(div81);

const div82 = document.createElement("div");
div82.classList.add("container");
div81.appendChild(div82);
const div83 = document.createElement("div");
div83.classList.add("icon");
div82.appendChild(div83);
const icon5 = document.createElement("i");
icon5.innerHTML = ('<i class="fas fa-graduation-cap"></i>');
div83.appendChild(icon5);
const h6 = document.createElement("h1");
h6.innerHTML = "Education";
div82.appendChild(h6);

const br9 = document.createElement("br");
div81.appendChild(br9);

const p8 = document.createElement("p");
p8.classList.add("p3text");
div81.appendChild(p8);
const b3 = document.createElement("b");
b3.innerHTML = ("Engineering Immersion");
p8.appendChild(b3);
const spann = document.createElement("span");
spann.innerHTML = ("11/2018 - 06/2018");
spann.classList.add("spann");
p8.appendChild(spann);

const p9 = document.createElement("p");
p9.classList.add("p3text");
div81.appendChild(p9);
const b4 = document.createElement("b");
b4.innerHTML = ("program");
p9.appendChild(b4);
const br10 = document.createElement("br");
p9.appendChild(br10);
const spann2 = document.createElement("span");
spann2.innerHTML = ("Thinkful, chicago, IL");
spann2.classList.add("spann2");
p9.appendChild(spann2);
const br11 = document.createElement("br");
div81.appendChild(br11);


const p10 = document.createElement("p");
p10.innerHTML = ("Project-focused intensive program with emphasis on Mongo,Express,React,and javascript(MERN) techinal stack.");
p10.classList.add("p4text");
div81.appendChild(p10);

const br12 = document.createElement("br");
div81.appendChild(br12);


const ul3 = document.createElement("ul");
ul3.classList.add("ul2");
div81.appendChild(ul3);
const li8 = document.createElement("li");
li8.innerHTML = ("Developed a full stack web application, \"RenewU\",using React that allows users to explore various aspects of meditation. Users progess is stored on a backend created using Node and MongoDB.");
ul3.appendChild(li8);
const li9 = document.createElement("li");
li9.innerHTML = ("Developed a language learning app, \"Foodie Phonetics\" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data ");
ul3.appendChild(li9);
const li10 = document.createElement("li");
li10.innerHTML = ("Developed a concierge app, \"pley\",  for individual looking for curated suggestions when visiting a new place the front end place. React was used to develop the front end which includes real-time chat,  drag and drop and variety of advance features. the backend, built using Node, Express, and Mongo, takes advantages of well developed RESTful API,Geospatial searching, and user authentication with JWT.");
ul3.appendChild(li10);

const p11 = document.createElement("p");
p11.classList.add("p3text");
div81.appendChild(p11);
const b5 = document.createElement("b");
b5.innerHTML = ("BA, English");
p11.appendChild(b5);
const spann3 = document.createElement("span");
spann3.innerHTML = ("09/2001 - 09/2005");
spann3.classList.add("spann3");
p11.appendChild(spann3);
const p12 = document.createElement("p");
p12.classList.add("p3text");
p12.innerHTML = ("University of california, Los Angles");
div81.appendChild(p12);

















