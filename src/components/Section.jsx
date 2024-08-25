import React from "react";
import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      // relative: Positions the container relatively, making it a reference point for absolutely positioned children.Padding classes:
      // Default padding (py-10).
      // Larger padding on larger screens (lg:py-16, xl:py-20).
      // If crosses is true, it adds even more padding (lg:py-32, xl:py-40).
      className={`relative ${customPaddings || `py-10`}lg:16 xl:py-20 ${
        crosses ? "lg:py-32 xl:py-40" : ""
      }${className || ""} `}
    >
      {children}
      <div
        // hidden: Hidden by default.
        // absolute top-0: Positioned at the top of the parent container.
        // left-5 and right-5: Positioned 5 units from the left and right edges.
        // w-0.25: Width of 0.25 units.
        // h-full: Full height of the parent container.
        // bg-stroke-1: Custom background color (assumed to be defined in CSS).
        // pointer-events-none: Makes the lines non-interactive.
        // md:block lg:left-7.5 xl:left-10: Displayed as a block on medium screens and beyond, with adjusted left/right positioning for larger screens.

        className="hidden absolute top-0 left-5 w-0.
      25 h-full bg-stroke-1 pointer-events-none md: block lg:left-7.5 xl:left-10"
      ></div>
      <div
        className="hidden absolute top-0 right-5 w-0.
      25 h-full bg-stroke-1 pointer-events-none md: block lg:right-7.5 xl:right-10"
      ></div>

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crosses && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          ></div>

          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
