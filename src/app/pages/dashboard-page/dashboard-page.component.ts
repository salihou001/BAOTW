import { Component, ViewChild } from '@angular/core';
import { Card } from 'src/app/components/card/card.model';
import { Galery1 } from 'src/app/components/galerie1/galerie1.model';
import { Galery2 } from 'src/app/components/galerie2/galerie2.model';
import { Galery3 } from 'src/app/components/galerie3/galerie3.model';
import { gsap } from 'gsap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  constructor(private router:Router){
  }
  @ViewChild('themeToggle', { static: true }) themeToggle: any;
  @ViewChild('toggleIcon', { static: true }) toggleIcon: any;
  @ViewChild('container', { static: true }) container: any;
  @ViewChild('contain', { static: true }) content: any;
  toggle!: boolean;
  isOpen=false;
  listeGaleri1: Galery1[] = [
    { id: 1, url: 'comment-1.png', title: 'Ln_dev' },
    { id: 2, url: 'comment-2.png', title: 'abou_dev' },
    { id: 3, url: 'comment-3.png', title: 'elvis_dev' },
    { id: 4, url: 'comment-4.png', title: 'gamtchessi_dev'},
  ];
  listeGaleri2: Galery2[] = [
    { id: 1,userName:'Ln_dev', url: 'testi-1.jpg', description: 'web',action:'Comment' },
    { id: 2,userName:'abou_dev', url: 'Worker-2.jpg', description: 'designer',action:'Follow' },
    { id: 3,userName:'elvis_dev', url: 'Worker-3.jpg', description: 'crypto',action:'Views' },
    { id: 4,userName:'gamtchessi_dev', url: 'testi-3.jpg', description: '3D',action:'Like' },
    { id: 4,userName:'gloria_dev', url: 'testi-2.jpg', description: 'devops',action:'Like' },
  ];
  listeGaleri3: Galery3[] = [
    { id: 1,userName:'Ln_dev', url: 'testi-1.jpg', description: 'web'},
    { id: 2,userName:'abou_dev', url: 'Worker-2.jpg', description: 'designer' },
    { id: 3,userName:'elvis_dev', url: 'Worker-3.jpg', description: 'crypto' },
    { id: 4,userName:'gamtchessi_dev', url: 'testi-3.jpg', description: '3D' },
  ];
  listeUsers:Card[]= 
  [
    { id: 3,userName:'elvis_dev', url: 'pexels-mario-wallner-15085813.jpg', description: 'Beautifull Day for You'},
    { id: 1,userName:'Ln_dev', url: 'testi-1.jpg', description: 'web'},
    { id: 2,userName:'abou_dev', url: 'Worker-2.jpg', description: 'designer' },
    { id: 3,userName:'elvis_dev', url: 'Worker-3.jpg', description: 'crypto' },
    { id: 4,userName:'gamtchessi_dev', url: 'testi-3.jpg', description: '3D' },
    { id: 4,userName:'gamtchessi_dev', url: 'pexels-yusuf-kaya-17812871.jpg', description: '3D' },
    { id: 4,userName:'gamtchessi_dev', url: 'pexels-mehmet-ağırman-15277549.jpg', description: '3D' },
    { id: 4,userName:'gamtchessi_dev', url: 'pexels-andrew-neel-3143922.jpg', description: '3D' },
    { id: 4,userName:'gamtchessi_dev', url: 'pexels-adrien-olichon-3646206.jpg', description: '3D' },
  ]
  ngOnInit(): void {
    let scroller = document.querySelector('#scroller') as HTMLDivElement;
    window.addEventListener('scroll', () => {
      let {clientHeight,scrollHeight,scrollTop}= scroller;
      // console.log(clientHeight,scrollHeight,scrollTop);
      if(clientHeight === scrollHeight){
        // Ajout d'image ici ! 
        this.getImage();
      }
    });
  }
  async getImage(){
    let res = await fetch("https://source.unsplash.com/random");
    let url = res.url;
    console.log(url);
    let card: Card= {id: this.listeUsers.length + 1,userName:'gamtchessi_dev', url: url, description: '3D' }
    this.listeUsers.push(card);
  }

  toggleMode() {
    const TL = gsap.timeline();
    let element = gsap.utils.toArray('path');
    this.toggle = this.toggle ? false : true;
    if (this.toggle) { 
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
      TL.to(this.toggleIcon.nativeElement, {
        delay: 0.3,
        rotate: 360,
        duration: 0.8,
        ease: 'power4.out',
      })
        .to(
          this.container.nativeElement,
          {
            fill: '#fff',
            duration: 0.5,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          this.content.nativeElement,
          {
            fill: '#8e8e8e',
            duration: 0.5,
            ease: 'power2.in',
          },
          '<.1'
        );
      element.forEach((element: any) => {
        gsap.to(element, {
          fill: '#fff',
          duration: 0.3,
          ease: 'power2.in',
        });
      });
      this.toggle = true;
    } else {
      console.log('else part')
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
      TL.to(this.toggleIcon.nativeElement, {
        delay: 0.3,
        rotate: -360,
        duration: 0.8,
        ease: 'power4.out',
      })
        .to(
          this.container.nativeElement,
          {
            fill: '#000',
            duration: 0.5,
            ease: 'power2.in',
          },
          '<'
        )
        .to(
          this.content.nativeElement,
          {
            fill: '#fff',
            duration: 0.5,
            ease: 'power2.in',
          },
          '<.1'
        );
      element.forEach((element: any) => {
        gsap.to(element, {
          fill: 'initial',
          duration: 0.3,
          ease: 'power2.in',
        });
      });
      this.toggle = false;
    }
  }
  hideSide(){
    const TL = gsap.timeline();
    TL
    .to('.content_edit_profile',{
      x:'*',
      duration: .5,
      ease: 'power4.out'
    })
    .to('.overlay_profile',{
      display:'none', 
      duration: .3,
      ease: 'power4.out'
    },"<")
    // .to('body',{
    //   overflowY:'scroll',
    //   duration: .3,
    //   ease: 'power4.out'
    // },"<.3")
  }
  showSide(){
    const TL = gsap.timeline();
    TL
    .to('.overlay_profile',{
      display:'block',
      duration: .1,
      ease: 'power4.out'
    })
    .to('.content_edit_profile',{
      x:0,
      duration: .8,
      delay: .1,
      ease: 'power4.out'
    },"<.3")
    // .to('body',{
    //   overflow:'hidden',
    //   duration: .3,
    //   ease: 'power4.out'
    // },"<")
  }
  // cette methode permet d'afficher l'onglet home
  onHome(){
    this.router.navigate(['home']);
  }
}
