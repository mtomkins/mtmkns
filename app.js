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
//tl.fromTo(rule2, 0.2, { opacity: "0" }, { opacity: "1", ease: Power2.easeInOut }, "-=0.0");