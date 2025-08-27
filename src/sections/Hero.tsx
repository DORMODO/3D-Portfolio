import { type Word, words } from "@/constants";
import Button from "@/components/Button";
// import HeroExperience from "@/components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import React from "react";

const HeroExperience = React.lazy(
  () => import("@/components/HeroModels/HeroExperience"),
);

export const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.3,
        duration: 1,
        ease: "power2.inOut",
      },
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" />
      </div>
      <div className="hero-layout">
        {/*Left: Hero Content */}
        <header className="flex w-screen flex-col justify-center px-5 md:w-full md:px-20">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word: Word, index: number) => (
                      <span
                        key={`${word.text}${index}`}
                        className="flex items-center gap-1 pb-2 md:gap-3"
                      >
                        <img
                          className="bg-white-50 size-7 rounded-full p-1 md:size-10 md:p-2 xl:size-12"
                          src={word.imgPath}
                          alt={word.text}
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 pointer-events-none relative z-10 md:text-xl">
              Hi, I'm Youssef, a Frontend Developer turning <br /> concepts into
              captivating{" "}
              <span className="text-white-50 font-extrabold drop-shadow-[0_0_8px_rgba(0,216,255,0.7)]">
                3D
              </span>{" "}
              web experiences.
            </p>

            <Button
              className="h-12 w-60 md:h-16 md:w-80"
              id="button"
              text="See my work"
            />
          </div>
        </header>

        {/*Right: 3D Content */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};
