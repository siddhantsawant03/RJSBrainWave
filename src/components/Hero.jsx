import { curve, heroBackground, robot } from "../assets";
import Section from "./Section";
import Button from "./Button";
import { BackgroundCircles } from "../design/Header";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "../design/Generating";
import Notification from "../design/Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);
  // Creates a ref using useRef to reference the container for parallax effects.

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      {/* 
      Section component with several custom classes and props.
      Adds padding, margin-top, crosses, custom paddings, and an id.
      */}

      <div className="container relative" ref={parallaxRef}>
        {/* 
        Container div with relative positioning.
        Ref is attached to enable parallax effects.
        */}

        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          {/* 
          Wrapper div for the heading and introductory text.
          Positioned relative with a max width and centered alignment.
          */}

          <h1 className="h1 mb-6">
            Explore the Possibilites of &nbsp; AI &nbsp; Chatting with{" "}
            <span className="inline-block relative">
              Brainwave{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
              {/* 
              Main heading with a span containing an image of a curve.
              The image is positioned absolutely relative to the span.
              */}
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          {/* 
          Paragraph text describing the benefits of Brainwave.
          Centered with some margin and padding adjustments.
          */}

          <Button href="/pricing" white>
            Get Started
          </Button>
          {/* 
          Button component linking to the pricing page.
          */}
        </div>

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          {/* 
          Wrapper div for the main image and parallax elements.
          */}

          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[10%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                {/* 
                Image of a robot, scaled and translated for different screen sizes.
                */}

                <ScrollParallax isAbsolutelyPositioned>
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                  {/* 
                  Parallax component wrapping the Generating component.
                  Displays a loading indicator.
                  */}

                  <ScrollParallax isAbsolutelyPositioned>
                    <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      {heroIcons.map((icon, index) => (
                        <li className="p-5" key={index}>
                          <img
                            src={icon}
                            width={24}
                            height={25}
                            alt={`icon ${index + 1}`}
                          />
                        </li>
                      ))}
                    </ul>
                  </ScrollParallax>
                  {/* 
                  Parallax component wrapping a list of icons.
                  Only displayed on larger screens (hidden by default).
                  */}

                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code Generation"
                  />
                  {/* 
                  Notification component displayed in the bottom right corner.
                  Only visible on larger screens (hidden by default).
                  */}
                </ScrollParallax>
              </div>
            </div>
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero background"
            />
          </div>
          {/* 
          Background image positioned absolutely and centered.
          Scaled for different screen sizes.
          */}
        </div>
        <BackgroundCircles />
      </div>
      <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Hero;
