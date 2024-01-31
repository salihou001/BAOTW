import { Component, Input, ViewChild } from '@angular/core';
import { Card } from 'src/app/components/card/card.model';
import { Galery1 } from 'src/app/components/galerie1/galerie1.model';
import { Galery2 } from 'src/app/components/galerie2/galerie2.model';
import { Galery3 } from 'src/app/components/galerie3/galerie3.model';
import { gsap } from 'gsap';
import { Router } from '@angular/router';
import { Profil } from 'src/app/components/profil-message/profil.model';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  @Input()
  elementEntrant:any;
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
  listeProfil: Profil[] = [
    { id: 1,userName:'Ln_dev', url: 'testi-1.jpg', lastMessage: 'Yo ça dit quoi',date: '10 janv.'},
    { id: 2,userName:'abou_dev', url: 'Worker-2.jpg', lastMessage: 'je suis entrain de...',date: '5 janv.' },
    { id: 3,userName:'elvis_dev', url: 'Worker-3.jpg', lastMessage: 'La crypto la est morte',date: '1 janv.' },
    { id: 4,userName:'gamtchessi_dev', url: 'testi-3.jpg', lastMessage: '3D ou 2D parceque',date: '10 janv.' },
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
  ];
  toogleProfil = 1; 
  toggleEvent = 1;
  userSmsCurrent:any;
  ngOnInit(): void {
    let scroller = document.querySelector('#scroller') as HTMLDivElement;
    window.addEventListener('scroll', (e:any) => {
      let {clientHeight,scrollHeight,scrollTop}= scroller;
      let deltaY = e.deltaY;
      if(clientHeight === scrollHeight){
        // Ajout d'image ici ! 
        this.getImage();
      }
    });
  }
  closeReplyBox(){
    let block_reply = document.querySelector('#block_reply') as HTMLDivElement;
      gsap.to(block_reply, {
        display: 'none',
        duration: 0.1,
        ease: 'power4.out',
      });
  }
  resizeBoxSms(){
    const TL = gsap.timeline();
    let block_reply = document.querySelector('#block_reply') as HTMLDivElement;
    let svgUp = document.querySelector('#growBoxIcon') as SVGAElement;
    let svgDown = document.querySelector('#unGrowBoxIcon') as SVGAElement;
    if(this.toggleEvent === 1){
      TL
      .to(block_reply,{
        width: '30%',
        height: '60%',
        duration: .5,
        ease: 'power4.in'
      })
      .to(svgUp,{
        display: 'none',
        duration: .1
      },"<")
      .to(svgDown,{
        display: 'block',
        duration: .1
      },"<")
      this.toggleEvent++
    }else{
      if(this.toggleEvent === 2){
        TL
        .to(block_reply,{
          width: '25%',
          height: '40%',
          duration: .5,
          ease: 'power4.in'
        })
        .to(svgUp,{
          display: 'block',
          duration: .1
        },"<")
        .to(svgDown,{
          display: 'none',
          duration: .1
        },"<")
        this.toggleEvent--
      }
    }
    
  }
  ecouterEntrant(elementCourant:any){
    // this.userSmsCurrent = elementCourant;
    let userReplyImg = document.querySelector('.user_reply img') as HTMLImageElement;
    let userName = document.querySelector('.userName') as HTMLDivElement;
    userName.textContent = elementCourant ? elementCourant.userName: "";
    userReplyImg.src = "../../../assets/img/" + elementCourant.url;
    console.log(elementCourant);
  }
  // change emoji in input search
  changeEmoji(){
    let search_emoji = document.querySelector('#search_emoji') as HTMLInputElement;
    let emoji = document.querySelector('#emoji') as HTMLImageElement;
      emoji.src = "../../../assets/Gifs/show.gif";
  }
  // make bad emoji 
  iniEmoji(){
    let search_emoji = document.querySelector('#search_emoji') as HTMLInputElement;
    let emoji = document.querySelector('#emoji') as HTMLImageElement;
      emoji.src = "../../../assets/Gifs/emoji_1.gif";
  }
  // show section cible
  showCibler(){
    const TL = gsap.timeline();
    let cible = document.querySelector('#cible') as HTMLDivElement;
    let autre = document.querySelector('#autre') as HTMLDivElement;
    let sectionCible = document.querySelector('.section_cible') as HTMLDivElement;
    let sectionAutre = document.querySelector('.section_autre') as HTMLDivElement;
    TL
    .to(autre,{
      borderBottom: 'none',
      duration: .01
    })
    .to(cible,{
      borderBottom: '2px solid green',
      duration: .01
    },"<")
    .to(sectionAutre,{
      display: 'none',
      duration: .01
    },"<")
    .to(sectionCible,{
      display: 'block',
      duration: .1,
      delay: .1
    },"<")
  }
  // show section autres
  showAutre(){
    const TL = gsap.timeline();
    let cible = document.querySelector('#cible') as HTMLDivElement;
    let autre = document.querySelector('#autre') as HTMLDivElement;
    let sectionCible = document.querySelector('.section_cible') as HTMLDivElement;
    let sectionAutre = document.querySelector('.section_autre') as HTMLDivElement;
    TL
    .to(autre,{
      borderBottom: '2px solid green',
      duration: .01
    })
    .to(cible,{
      border: 'none',
      duration: .01
    },"<")
    .to(sectionAutre,{
      display: 'block',
      duration: .1,
      delay: .1
    },"<")
    .to(sectionCible,{
      display: 'none',
      duration: .01,
    },"<")
  }
  // show or hide block sms
  toogleProfilMessage(event: Event){
    event.stopPropagation();
    let section = document.querySelector('.section_2') as HTMLDivElement;
    let up = document.querySelector('.up') as HTMLDivElement;
    let dwon = document.querySelector('.dwon') as HTMLDivElement;
    if(this.toogleProfil === 1 ){
      section.style.display = 'block';
      up.style.display = 'none';
      dwon.style.display = 'block';
      this.toogleProfil++
    }else{
      if(this.toogleProfil === 2){
        section.style.display = 'none';
        up.style.display = 'block';
        dwon.style.display = 'none';
        this.toogleProfil--
      }
    }
  }
  // get image on scroll
  async getImage(){
    let res = await fetch("https://source.unsplash.com/random");
    let url = res.url;
    let card: Card= {id: this.listeUsers.length + 1,userName:'gamtchessi_dev', url: url, description: '3D' }
    this.listeUsers.push(card);
  }
  // make dark/light mode 
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
  // hide block profile
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
  }
  // show sectin profile went click on button profile
  showSide(){
    const TL = gsap.timeline();
    TL
    .to('.overlay_profile',{
      display:'block',
      duration: .01,
      ease: 'power4.out'
    })
    .to('.content_edit_profile',{
      x:0,
      duration: .8,
      delay: .1,
      ease: 'power4.out'
    },"<-.3")
  }
  onHome(){
    this.router.navigate(['home']);
  }
}
