"use client"
import React, { useEffect, useRef } from "react"
import "./useInView.scss"


export const InViewObserver = ({ children, threshold }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        threshold: 0.5 || threshold,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div className="animate-opacity">{children}</div>
    </div>
  )
}

/**
 * Componente de React para agregar la animacion de BannerApp
 * @author Kevin Hernandez <ii-khernandez@bancogauayquil.com>
 * @param {HTML} children - Se pasa el props de children para envolver la animacion de BannerApp 
 * @returns HTML
 */
export const AnimationOberverSlide = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            setTimeout(() => {
              entry.target.classList.add("animate-exit")
            }, 4000)
          } else {
            entry.target.classList.remove("in-view")
            entry.target.classList.remove("animate-exit")
          }
        })
      },
      {
        threshold: 0.5,
      }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={ref}>
        <div className="animate-slide">{children}</div>
      </div>
    </>
  )
}
