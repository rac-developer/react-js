import { useLayoutEffect, useRef } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap";

const GsapFrom = () => {
  const h1Ref = useRef(null);
  const headerRef = useRef(null);
  const h2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      if (!headerRef.current) return;
      gsap.from(headerRef.current, {
        delay: 0.2, // Empezar después de 0.2s
        opacity: 0,
        y: -30,
        duration: 0.5,
        stagger: 0.2 // La magia: aplica la animación a cada hijo con 0.2s de diferencia
      });

      if (h1Ref.current) {
        gsap.from(h1Ref.current, {
          // Animación consistente con los logos
          delay: 0.8, // Retraso para que empiece cuando los logos casi han terminado
          opacity: 0,
          // Viene desde abajo hacia arriba
          y: 30, // Animar desde abajo para un efecto diferente
          duration: 0.8,
          ease: 'power3.out' // Suaviza el final de la animación
        })
      }

      if (h2Ref.current) {
        gsap.from(h2Ref.current, {
          // Animación para el segundo título, secuenciada después del primero
          color: "red",
          delay: 1.0, // Un poco después del primer título
          opacity: 0,
          // Viene desde los verticales
          x: -500,
          duration: 0.8,
          rotate: 360,
          ease: 'power3.out'
        })
      }
    });

    // La función de limpieza que se ejecutará cuando el componente se desmonte
    return () => ctx.revert();

  }, []); // El array vacío asegura que el efecto solo se ejecute al montar

  return (
    <>
      <header className='flex justify-center items-center gap-5' ref={headerRef}>
        <a>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </header>
      <h1 ref={h1Ref} className='text-3xl font-bold text-white'>Animacion 1</h1>
      <h2 ref={h2Ref} className='text-3xl font-bold text-white'>Animacion 2</h2>
      
    </>
  )
}

export default GsapFrom