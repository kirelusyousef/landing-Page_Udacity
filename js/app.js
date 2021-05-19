/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//select all section
const sections = document.querySelectorAll("section");
//catch ul element
const ul_elm = document.getElementById("navbar__list");
// fragment will used in forEach
const fragment = document.createDocumentFragment();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach( (itme, index)=> {

// create li
let new_Li = document.createElement("li");

// create link <a>
let new_link = document.createElement("a");

// catch data_nav of sections
let dat_nav = itme.dataset.nav;

//text of link from data_nav
let text_link = document.createTextNode(dat_nav);
//add text_link in tag link
new_link.appendChild(text_link);

new_link.addEventListener("click",()=>{ 
itme.scrollIntoView({behavior: "smooth"});
});
//add  tag link in tag li
new_Li.appendChild(new_link);
//add  all li in fragment
fragment.appendChild(new_Li);
})
//add  all li in ul element
ul_elm.appendChild(fragment);



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
* End Main Functions
* Begin Events
* 
*/

// Build menu


// Scroll to section on link click
window.addEventListener("scroll", ()=> {


sections.forEach( (active) => { 

//Dimensions of the section 
const domRect = active.getBoundingClientRect();

if (domRect.top > 0 && domRect.top < 350) {
// catch data_nav of sections
const dat_Nav = active.dataset.nav;
//select all li
const  li_active = document.querySelectorAll("li");
//foreach loop of li
li_active.forEach( (li_act)=> {

if (li_act.innerText == dat_Nav ) { 
//delet acteve from all li
li_active.forEach( (active_Delet)=> {
active_Delet.style.background ="white";
}) 
// Set li as active
li_act.style.background = "#AEB6BF";
}
})


//section active
sections.forEach( (active_section)=> {
//delet acteve from all active_section
active_section.style.background = "";
})
// Set sections as active
active.style.background ="#C0392B";

}
});

})





