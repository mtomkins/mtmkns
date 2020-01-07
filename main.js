const about = document.querySelector(".aboutNav");
const work = document.querySelector(".workNav");
const contact = document.querySelector(".contactNav");

const tl = new TimelineMax();

tl.fromTo(work, 1, { height: "100%" }, { height: "50%" });