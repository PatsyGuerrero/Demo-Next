"use client"
import React, { useRef, useState, useEffect } from "react";
import "./productCard.scss"
// import parse from "html-react-parser"
import Titles from "./titles"
import Paragraph from "./paragraph"
// import Item from "../../ui-kit/item"
// import LinkItem from "../../ui-kit/link"
import Image from "../components/image"
// import { InViewObserver } from "../../../hooks/useInView"
// import ButtonPrimary from "../../../components/buttons/buttonPrimary"
import { useImageHook } from "../hooks/useImageHook"

const isSafari = () => {
  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf("safari") > -1 && ua.indexOf("chrome") < 0;
};

const mainVideo =
  "https://videos.ctfassets.net/jhuukrkt1w7q/3najyQSTg2wIUsGxVm7L4z/7c931a401f77953a24cc701eb57b2830/metas.mp4";


const ProductCard = ({ data }) => {
  switch (true) {
    case data?.model === "first":
      return <ProductCardFirst data={data} />
      break

    default:
      return ''
  }
}

const ProductCardLayout = ({ children }) => {
  return (
    <>
      <section className="cardContentLayout">
        <div className="cardContentLayout__container">{children}</div>
      </section>
    </>
  )
}

const ProductCardFirst = ({ data }) => {
  const imageData = useImageHook({ data });
  const videoParentRef = useRef();
  const [shouldUseImage, setShouldUseImage] = useState(false);

  useEffect(() => {
    // check if user agent is safari and we have the ref to the container <div />
    if (isSafari() && videoParentRef.current) {
      // obtain reference to the video element
      const player = videoParentRef.current.children[0];

      // if the reference to video player has been obtained
      if (player) {
        // set the video attributes using javascript as per the
        // webkit Policy
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute("muted", ""); // leave no stones unturned :)
        player.autoplay = true;

        // Let's wait for an event loop tick and be async.
        setTimeout(() => {
          // player.play() might return a promise but it's not guaranteed crossbrowser.
          const promise = player.play();
          // let's play safe to ensure that if we do have a promise
          if (promise.then) {
            promise
              .then(() => {})
              .catch(() => {
                // if promise fails, hide the video and fallback to <img> tag
                videoParentRef.current.style.display = "none";
                setShouldUseImage(true);
              });
          }
        }, 0);
      }
    }
  }, []);

  console.log(imageData, 'imageData')
  const InformationSection = ({ data }) => {
    return (
      <div id="info" className="cardContentPrimary__section">
   
        <Titles data={data.title} style={"h2"} />
        <Paragraph data={data.paragraph} style="primary"/>
        {/* {data?.button && <ButtonPrimary data={data?.button} />} */}
      </div>
    )
  }

  const ImageSection = ({ data}) => {
    // return (
    //   <div id="image" className="cardContentPrimary__section">
    //     <video width="576" height="300" autoplay="autoplay" playsinline aria-hidden="true" muted>
    //       <source src="https://videos.ctfassets.net/jhuukrkt1w7q/3najyQSTg2wIUsGxVm7L4z/7c931a401f77953a24cc701eb57b2830/metas.mp4"/>
    //         Your browser does not support the video tag.
    //     </video>
    //       {/* { <Image data={data} className="cardContentPrimary__image" /> } */}
    //   </div>
    // )

    return shouldUseImage ? (
      <img src={mainVideo} alt="Muted Video" />
    ) : (
      <div
        ref={videoParentRef}
        dangerouslySetInnerHTML={{
          __html: `
          <video
            width="576" 
            height="300"
            loop
            muted
            autoplay
            playsinline
            preload="metadata"
          >
          <source src="${mainVideo}" type="video/mp4" />
          </video>`
        }}
      />
    );
  }

  if (data.left) {
    return (
      <ProductCardLayout>
        <InformationSection data={data} />
        <ImageSection data={imageData} />
      </ProductCardLayout>
    )
  }
  return (
    <>
      <ProductCardLayout>
        <ImageSection data={imageData}/>
        <InformationSection data={data} />
      </ProductCardLayout>
    </>
  )
}

const style = {
  display: "flex",
  flexDirection: "column",
  gap: "24px",
}

export default ProductCard

