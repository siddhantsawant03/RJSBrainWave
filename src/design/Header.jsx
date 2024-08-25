import { background } from "../assets";
export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      {/* The outermost <div> sets up the largest ring. It's absolutely positioned at the center of its parent container with a width of 51.375rem, 
      aspect ratio to make it a square, and a border. The -translate-x-1/2 and -translate-y-1/2 classes center it perfectly. */}
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      {/* Two <div> elements are created, each absolutely positioned with top-0 to start from the top of the parent container.
      The left-5 and right-5 classes position them 5 units from the left and right edges, respectively.
      Each line has a width of 0.25 units, full height (h-full), and a background color (bg-n-6). */}
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      {/* Each <div> represents a circle positioned absolutely at specific top and left/right values.
      The w-3 h-3 and w-6 h-6 classes define the width and height of the circles.
      The bg-gradient-to-b class sets a vertical gradient background, transitioning from a specific color to #1A1A32.
      The rounded-full class makes the div elements circular.
 */}
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    // The outermost <div> is absolutely positioned to cover the entire parent container (inset-0), with pointer-events-none to make it non-interactive and lg:hidden to hide it on large screens.
    // Inside this div, another absolutely positioned div (inset-0) contains an image with reduced opacity (opacity-[.03]). The image covers the entire container (w-full h-full object-cover).
    // The src attribute of the image uses the background import, with specified width, height, and alt attributes.
    // Finally, the Rings, BackgroundCircles, and SideLines components are included within the HamburgerMenu, overlaying the background image.

    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.03]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>

      <Rings />
      <BackgroundCircles />
      <SideLines />
    </div>
  );
};
