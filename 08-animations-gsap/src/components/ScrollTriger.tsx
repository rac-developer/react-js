import { useLayoutEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ScrollTrigerExample = () => {

  const caja1 = useRef<HTMLDivElement>(null);
  const caja2 = useRef<HTMLDivElement>(null);
  const caja3 = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    
    const ctx = gsap.context(() => {
      // if (caja1.current && caja2.current) {
      //   gsap.to(caja1.current, {
      //     x: 250,
      //     duration: 3,
      //     scrollTrigger: {
      //       trigger: caja2.current, // ✅ El elemento que dispara la animación
      //       start: 100,     // Cuándo empieza la animación
      //       markers: true,           // Marcadores para depurar (muy útiles)
      //     },
      //   });
      // }

      if (caja3.current) {
        gsap.to(caja3.current, {
          x: 250,
          scrollTrigger: {
            trigger: caja3.current, // ✅ El elemento que dispara la animación
            start: "top 50%", // Esto quiere decir que a los 100px de ese objecto empieza la animacion
            // start: "top center" -> Se dispara cuando la parte superior llega a la mitad de la pagina
            // start: "bottom center" -> Se dispara cuando la parte inferior llega a la mitad de la pagina
            // start: "top top" -> Se dispara cuando caja llega al final de arriba de la pagina
            // start: "center center" -> Cuando el scroller-start toca a start
            //start: "top 30%" -> Tambien le puede decir que al 30% de arriba dispare la animacion


            end: "bottom 40%", // Esto nos sirve para agregar otros propiedas como por ejemplo quitar una clase al terminar la animacion
            
            toggleClass: "bg-red-900", //Clase cuando se dispara la animacion

            toggleActions: "restart none none none",
                        /*  onEnter OnLeave onEnterBack onLeaveBack
                            onEnter: Es cuando empieza
                            onLeave: Es cuando termina
                            onEnterBack: volvemos a entrar
                            onLeaveBack: volvemos a salir 
                        */

                        /*  restart: es para que reinicie
                            pause: es para que la pause
                            resume: seguir donde estaba
                            complete: es que termina la animacion
                        */

            scrub:true, //Con esto definimos que la animacion va a durar desde que empieza hasta que termina, no debemos poner la propiedad duration
            // scrub: 1, //Es una animacion, le da mas suavidad
            markers:true // -> Esto me dice en que parte del scroll empieza la animacion, esto se desactiva cuando se suba la pagina a produccion
          }
        })
      }
      
    });
    
    return () => ctx.revert();
  
  }, []);
  return (
    <>
      <div className="p-0 m-0 box-border">
        <div className="bg-red-900 min-h-screen"></div>
        <div className="bg-blue-950 min-h-screen">
            <div ref={caja3} className="bg-blue-800 mb-36 h-[150px] w-[150px]"></div>
            <div ref={caja1} className="bg-amber-700 h-[150px] w-[150px]"></div>
            <div ref={caja2} className="bg-black mt-36 h-[150px] w-[150px] "></div>
        </div>
      </div>
    </>
  )
}

export default ScrollTrigerExample