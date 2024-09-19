"use client"
import React, { useState, useEffect } from "react"
import "./bannerApp.scss"
import { InViewObserver } from "../hooks/useInView"
import ButtonPrimary from "./buttonPrimary"
import Paragraph from "./paragraph"

const BannerApp = () => {

    let button = {
        model: "container_button_cleo primary",
        linkPage: "https://www.bancoguayaquil.com/canales-digitales/app/",
        target:"_blank",
        label:"CONOCE MÁS SOBRE LA APP"

    }

  return (
    <section className="bannerApp">
      <InViewObserver>
        <div className="bannerApp__container">
          <div className="bannerApp__section">
            <div className="bannerApp__header">
              <div className="bannerApp__rating">
                <img
                  src="https://www.bancoguayaquil.com/documents/images/icons/startImage.png"
                  alt="Rating Starts"
                  height={25}
                  width={128}
                  loading="lazy"
                />
                <p className="bannerApp__ratingText">App: 4.8 Rating de 91.700 Reviews</p>
              </div>
              <div className="bannerApp__description">
                <div className="bannerApp__textDescription">
               
                    <Paragraph
                      data="Descarga la App y regístrate en pocos minutos sin moverte de casa"
                      style={"tertiary"}
                    />
                </div>
              </div>

              <div className="bannerApp__cta">
                <ButtonPrimary data={button} />
              </div>
            </div>
          </div>
          <div className="bannerApp__section">
            {
              <img
                src="https://www.bancoguayaquil.com/static/5634f68692bfe7190d128894443045d6/6dd7e/app-image.webp"
                width={398}
                height={450}
                alt="Descarga la App y regístrate en pocos minutos sin moverte de casa"
                loading="lazy"
              />
            }
            <CardContainer /> 
          </div>
        </div>
      </InViewObserver>
    </section>
  )
}

const CardContainer = () => {
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard(prevCard => (prevCard === 3 ? 0 : prevCard + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const cards = [
    {
      id: 0,
      component: <Card />,
    },
    {
      id: 1,
      component: <CardTwo />,
    },
    {
      id: 2,
      component: <CardThree />,
    },
    {
      id: 3,
      component: <CardFour />,
    },
  ]
  return (
    <>
      {cards.map((card, index) => (
        <div
          key={card.id}
          style={{ display: index === currentCard ? "block" : "none" }}
        >
          {card.component}
        </div>
      ))}
    </>
  )
}

const Card = () => {
  return (
    <div className="cardApp1__container animate-slide">
      <span className="cardApp1__heroText">Score Crediticio</span>
      <ScoreIcon />
      <span className="cardApp1__text">Muy Bueno</span>
    </div>
  )
}

const CardTwo = () => {
  return (
    <div
      className="cardApp__container animate-slide"
      style={{ transitionDelay: "3s" }}
    >
      <span className="cardApp__heroText">Ahorro Meta</span>
      <span className="cardApp__fraccion">3/12</span>
      <div className="cardApp__range">
        <div className="cardApp__viewRange" />
      </div>
      <span className="cardApp__text">$500</span>
    </div>
  )
}

const CardThree = () => {
  return (
    <div
      className="cardApp3__container animate-slide"
      style={{ transitionDelay: "6s" }}
    >
      <span className="cardApp3__heroText">Tus Tarjetas</span>
      <img
        src="https://www.bancoguayaquil.com/documents/images/icons/amex.svg"
        alt="Amex"
        loading="lazy"
        title="American Express Banco Guayaquil"
      />
    </div>
  )
}

const CardFour = () => {
  return (
    <>
      <div
        className="cardApp4__container animate-slide"
        style={{ transitionDelay: "3s" }}
      >
        <div>
          <span className="cardApp4__heroText">Transferencia</span>
          <div className="cardApp4__containerNumber">
            <ArrowIcon />
            <span className="cardApp4__number">$50</span>
          </div>
        </div>
        <span className="cardApp4__span">-$50 ($100)</span>
      </div>
    </>
  )
}

const ArrowIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ArrowIcon"
  >
    <rect width="32" height="32" rx="16" fill="#161616" />
    <path
      d="M14.87 22.6V13.072L11.078 17.272L9.54203 15.928L15.95 9.328H16.046L22.43 15.928L20.918 17.272L17.102 13.072V22.6H14.87Z"
      fill="#CFFE56"
    />
  </svg>
)

const ScoreIcon = () => (
  <svg
    width="114"
    height="79"
    viewBox="0 0 114 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ScoreIcon"
  >
    <path
      d="M106.16 77.3371C107.598 77.9127 109.261 77.2214 109.79 75.7321C111.909 69.7684 112.983 63.5158 112.983 57.1173C112.983 26.3997 87.9564 1.41033 57.1965 1.41033C26.4366 1.41033 1.40984 26.3997 1.40984 57.1173C1.40984 63.512 2.48034 69.7647 4.60255 75.7322C5.13222 77.2216 6.79491 77.9126 8.23305 77.337C9.68533 76.7556 10.364 75.1212 9.85703 73.6764C7.99441 68.3681 7.04919 62.8072 7.04919 57.1173C7.04919 29.5066 29.5438 7.04324 57.1965 7.04324C84.8493 7.04324 107.344 29.5066 107.344 57.1173C107.344 62.8075 106.402 68.3683 104.537 73.6763C104.03 75.1208 104.708 76.7557 106.16 77.3371Z"
      fill="#E5E6EA"
      stroke="#FEFEFE"
      strokeWidth="1.17935"
    />
    <path
      d="M4.60254 75.7322C5.13222 77.2216 6.79492 77.9126 8.23305 77.337C9.68533 76.7556 10.364 75.1212 9.85703 73.6764C7.99442 68.3681 7.04919 62.8072 7.04919 57.1173C7.04919 29.5066 29.5438 7.04324 57.1965 7.04324C72.1384 7.04324 85.9953 13.5121 95.5601 24.8665C96.5446 26.0352 98.2933 26.2814 99.5305 25.3299C100.761 24.3837 101.009 22.5967 99.9941 21.383C89.355 8.66241 73.8803 1.41033 57.1965 1.41033C26.4366 1.41033 1.40984 26.3997 1.40984 57.1173C1.40984 63.512 2.48034 69.7647 4.60254 75.7322Z"
      fill="#24A148"
      stroke="#24A148"
      strokeWidth="1.17935"
    />
    <path
      d="M27.8964 65L37.8522 45.2995V45.1354H26.2547V40.9842H43.1057V45.194L33.1382 65H27.8964ZM55.0344 65.3283C53.3771 65.3283 51.8995 65.0235 50.6018 64.4137C49.3119 63.8039 48.2878 62.9635 47.5295 61.8925C46.7712 60.8215 46.3764 59.5941 46.3451 58.2104H51.2702C51.3249 59.1407 51.7158 59.8951 52.4429 60.4736C53.1699 61.0521 54.0338 61.3413 55.0344 61.3413C55.8318 61.3413 56.5354 61.1654 57.1452 60.8137C57.7628 60.454 58.2436 59.9576 58.5875 59.3244C58.9393 58.6833 59.1152 57.9485 59.1152 57.1198C59.1152 56.2755 58.9354 55.5328 58.5758 54.8918C58.224 54.2507 57.7354 53.7504 57.11 53.3908C56.4846 53.0312 55.7693 52.8475 54.9641 52.8397C54.2605 52.8397 53.5764 52.9843 52.9119 53.2735C52.2552 53.5628 51.7432 53.9576 51.3758 54.4579L46.8611 53.6488L47.9985 40.9842H62.6801V45.1354H52.1849L51.5634 51.151H51.7041C52.1263 50.5569 52.7634 50.0644 53.6155 49.6735C54.4676 49.2826 55.4214 49.0872 56.4768 49.0872C57.923 49.0872 59.2129 49.4273 60.3465 50.1074C61.4801 50.7875 62.3752 51.7217 63.0319 52.91C63.6885 54.0905 64.013 55.4507 64.0052 56.9908C64.013 58.6091 63.6377 60.0475 62.8794 61.3062C62.1289 62.557 61.0775 63.542 59.725 64.2612C58.3804 64.9726 56.8168 65.3283 55.0344 65.3283ZM76.9629 65.5277C74.946 65.5199 73.2104 65.0235 71.7564 64.0384C70.3101 63.0534 69.1961 61.6267 68.4143 59.7583C67.6404 57.8899 67.2573 55.6423 67.2651 53.0155C67.2651 50.3966 67.6521 48.1647 68.426 46.3197C69.2078 44.4748 70.3218 43.0715 71.7681 42.1099C73.2222 41.1405 74.9538 40.6559 76.9629 40.6559C78.972 40.6559 80.6997 41.1405 82.146 42.1099C83.6001 43.0793 84.718 44.4865 85.4998 46.3315C86.2815 48.1686 86.6685 50.3966 86.6607 53.0155C86.6607 55.6501 86.2698 57.9016 85.488 59.77C84.7141 61.6384 83.604 63.0651 82.1577 64.0502C80.7115 65.0352 78.9799 65.5277 76.9629 65.5277ZM76.9629 61.3179C78.3388 61.3179 79.4372 60.626 80.258 59.2423C81.0789 57.8586 81.4854 55.783 81.4776 53.0155C81.4776 51.194 81.29 49.6774 80.9147 48.4657C80.5473 47.2539 80.0235 46.3432 79.3434 45.7334C78.6711 45.1236 77.8776 44.8187 76.9629 44.8187C75.5948 44.8187 74.5003 45.5028 73.6795 46.8709C72.8586 48.239 72.4443 50.2872 72.4365 53.0155C72.4365 54.8605 72.6202 56.4006 72.9876 57.6358C73.3629 58.8631 73.8906 59.7856 74.5707 60.4032C75.2508 61.013 76.0482 61.3179 76.9629 61.3179Z"
      fill="#161616"
    />
  </svg>
)

const ArrowRigthIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.83431 0.642518C6.14673 0.330098 6.65327 0.330098 6.96569 0.642518L11.7657 5.44252C12.0781 5.75494 12.0781 6.26147 11.7657 6.57389L6.96569 11.3739C6.65327 11.6863 6.14673 11.6863 5.83431 11.3739C5.5219 11.0615 5.5219 10.5549 5.83431 10.2425L9.26863 6.8082H0.8C0.358172 6.8082 0 6.45003 0 6.0082C0 5.56637 0.358172 5.2082 0.8 5.2082H9.26863L5.83431 1.77389C5.5219 1.46147 5.5219 0.954937 5.83431 0.642518Z"
      fill="#fff"
    />
  </svg>
)

export default BannerApp

