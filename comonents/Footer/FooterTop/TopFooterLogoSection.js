import Image from "next/image";

/**
 * This component for logo section in top footer
 * Top footer have 4 section
 * This component is one of them
 */

function TopFooterLogoSection() {
  return (
    <div className="col-md-4 col-sm-6">
      <div className="next_image_container footer_top_logo">
        <Image
          src="/logo/CPS-Logo-dark.webp"
          className="next_image"
          alt="Clipping Path Solve Logo White"
          layout="fill"
        />
      </div>
      <p className={"mt-2 mb-0"}>
        Clipping path solve is an online offshore photo editing company. We
        provide all kind of extensive photo editing services all over the globe
        such as clipping path, background removing, photo retouching, image
        masking, ghost mannequin, shadow making, color correction and many more.
      </p>
    </div>
  );
}

export default TopFooterLogoSection;
