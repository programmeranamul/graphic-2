import style from "../../../styles/home/HomeClippingPathService.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

function HomeClippingPathService() {
  //Simple-Clipping-Path-1.webp
  //Medium-Clipping-Path-2.webp
  //Complex-Clipping-Path-1.webp

  const datas = [
    "/home/Simple-Clipping-Path-1.webp",
    "/home/Medium-Clipping-Path-2.webp",
    "/home/Complex-Clipping-Path-1.webp",
  ];
  return (
    <section className={style.section}>
      <div className="container">
        <article className={`col-12 text-center`}>
          <h1 className={style.title}> Clipping Path Services</h1>
          <p className={style.text}>
            Clipping path is a vector path that creates an outline around the
            image by cutting out the noisy background to get an appealing
            exposure of an image. Also, it gives you the flexibility to design
            versatile product images across the web.
          </p>
        </article>
        <article className="row w-100 mx-auto">
          {datas.map((data, index) => (
            <div key={index} className="col-md-4">
              <div className={style.img_section}>
                <div className="next_image_container">
                  <Image
                    src={data}
                    alt="Clipping Path Services"
                    layout="fill"
                    className="next_image"
                  />
                </div>
              </div>
            </div>
          ))}
        </article>
        <article className={`col-12 text-center`}>
          <p className={style.text}>
            {" "}
            Clipping Path Solve is able to help you to get the best clipping
            path service due to our experienced and skilled designers. They can
            do it on time to save your valuable time whatever the picture is.
          </p>
          <div>
            <Link href="/">
              <a className={style.btn}>
                Explore More Services <FaAngleDoubleRight className="ms-1" />
              </a>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HomeClippingPathService;
