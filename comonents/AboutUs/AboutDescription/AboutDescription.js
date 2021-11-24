import style from "../../../styles/AboutUs/AboutDescription.module.css";
import Image from "next/image";

//Clipping-Path-Solve-Office.webp
function AboutDescription() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className={style.articel_wrapper}>
          {/* <div> */}
          <div className={style.img_section}>
            <div className="next_image_container">
              <Image
                src="/aboutUs/Clipping-Path-Solve-Office.webp"
                alt="text"
                layout="fill"
                className="next_image"
              />
            </div>
          </div>
          {/* </div> */}
          Clipping Path Solve is an online offshore photo editing company. We
          provide all kind of extensive photo editing services all over the
          globe such as clipping path, background removing, photo retouching,
          image masking, ghost mannequin, shadow making, color correction and
          many more. We are trusted photo editing company <br /> <br />{" "}
          Furthermore, Clipping Path solve began its adventure over Eight years
          back and provided expert image editing services to clients. We deliver
          you the best editing service with on time along with of our extensive
          knowledge in this profession.
          <br /> <br /> We have dedicated and certified graphic design team.
          They have done their study from renowned graphic design institute of
          Bangladesh. Moreover, they are not only certified but also they are
          experienced whom are working this sector around 15 years. <br />{" "}
          <br /> Clipping Path Solve strongly functioning with fashion
          industries, magazine agencies, photographers, web and graphic design
          firms, printing press, and ecommerce businesses. <br /> <br /> We have
          a greatly experienced team and also provide years of specialist
          expertise. Most of our photo retouchers are educated from the
          sophisticated Graphic Institute of Bangladesh. We have different team
          to provide each service. We have best experts who are leading our
          service teams. We use the most updated and advanced adobe software and
          also other image editing software to edit images. <br /> <br /> Now
          you might think that, we are available 24/7 or not. See, we divided
          our teams into 3 shifts due to meet the client’s deadline and
          accomplish designing work properly.
        </div>
        <div className={style.clear}></div>
      </article>
    </section>
  );
}

export default AboutDescription;
