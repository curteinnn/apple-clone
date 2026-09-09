import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
 
 export function productAnimation (){
    gsap.fromTo(
      ".animate-home",
      {
        y: 200,
        opacity: -2,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      },
    );

    gsap.fromTo(
      ".iphone-3d",
      {
        y: -2000,
      },
      {
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".iphone-section",
          start: "top 110%",
          once: true,
        },
      },
    );

    gsap.fromTo(
      ".iphone-card",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".iphone-card-section",
          start: "top 80%",
          once: true,
        },
      },
    );

}

// -==========================================================
export function macAnimation(){
 gsap.from(".mac-card", {
      duration: 2,
      ease: "power.outIn",
    });

    gsap.from(".title", {
      opacity: 0,
      duration: 1,
      delay: 1,
      x: 200,

      ease: "power3.out",
    });

    gsap.from(".card-mac",{
      y: 200,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".card-mac-section",
        start: "top 50%",
        once: true,
      }});
      }
