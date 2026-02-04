
import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const TextAnimation = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {

    if (!h1Ref.current) return;

    const text = new SplitType(h1Ref.current, { types: 'words,chars' });

    const ctx = gsap.context(() => {
     
      text.chars?.forEach((char, index) => {

      const CharsTl = gsap.timeline();
  
      gsap.from(char, {
          y: gsap.utils.random(-150,150),
          x: gsap.utils.random(-300,300),
          rotate: gsap.utils.random(-360,360),
          scale: gsap.utils.random(0,2),
          opacity: 0,
          duration: .75,
          ease: 'back.out',
          delay: index * 0.01,
      })
    
      CharsTl.from(char, {
          color: `rgb(${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)})`,
          duration: 2,
      // Para que se ejecute antes de lo que deberia
      }, '-=.25')
    
      //Animar el mouse cuando este por encima (hover)
    
      const charOriginalColor = window.getComputedStyle(char).color;
    
      char.addEventListener("mouseenter", charsHover);
   
      function charsHover () {
        gsap.timeline()
        .to(char, {
          y: gsap.utils.random(-50,50),
          x: gsap.utils.random(-50,50),
          rotate: gsap.utils.random(-90,90),
          scale: gsap.utils.random(0.5,1.5),
          duration:0.5,
          ease: "back.out",
          color: `rgb(${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)}, ${gsap.utils.random(0,255)})`,
          onStart: () => {
              char.removeEventListener("mouseenter", charsHover);
          }
        })
        .to(char, {
          y:0,
          x:0,
          rotate:0,
          scale:1,
          delay:1,
          duration:.5,
          color: charOriginalColor,
          onComplete: () => {
              setTimeout(() => {
                  char.addEventListener("mouseenter", charsHover);
              }, 100)
          }
        })
      }
    })
  });

  return () => ctx.revert();

  }, []);


  return (
    <>
      <h1 ref={h1Ref} className='text-3xl font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
    </>
  )
}

export default TextAnimation;
