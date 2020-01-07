const about = document.querySelector(".aboutNav");
var controller = new ScrollMagic.Controller();
var animateIn = new TimelineMax();

var work = document.querySelector(".workNav");
var contact = document.querySelector(".contactNav");
var sc = document.querySelector(".scNav");
var ur = document.querySelector(".urNav");
var vt = document.querySelector(".vtNav");
var dividers = document.querySelector("#dividers");
var squareCard = document.querySelector("#squareCard");
var subnav = document.querySelector("#subNav");
var ul = document.querySelector("ul");

animateIn
.fromTo(about, 0.5, { x: "0px" }, { x: "-208px", ease: Power2.easeInOut })
.fromTo(work, 0.2, { opacity: "1" }, { opacity: "0", ease: Power2.easeInOut }, "-=0.5")
.fromTo(contact, 0.5, { x: "0px" }, { x: "222px", ease: Power2.easeInOut }, "-=0.5")
.fromTo(sc, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.3")
.fromTo(ur, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.2")
.fromTo(vt, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.1")
.fromTo(dividers, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.2")
.fromTo(subnav, 0.1, { zIndex: "2" }, { zIndex: "3" } )
.fromTo(ul, 0.1, { zIndex: "3" }, { zIndex: "2" } )

var scene = new ScrollMagic.Scene({
	offset: "800px"
})

.setTween(animateIn).addTo(controller)





/*
const about = document.querySelector(".aboutNav");
const work = document.querySelector(".workNav");
const contact = document.querySelector(".contactNav");
const sc = document.querySelector(".scNav");
const ur = document.querySelector(".urNav");
const vt = document.querySelector(".vtNav");
const rule1 = document.querySelector(".rule1");
const rule2 = document.querySelector(".rule2");
const dividers = document.querySelector("#dividers");

const tl = new TimelineMax();

tl.fromTo(about, 0.5, { x: "0px" }, { x: "-208px", ease: Power2.easeInOut });
tl.fromTo(work, 0.2, { opacity: "1" }, { opacity: "0", ease: Power2.easeInOut }, "-=0.5");
tl.fromTo(contact, 0.5, { x: "0px" }, { x: "222px", ease: Power2.easeInOut }, "-=0.5");
tl.fromTo(sc, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.3");
tl.fromTo(ur, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.2");
tl.fromTo(vt, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.1");

tl.fromTo(dividers, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.2");




//tl.fromTo(rule1, 0.0, { x: "236" }, { x: "236", ease: Power2.easeInOut }, "-=-0.5");
//tl.fromTo(rule1, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.0");
//tl.fromTo(rule2, 0.0, { x: "240" }, { x: "-240", ease: Power2.easeInOut }, "-=0.5");
//tl.fromTo(rule2, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.0");*/