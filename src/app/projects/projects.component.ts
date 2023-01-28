import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any=[
    { id:"Advisor", name:"School Advisor",link:"https://school-advisor.netlify.app",img:"../../assets/School Advisor.png",description:'I have designed and developed a responsive and user-friendly School Advisor that provides an easy way for students and parents to search, compare and review schools based on a variety of factors such as academic performance, teacher-student ratio, extracurricular activities, and more. The website features an easy-to-use interface, allowing users to filter schools by location, type, and other criteria, and provides detailed information on each school. I have used modern front-end technologies such as Angular, TS, HTML, CSS, JavaScript and Bootstrab  to create the structure, layout, and interactivity of the website. Additionally, I have used best practices and web standards to ensure optimal performance, accessibility, and compatibility across different devices and browsers. The website also includes a responsive design to provide a better viewing experience on different devices.'},
    { id:"Professror", name:"The Professror",link:"https://the-professor-unofficial.netlify.app",img:"../../assets/The Professror.png",description:'I have designed and developed a responsive and user-friendly The Professor website that provides an easy way for professionals and students to browse, enroll and track their progress in different professional training programs. The website features an easy-to-use interface, allowing users to filter courses by category, level of difficulty, and other criteria, and provides detailed information on each course, including the course syllabus, instructors, schedule, and cost. I have used modern front-end technologies such as Angular, TS, HTML, CSS, JavaScript and Bootstrab to create the structure, layout, and interactivity of the website. Additionally, I have used best practices and web standards to ensure optimal performance, accessibility, and compatibility across different devices and browsers.'},
    { id:"Elegance", name:"Elegance",link:"https://elegance-fashion.netlify.app/",img:"../../assets/Elegance.png",description:'I have designed and developed a responsive and user-friendly Elegnace website that offers a wide selection of fashion items. The website features an easy-to-use interface, allowing users to browse the collection, and place orders with just a few clicks. I have used modern front-end technologies such as Angular, TS, Bootstrap, HTML, CSS, JavaScript, and More to create the structure, layout, and interactivity of the website. Additionally, I have used best practices and web standards to ensure optimal performance, accessibility, and compatibility across different devices and browsers. The website also includes a responsive design to provide a better viewing experience on different devices.'},
  { id:"Yummy", name:"Yummy",link:"https://yummy-resturant.netlify.app",img:"../../assets/Yummy.png"  ,description:' I have designed and developed a clean and simple website Yummy, that is easy to navigate and provides a great user experience, The website showcases the restaurant\'s menu, location, hours of operation and contact information. It also includes features such as online ordering, The website is built using modern web technologies such as HTML, CSS, JavaScript, jQuery and bootstrap, which allows for a responsive design that adapts to all screen sizes. The website is designed to be easy to use and understand, with a minimalistic layout and clear typography, making it easy for visitors to find the information they need.'},
  { id:"Traveliooo", name:"Traveliooo",link:"https://travelioooo.netlify.app",img:"../../assets/Traveliooo.png" ,description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'}, 
  { id:"Gabooo", name:"Gabooo",link:"https://gabooo.netlify.app",img:"../../assets/Gabooo.png",description:' I have designed and developed a responsive and user-friendly website for a fashion brand Gabooo. The website features an easy-to-use interface that allows users to browse the latest collections, view product details, and make purchases. The website is designed with a modern and visually appealing layout that showcases the brand\'s aesthetic and style. I have used modern front-end technologies such as HTML, CSS, JavaScript, Bootstrap, and jQuery to create the structure, layout, and interactivity of the website. Additionally, I have used best practices and web standards to ensure optimal performance, accessibility, and compatibility across different devices and browsers. The website also includes a responsive design to provide a better viewing experience on different devices.'},
  { id:"Photogenic", name:"Photogenic",link:"https://photogenic-gallery.netlify.app",img:"../../assets/Photogenic.png",description:' I have designed and developed a responsive and user-friendly website for a professional photography team. The website features a visually stunning layout that showcases the team\'s portfolio of work, including a range of services such as weddings, portraits, commercial, and events photography, It also includes an about us section, contact form and integration with social media, it also has light/dark themes, I have used modern front-end technologies such as HTML, CSS, JavaScript, and jQuery to create the structure, layout, and interactivity of the website. Additionally, I have used best practices and web standards to ensure optimal performance, accessibility, and compatibility across different devices and browsers. The website also includes a responsive design to provide a better viewing experience on different devices.'},
  { id:"Burger", name:"Burger Land",link:"https://burgerland-resturant.netlify.app",img:"../../assets/Burger Land.png" ,description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'},
  { id:"GoToEgypt", name:"GoToEgypt",link:"https://goto-egy-pt.netlify.app",img:"../../assets/GoToEgypt.png",description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'},
  { id:"Code", name:"Code Crafters",link:"https://code-crafters.netlify.app",img:"../../assets/CodeCrafters.png",description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'},
  { id:"DevFolio", name:"DevFolio",link:"https://dev-fol-io.netlify.app",img:"../../assets/DevFolio.png",description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'},
  { id:"Interactive", name:"Interactive Agency",link:"https://interactive-agency.netlify.app",img:"../../assets/Interactive Agency.png",description:'I have designed and developed a one-page website that showcases my skills and experience. The website features a clean and modern layout that highlights my core competencies and expertise in web development, including technologies such as HTML, CSS, JavaScript, Bootstrap, jQuery and more, It also display skills to demonstrate my qualifications and readiness for the job. The website is optimized for and includes a clear and concise content that makes it easy for users to find what they are looking for and to get an idea of my capabilities as a front-end developer.'},
] 
hover:boolean=false
screen:number=0
imgHeight:any
selectedProject:any=[]
constructor(private viewportScroller: ViewportScroller) { }

  selectProject(index:number){
    this.selectedProject=this.projects[index]
    let x:any=document.querySelector('.bg')
    x.style.display="block"
  }
  getImgHeight(){
    this.hover=true ;
    let img:any=document.querySelector(`#${this.selectedProject.id}`) 
    let imgWrapper:any=document.querySelector('.selected-img-wrapper')
    this.imgHeight=img.clientHeight-imgWrapper.clientHeight
    this.imgHeight=this.imgHeight+"px"
  }
  close(){
    let x:any=document.querySelector('.bg')
    x.style.display="none"
  }

  doAnimation(element:string,px:number,animationClass:string,delay?:number) {
    let x:any =document.querySelector(element)
    if(window.scrollY > px){
      x.style.visibility = "visible";
    x.classList.add('animate__animated' , animationClass , 'animate__delay-'+delay+'s');
    }
  }

  public scroll(elementId: string): void { setTimeout(()=>{
    this.viewportScroller.scrollToAnchor(elementId);},200)
    
}
  
  
  
    ngOnInit(): void {
      this.screen=window.screen.width
      
      window.onscroll = ()=> {
         this.doAnimation(".it",2042,'animate__fadeInUp',.5) 
         this.doAnimation(".is",2122,'animate__fadeInUp',.5) 
         this.doAnimation(".ip",2162,'animate__fadeInUp',.5) 
         this.doAnimation(".ib",2200,'animate__bounceIn',.5) 
      }
    }

}
