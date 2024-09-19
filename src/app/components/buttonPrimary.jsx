import React from "react"
import "./buttonPrimary.scss"

const ButtonPrimary = ({ data }) => {


  const handleClick = (e) => {
    e.preventDefault(); // Evita la navegación si es un enlace
    modal.getModal(true);  // Cambia el estado del modal a true
  };

  return (
    <>
      <a
        className={data?.model}
        href={data?.linkPage}
        target={data?.target ? "_blank" : "_self"}
      >
        {data?.label}
        <span className="item-icon">
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="color-svg"
          >
            <path
              d="M8.33431 2.63422C8.64673 2.3218 9.15327 2.3218 9.46569 2.63422L14.2657 7.43422C14.5781 7.74664 14.5781 8.25317 14.2657 8.56559L9.46569 13.3656C9.15327 13.678 8.64673 13.678 8.33431 13.3656C8.0219 13.0532 8.0219 12.5466 8.33431 12.2342L11.7686 8.7999H3.3C2.85817 8.7999 2.5 8.44173 2.5 7.9999C2.5 7.55807 2.85817 7.1999 3.3 7.1999H11.7686L8.33431 3.76559C8.0219 3.45317 8.0219 2.94664 8.33431 2.63422Z"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </a>
    </>
  )
}

export default ButtonPrimary

export const ArrowForward = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33431 2.63422C8.64673 2.3218 9.15327 2.3218 9.46569 2.63422L14.2657 7.43422C14.5781 7.74664 14.5781 8.25317 14.2657 8.56559L9.46569 13.3656C9.15327 13.678 8.64673 13.678 8.33431 13.3656C8.0219 13.0532 8.0219 12.5466 8.33431 12.2342L11.7686 8.7999H3.3C2.85817 8.7999 2.5 8.44173 2.5 7.9999C2.5 7.55807 2.85817 7.1999 3.3 7.1999H11.7686L8.33431 3.76559C8.0219 3.45317 8.0219 2.94664 8.33431 2.63422Z"
      fill="white"
    />
  </svg>
)


