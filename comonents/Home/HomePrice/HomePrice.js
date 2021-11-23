import style from "../../../styles/home/HomePrice.module.css";
import Image from "next/image";
import Link from "next/link";

//icon-clipping-path-1.webp
//Photo-retouching-1-1.webp
//Ghost-mannequin-1.webp

const datas = [
  {
    imgSrc: "/home/icon-clipping-path-1.webp",
    title: " Clipping Path",
    link: "/",
    text1: " Starting at ",
    price: "0.29USD",
    text2: " /image",
  },
  {
    imgSrc: "/home/Photo-retouching-1-1.webp",
    title: "  Photo Retouching",
    link: "/",
    text1: " Starting at ",
    price: "0.89USD",
    text2: " /image",
  },
  {
    imgSrc: "/home/Ghost-mannequin-1.webp",
    title: " Ghost Mannequin",
    link: "/",
    text1: " Starting at ",
    price: "1.25USD",
    text2: " /image",
  },
];

function HomePrice() {
  return (
    <section className={style.section}>
      <div className="container">
        <h2> Our Pricing</h2>
        <div className="row w-100 mx-auto">
          {datas.map((data, index) => (
            <Link key={index} href={data.link}>
            <a  className="col-md-4 d-block" >
            <article>
              <div>
                <div className={style.img}>
                  <div className="next_image_container">
                    <Image
                      src={data.imgSrc}
                      alt={data.title}
                      layout="fill"
                      className="next_image"
                    />
                  </div>
                </div>
                <h4>{data.title}</h4>
                <p>
                  {data.text1} <strong>{data.price}</strong> {data.text2}
                </p>
              </div>
            </article></a></Link>
          ))}
        </div>
        <div>
            <Link href="/">
            <a className={style.btn}>See All Price</a></Link>
        </div>
      </div>
    </section>
  );
}

export default HomePrice;
