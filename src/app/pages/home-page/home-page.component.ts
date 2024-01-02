import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import SplitType from 'split-type';
import { ApplicationGuardService } from 'src/app/services/guard/application-guard.service';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  scroll: any;
  constructor(private guardService: ApplicationGuardService,private router:Router){}
  ngOnInit(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
  });
    let splitter = new SplitType('.body_content_text--line');
    this.initAnimation();
    this.initAnimation2();
    gsap.to('.content-char',{
      scrollTrigger:{
        trigger: '.content-char',
        start: 'center center'
      },
      x: '-=100px',
      duration: 1,
      ease: "elastic"
    })
  }
  initAnimation2(){
    let TL = gsap.timeline({defaults:{duration: .5}});
    TL
      .to(".section_text",{
        yPercent:-350,
        delay: 1.01,
        ease: "power4.in"
      })
      .to(".section_text",{
        yPercent:-850,
        delay: 1.01,
        ease: "power4.in"
      })
      .to(".section_text",{
        yPercent:-1250,
        delay: 1.01,
        ease: "power4.in"
      })
      .to(".section_text",{
        yPercent:-1700,
        delay: 1.01,
        ease: "power4.in"
      })
  }
  initAnimation(): void {
    let TL = gsap.timeline({defaults:{duration: .5}});
    TL
      .to(".super-content",{
        overflow: "hidden",
      })
      .to(".translatter",{
        y:-46,
        delay: 1,
        ease: "power4.in"
      },"<")
      .to(".translatter",{
        y:-92,
        delay: 1,
        ease: "power4.in"
      })
      .to(".translatter",{
        y:-142,
        delay: 1,
        ease: "power4.in"
      })
      .to(".translatter",{
        y:-192,
        delay: 1,
        ease: "power4.in"
      })
      .to(".section_text,.section_counter",{
        opacity:0,
        duration: .5,
        ease: "power4.in"
      })
      .to(".preloader",{
        height:0,
        delay: .5,
        duration: 1,
        ease: "power4.out"
      })
      .from(".body_content_video",{
        clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        duration: 1,
        ease: "power4.in"
      },"<.1")
      .from(".navigation_left_logo",{
        clipPath:'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        y:20,
        delay: .1,
        duration: 1,
        ease: "power4.in"
      },"<.1")
      .fromTo(".char",{
        y:26,
      },{
        y:0,
        duration: 0.7,
        stagger: {amount: .7},
        delay: 1,
        ease: 'power4.out'
      },"<.2")
      .to(".submit_button",{
        x:'*',
        opacity: 1,
        delay: .2,
        duration: .5,
        ease: "power4.out"
      },"<")
  }
  verificationAuth(){
    if(!this.guardService.canActivate()){
      this.router.navigate(['login'])
    }
  }
}
