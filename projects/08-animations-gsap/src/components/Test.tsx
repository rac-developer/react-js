import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Test = () => {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const aboutTitleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      if (heroTitleRef.current) {
        gsap.from(heroTitleRef.current, {
          opacity: 0,
          scale: .5,
          delay: 1,
          duration: 1,
        })}

        if (aboutTitleRef.current) {
          gsap.from(aboutTitleRef.current, {
            opacity: 0,
            y: 30,
            delay: .5,
            scrollTrigger: {
              trigger: aboutTitleRef.current,
              toggleActions: "restart none none none",
            }
        })}

        gsap.from(".about-subtitle", {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".about-subtitle",
            start: "top 80%", // Empieza cuando el 80% del primer elemento es visible,
            toggleActions: "restart none none none",
          }
        })

        gsap.from(".about-p", {
          y:100,
          opacity: 0,
          stagger: .5,
          delay: .5,
          duration: 0.5,
          scrollTrigger:{
            trigger: ".about-p",
            toggleActions: "restart none none none",
          }
        })

    });

    return () => ctx.revert();
  });

  return (
    <>
      <div className="m-0 p-0 box-border">

        {/* Hero */}
        <section className="items-center flex justify-center min-h-[100vh] p-1">
          {/* Hero title */}
            <h1 ref={heroTitleRef} className="text-3xl font-bold">Hola Mundo</h1>
        </section>

        {/* About */}
        <section className="min-h-[100vh] p-1">
          {/* About title */}
          <h2 ref={aboutTitleRef} className="font-bold text-2xl text-center">Sobre mi</h2>
          {/* About item */}
          <div className="grid grid-cols-3 gap-3">

            <div>
              {/* About subtitle */}
              <h3 className="truncate">
                <span className="inline-block about-subtitle">
                  Columna 1
                </span>
              </h3>
              <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged., </p>
            </div>

            <div>
              <h3 className="truncate">
                <span className="inline-block about-subtitle">
                  Columna 2
                </span>
              </h3>
              <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>

            <div>
              <h3 className="truncate">
                <span className="inline-block about-subtitle">
                  Columna 3
                </span>
              </h3>
              <p className='about-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          
          </div>
        </section>
      </div>
    </>
  )
}

export default Test
