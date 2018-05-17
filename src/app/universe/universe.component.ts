import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'love-universe',
  templateUrl: './universe.component.html',
  styleUrls: ['./universe.component.scss']
})

export class UniverseComponent {
  hearts = [];

  constructor() {}

  createHeart(evt) {
    const heart: any = {
      id: Math.random(),
      left: evt.clientX - 40,
      top: evt.clientY - 40
    };
    this.hearts.push(heart);

    setTimeout(() => {
      this.hearts = this.hearts.filter((obj) => {
        return obj.id !== heart.id;
      });
    }, 2000);
  }
  //////////////////////////////////////////////
  // screenSize;
  // nightSky = [];

  // @HostListener('window:resize') onResize() {
  //   this.resize();
  // }

  // constructor(private elem: ElementRef) {}

  // ngOnInit() {
  //   this.resize();
  //   this.createStarField();
  // }

  // createStarField() {
  //   const stars = this.minMaxRandom(50, 100);
  //   for (let i = 0; i < stars; i++) {
  //     this.createStar();
  //   }
  // }

  // createStar() {
  //   const star: any = {
  //     height: this.minMaxRandom(1, this.screenSize),
  //     width: this.minMaxRandom(1, this.screenSize),
  //     type: this.getType(),
  //     speed: this.minMaxRandom(15, 30),
  //     radius: this.minMaxRandom(1, 4)
  //   };
  //   star.color = this.getColor(star.type);
  //   console.log(star);
  //   this.nightSky.push(star);
  // }

  // minMaxRandom(min?, max?) {
  //   if (min && max) {
  //     return Math.floor(Math.random() * (max - min)) + min;
  //   } else {
  //     return Math.floor(Math.random() * 11) + 10; // number between 10-20
  //   }
  // }

  // getType() {
  //   const number = Math.random();
  //   if (number > 0.9) {
  //     return 'comet';
  //   } else if (number > 0.8) {
  //     return 'giant';
  //   } else {
  //     return 'star';
  //   }
  // }

  // getColor(type) {
  //   if (type === 'comet') {
  //     return 'rgb(226,225,224)';
  //   } else if (type === 'giant') {
  //     return 'rgb(180,184,240)';
  //   } else {
  //     return 'rgb(226,225,142)';
  //   }
  // }

  // resize(evt?) {
  //   console.log('resize', evt);
  //   const clientHeight = this.elem.nativeElement.children[0].clientHeight;
  //   const clientWidth = this.elem.nativeElement.children[0].clientWidth;
  //   if (clientHeight > clientWidth) {
  //     this.screenSize = clientHeight * 1.5;
  //   } else {
  //     this.screenSize = clientWidth * 1.5;
  //   }
  // }
}
