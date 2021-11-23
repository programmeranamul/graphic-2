import Image from "next/image";
import style from "../../../styles/home/HomeFetaures.module.css"

function HomeFetaures() {
  // icon-quality.png
  //icon-cheap.png
  //icon-support.png

  const datas = [
    {
      imgSrc: "/home/icon-quality.png",
      title: " High-Quality Image Editing",
      description:
        " Get high quality photo editing service according to your quotes and requirements. Undoubtedly, we can ensure that you will get good quality service from us.",
    },
    {
      imgSrc: "/home/icon-cheap.png",
      title: "  Most Affordable Pricing",
      description:
        " Get Expert’s assistance from our Professional Image Editing Services to receive highly appealing and professional images at the most affordable rates within quick TAT.",
    },
    {
      imgSrc: "/home/icon-quality.png",
      title: " Instant Customer Support",
      description:
        " Get 24/7 amazing customer support directly with our executives. This is one of the most important parts of an image editing service.",
    },
  ];

  return (
    <section className={style.section}>
      <div className="container">
        <div className="row w-100 mx-atuo">
          {datas.map((data, index) => (
            <article key={index} className="col-md-4">
              <div>
              <div className={style.img_container}>
                <div className="next_image_container">
                  <Image
                    src={data.imgSrc}
                    alt={data.title}
                    className="next_image"
                    layout="fill"
                  />
                </div>
              </div>
              <h4 className={style.title}>{data.title}</h4>
              <p className={style.text}>{data.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeFetaures;
