import gsap from "gsap";

export function componentsAnimation(){

    gsap.fromTo(
      ".navbar",
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
      },
    );
  
}