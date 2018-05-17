// import { Injectable } from '@angular/core';
// import { Particle } from './particle.model';

// @Injectable()
// export class Star {
//   first;
//   reset;
//   fadeIn;
//   fadeOut;
//   draw;
//   move;
//   speedCoeff = .05;
//   Clock;

//   constructor(private universe, private width, private height) {
//     (function() {
//       setTimeout(function() {
//         this.first = false;
//       }, 50);
//     })();

//     this.reset = function() {
//       this.giant = this.getProbability(3);
//       this.comet = this.giant || this.first ? false : this.getProbability(10);
//       this.x = this.getRandInterval(0, width - 10);
//       this.y = this.getRandInterval(0, height);
//       this.r = this.getRandInterval(1.1, 2.6);
//       this.dx = this.getRandInterval(this.speedCoeff, 6 * this.speedCoeff) + (this.comet + 1 - 1) *
//         this.speedCoeff * this.getRandInterval(50, 120) + this.speedCoeff * 2;
//       this.dy = -this.getRandInterval(this.speedCoeff, 6 * this.speedCoeff) - (this.comet + 1 - 1) *
//         this.speedCoeff * this.getRandInterval(50, 120);
//       this.fadingOut = null;
//       this.fadingIn = true;
//       this.opacity = 0;
//       this.opacityTresh = this.getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
//       this.do = this.getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
//     };

//     this.fadeIn = function() {
//       if (this.fadingIn) {
//         this.fadingIn = this.opacity > this.opacityTresh ? false : true;
//         this.opacity += this.do;
//       }
//     };

//     this.fadeOut = function() {
//       if (this.fadingOut) {
//         this.fadingOut = this.opacity < 0 ? false : true;
//         this.opacity -= this.do / 2;
//         if (this.x > width || this.y < 0) {
//           this.fadingOut = false;
//           this.reset();
//         }
//       }
//     };

//     this.draw = function() {
//       universe.beginPath();

//       if (this.giant) {
//         universe.fillStyle = 'rgba(' + this.giantColor + ',' + this.opacity + ')';
//         universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
//       } else if (this.comet) {
//         universe.fillStyle = 'rgba(' + this.cometColor + ',' + this.opacity + ')';
//         universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

//         // comet tail
//         for (let i = 0; i < 30; i++) {
//           universe.fillStyle = 'rgba(' + this.cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
//           universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
//           universe.fill();
//         }
//       } else {
//         universe.fillStyle = 'rgba(' + this.starColor + ',' + this.opacity + ')';
//         universe.rect(this.x, this.y, this.r, this.r);
//       }

//       universe.closePath();
//       universe.fill();
//     };

//     this.move = function() {
//       this.x += this.dx;
//       this.y += this.dy;
//       if (this.fadingOut === false) {
//         this.reset();
//       }
//       if (this.x > width - (width / 4) || this.y < 0) {
//         this.fadingOut = true;
//       }
//     };

//     // setTimeout(function() {
//     //   this.Clock.init('canvas');
//     // }, 2000);
//   }
//   /////////////////////////////////////////////////////////////////////


//   getProbability(percents) {
//     return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
//   }

//   getRandInterval(min, max) {
//     return (Math.random() * (max - min) + min);
//   }

//   //////////////////////////////////////////////////////////////////////////

//   // this.Clock = () => {
//   //   (function() {
//   //   let canvas;
//   //   let ctx;
//   //   const bgGrad = true;
//   //   let gradient;
//   //   let height = 400;
//   //   const key = {
//   //     up: false,
//   //     shift: false
//   //   };
//   //   let particles = [];
//   //     // particleColor = 'hsla(0, 0%, 100%, 0.3)',
//   //   let mouse = {
//   //     x: 0,
//   //     y: 0
//   //   };
//   //   let press = false;
//   //   let quiver = true;
//   //   let texts = ['LOVE YOU', 'MICHELLE'];

//   //   let text = texts[0];
//   //   let textNum = 0;
//   //   let textSize = 60;
//   //   let valentine = false;
//   //   let msgTime = 100;
//   //   let updateColor = true;
//   //   let width = 420;

//   //   let FRAME_RATE = 60;
//   //   let MIN_WIDTH = 0;
//   //   let MIN_HEIGHT = 0;
//   //   let PARTICLE_NUM = 1200;
//   //   let RADIUS = Math.PI * 2;

//   //   let defaultStyles = function() {
//   //     // textSize = 36;
//   //     // particleColor = 'rgba(226,225,142, 0.7)';
//   //   };

//   //   let draw = function(p) {
//   //     ctx.fillStyle = 'rgba(226,225,142, ' + p.opacity + ')';
//   //     ctx.beginPath();
//   //     ctx.arc(p.x, p.y, p.size, 0, RADIUS, true);
//   //     ctx.closePath();
//   //     ctx.fill();
//   //   };

//   //   let loop = function() {
//   //     ctx.clearRect(0, 0, width, height);
//   //     // textSize = 36;
//   //     ctx.fillStyle = 'rgb(255, 255, 255)';
//   //     ctx.textBaseline = 'middle';
//   //     ctx.font = textSize + 'px Avenir, Helvetica Neue, Arial, sans-serif';
//   //     ctx.fillText(text, (width - ctx.measureText(text).width) * 0.5, height * 0.5);
//   //     let imgData = ctx.getImageData(0, 0, width, height);
//   //     ctx.clearRect(0, 0, width, height);
//   //     for (let i = 0, l = particles.length; i < l; i++) {
//   //       let p = particles[i];
//   //       p.inText = false;
//   //     }
//   //     particleText(imgData);
//   //   };

//   //   let pad = function(number) {
//   //       return ('0' + number).substr(-2);
//   //   };

//   //   let particleText = function(imgData) {
//   //       let pxls = [];
//   //       for (let w = width; w > 0; w -= 3) {
//   //           for (let h = 0; h < width; h += 3) {
//   //               let index = (w + h * (width)) * 4;
//   //               if (imgData.data[index] > 1) {
//   //                   pxls.push([w, h]);
//   //               }
//   //           }
//   //       }

//   //       let count = pxls.length;
//   //       let j = parseInt((particles.length - pxls.length) / 2, 10);
//   //       if (j < 0) {
//   //           j = 0;
//   //       }

//   //       for (let i = 0; i < pxls.length && j < particles.length; i++, j++) {
//   //           try {
//   //               let p = particles[j],
//   //                   X,
//   //                   Y;

//   //               if (quiver) {
//   //                   X = (pxls[count - 1][0]) - (p.px + Math.random() * 5);
//   //                   Y = (pxls[count - 1][1]) - (p.py + Math.random() * 5);
//   //               } else {
//   //                   X = (pxls[count - 1][0]) - p.px;
//   //                   Y = (pxls[count - 1][1]) - p.py;
//   //               }
//   //               let T = Math.sqrt(X * X + Y * Y);
//   //               let A = Math.atan2(Y, X);
//   //               let C = Math.cos(A);
//   //               let S = Math.sin(A);
//   //               p.x = p.px + C * T * p.delta;
//   //               p.y = p.py + S * T * p.delta;
//   //               p.px = p.x;
//   //               p.py = p.y;
//   //               p.inText = true;
//   //               p.fadeIn();
//   //               draw(p);
//   //               if (key.up === true) {
//   //                   p.size += 0.3;
//   //               } else {
//   //                   let newSize = p.size - 0.5;
//   //                   if (newSize > p.origSize && newSize > 0) {
//   //                     p.size = newSize;
//   //                   } else {
//   //                     p.size = p.origSize;
//   //                   }
//   //               }
//   //           } catch (e) {
//   //           }
//   //           count--;
//   //       }
//   //       for (let i = 0; i < particles.length; i++) {
//   //           let p = particles[i];
//   //           if (!p.inText) {
//   //               // p.px = p.mx;
//   //               // p.py = p.my;
//   //               // p.opacity = 1;
//   //               p.fadeOut();

//   //               let X = p.mx - p.px;
//   //               let Y = p.my - p.py;

//   //               let T = Math.sqrt(X * X + Y * Y);

//   //               let A = Math.atan2(Y, X);

//   //               let C = Math.cos(A);

//   //               let S = Math.sin(A);

//   //               p.x = p.px + C * T * p.delta / 2;
//   //               p.y = p.py + S * T * p.delta / 2;
//   //               p.px = p.x;
//   //               p.py = p.y;

//   //               draw(p);
//   //           }

//   //       }

//   //   };

//   //   let setDimensions = function() {
//   //       // width = window.innerWidth;
//   //       // height = window.innerHeight;

//   //       canvas.width = window.innerWidth >= 420 ? 420 : width;
//   //       canvas.height = window.innerHeight >= 150 ? 150 : height;

//   //       width = canvas.width;
//   //       height = canvas.height;

//   //       canvas.style.position = 'absolute';
//   //       canvas.style.left = '0px';
//   //       canvas.style.top = '0px';
//   //       canvas.style.bottom = '0px';
//   //       canvas.style.right = '0px';
//   //       canvas.style.marginTop = window.innerHeight * .15 + 'px';
//   //   };

//   //   let setGradient = function(gradientStops) {
//   //       gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
//   //       for (let position in gradientStops) {
//   //           let color = gradientStops[position];
//   //           gradient.addColorStop(position, color);
//   //       }
//   //   };

//   //   return {
//   //     init: function(canvasID) {
//   //       canvas = document.getElementById(canvasID);
//   //       if (canvas === null || !canvas.getContext) {
//   //         return;
//   //       }
//   //       ctx = canvas.getContext('2d');
//   //       setDimensions();
//   //       this.event();

//   //       for (let i = 0; i < PARTICLE_NUM; i++) {
//   //         particles[i] = new Particle(canvas);
//   //       }

//   //       setInterval(loop, FRAME_RATE);
//   //     },

//   //     event: function() {
//   //       let end = false;
//   //       console.log(texts.length);
//   //       document.addEventListener('click', function(e) {
//   //         textNum++;
//   //         if (textNum >= texts.length) {
//   //           textNum--;
//   //           end = true;
//   //           return;
//   //         }
//   //         text = texts[textNum];
//   //         console.log(textNum);
//   //       }, false);
//   //     }
//   //   };
//   // })();
//   // };

// /////////////////////////////////
// }
