import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { flavorLists } from "../constants/flavorLists";

gsap.registerPlugin(ScrollTrigger);

const FlavourSlider = () => {
  const sliderRef = useRef();

  useGSAP(() => {
    ScrollTrigger: matchMedia({
      "(min-width:1025px)": () => {
        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollAmount + 150}px`,
            scrub: true,
            pin: true,
          },
        });

        tl.to(".flavor-section", {
          x: `-${scrollAmount + 1500}px`,
          ease: "power1.inOut",
        });
      },

      "(max-width:1024px)": () => {
        gsap.set(".flavor-section", { clearProps: "all" });
      },
    });

    const titleT1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleT1
      .to(".first-text-split", {
        xPercent: -22,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}>
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drink"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavourSlider;
