"use strict";
let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let btn = document.getElementById('btn');
let rocks = document.getElementById('rocks');
let forest = document.getElementById('forest');
let water = document.getElementById('water');
let header = document.getElementById('header');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    text.style.top = 50 + value * -.1 + '%';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * 2 + 'px';
    bird1.style.top = value * -1.5 + 'px';
    bird1.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -.12 + 'px';
    forest.style.top = value * .25 + 'px';
    header.style.top = value * .5 + 'px';
});

// JavaScript for Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

document.addEventListener("mouseenter", () => {
  cursor.style.display = "block";
});


// Gsap Smooth Scroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {
	ScrollSmoother.create({

		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	})

	gsap.fromTo({
		scrollTtigger: {
			start: 'center',
			end: '820',
			scrub: true

		}


	});
}
