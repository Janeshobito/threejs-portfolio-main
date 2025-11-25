// main.js
import './style.css'
import Experience from './Experience/Experience.js';
import ASScroll from '@ashthornton/asscroll';

// Initialize your 3D Experience
const experience = new Experience(document.querySelector(".experience-canvas"));

// Initialize ASScroll
const asscroll = new ASScroll({
  disableRaf: true,
  customScrollbar: false
});
asscroll.enable();

// Make sure external links open normally
document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const url = link.getAttribute('href');
    if (url.startsWith('http')) {
      window.open(url, '_blank', 'noopener,noreferrer');
      e.preventDefault(); // prevents Asscroll from hijacking
    }
  });
});
