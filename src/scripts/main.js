'use strict';

const wall = document.querySelector('div');
const spider = document.querySelector('img');

const moveY = wall.scrollHeight / 2 - 25;
const moveX = wall.scrollWidth / 2 - 25;

if (spider.classList.contains('spider')) {
  spider.style.top = `${moveY}px`;
  spider.style.left = `${moveX}px`;
}
