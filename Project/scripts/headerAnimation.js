import '../style/style.scss';
import { gsap, TweenMax, TimelineMax, TweenLite } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

gsap.registerPlugin(CustomEase);

Splitting();

const text = document.querySelector('.text');
const wave = document.querySelector('.wave');
const text2 = document.querySelector('.text2');
const container = document.querySelector('.container');
const welcomeOne = document.querySelector('.welcome__one');
const welcomeTwo = document.querySelector('.welcome__two');
const textSplit = Splitting({ target: text, by: 'chars' })[0].chars;
const text2Split = Splitting({ target: text2, by: 'chars' })[0].chars;
const welcomeSplit = Splitting({ target: welcomeOne, by: 'chars' })[0].chars;
const welcome2Split = Splitting({ target: welcomeTwo, by: 'chars' })[0].chars;

const cW = text.offsetWidth;
const cWave = wave.offsetWidth;
const conHei = getAbsoluteHeight(container);

function getAbsoluteHeight(el) {
  // Get the DOM Node if you pass in a string
  el = typeof el === 'string' ? document.querySelector(el) : el;

  var styles = window.getComputedStyle(el);
  var margin =
    parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + margin);
}

const animationFunction = () => {
  const tlWord = new TimelineMax({ delay: 1, repeat: 0 });
  const tlWord2 = new TimelineMax({ delay: 5.2, repeat: 0 });
  const tlWelcome = new TimelineMax({ delay: 11.01, repeat: 0 });
  const tlWelcome2 = new TimelineMax({ delay: 12.01, repeat: 0 });

  var tl = gsap.timeline();
  var tl3 = gsap.timeline({ delay: 3.6 });
  const tlWel = gsap.timeline({ delay: 11 });
  const tlWel2 = gsap.timeline({ delay: 12 });

  // First word animation

  tlWord.staggerTo(
    textSplit,
    0.7,
    {
      y: -40,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.126,0.382 0.311,1 0.528,1 0.715,1 0.824,0.489 0.898,0.21 0.941,0.046 0.954,0.034 1,0 '
      ),
    },
    0.1
  );

  // Wave animation

  tl.to('.wave', { scale: 1, duration: 1, ease: 'linear' });
  tl.to('.wave', { x: cW * 0.1, width: cW / 9, duration: 0.3, ease: 'linear' });
  tl.to('.wave', { x: cW * 0.88, duration: 1.5, ease: 'linear' });
  tl.to('.wave', {
    x: cW * 0.95,
    width: cWave,
    duration: 0.3,
    ease: 'linear',
  });
  tl.to('.wave', {
    y: conHei,
    duration: 2,
    ease: CustomEase.create(
      'custom',
      'M0,0 C0.14,0 0.202,0.291 0.232,0.414 0.273,0.581 0.292,0.563 0.3,0.6 0.308,0.585 0.362,0.344 0.424,0.358 0.522,0.38 0.656,0.852 0.664,0.866 0.696,0.926 0.719,0.981 0.726,0.998 0.788,0.914 0.84,0.936 0.859,0.95 0.878,0.964 0.897,0.985 0.911,0.998 0.922,0.994 0.939,0.984 0.954,0.984 0.969,0.984 1,1 1,1 '
    ),
  });
  tl.to('.wave', {
    x: cW * 0.95 - cW * 0.1,
    width: cW / 9,
    duration: 0.3,
    ease: 'linear',
  });
  tl.to('.wave', { x: cW * 0.12, duration: 1.5, ease: 'linear' });
  tl.to('.wave', {
    x: 0,
    width: cWave,
    duration: 0.3,
    ease: 'linear',
  });
  tl.to('.wave', {
    y: conHei + conHei / 2,
    duration: 2,
    ease: 'bounce',
  });
  tl.to('.wave', {
    scale: 100,
    duration: 2,
    ease: 'bounce',
  });

  // Letter T bounce down

  tl3.to(text2Split[text2Split.length - 1], {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'bounce',
  });

  tl3.to(text2Split[text2Split.length - 1], {
    y: 0,
    opacity: 1,
    delay: 3,
    duration: 1,
    ease: 'bounce',
  });

  // Second Word animation

  tlWord2.staggerTo(
    text2Split.reverse(),
    0.8,
    {
      y: -40,
      ease: CustomEase.create(
        'custom',
        'M0,0 C0.126,0.382 0.311,1 0.528,1 0.715,1 0.824,0.489 0.898,0.21 0.941,0.046 0.954,0.034 1,0 '
      ),
    },
    0.1
  );

  // Welcome messages
  tlWel.to(welcomeOne, { opacity: 1, duration: 1 });
  tlWel2.to(welcomeTwo, { opacity: 1, duration: 1 });

  tlWelcome.staggerFromTo(
    welcomeSplit.reverse(),
    2,
    {
      y: -145,
      x: -200,
      rotation: -90,
      opacity: 0,
      ease: 'elastic',
    },
    { opacity: 1, y: 0, rotation: 0, x: 0, ease: 'elastic' },
    0.1
  );

  tlWelcome2.staggerFromTo(
    welcome2Split.reverse(),
    2,
    {
      y: -145,
      x: -200,
      rotation: -90,
      opacity: 0,
      ease: 'elastic',
    },
    { opacity: 1, y: 0, rotation: 0, x: 0, ease: 'elastic' },
    0.1
  );
};

setTimeout(animationFunction, 2000);

setTimeout(() => {
  wave.style.cursor = 'pointer';
  const waveShow = () => {
    gsap.to(welcomeOne, { opacity: 0, duration: 0.5 });
    gsap.to(welcomeTwo, { opacity: 0, duration: 0.5 });
    gsap.to(wave, { scale: 1, duration: 2, ease: 'bounce' });
    welcomeOne.style.display = 'none';
    welcomeTwo.style.display = 'none';
    wave.removeEventListener('click', waveShow);
  };
  wave.addEventListener('click', waveShow);
}, 12000);
