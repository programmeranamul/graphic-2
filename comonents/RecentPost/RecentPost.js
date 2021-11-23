import style from "../../styles/components/RecentPost/RecentPost.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const datas = [
    {
        imgSrc: "/home/Ghost-Mannequin-back-image.jpg",
        title:"Step by Step Ghost Mannequin Photography & Editing Guide",
        link:"/"
    },
    {
        imgSrc: "/home/Background-removal.jpg",
        title:"A Guide to Remove Unwanted Background Using Photoshop Tools",
        link:"/"
    }
]

function RecentPost() {
  return (
    <section className={style.section}>
      <div className="container">
        <h2>Our Recent Posts</h2>
        <div className="row mx-auto w-100">
          {
              datas.map((data, index) => <article className="col-md-4 d-md-flex" key={index}>
                    <div className={style.single_articel}>
                        <div>
                            <div className="next_image_container">
                                <Image src={data.imgSrc} alt={data.title} className="next_image ascepted_rasio" layout="fill"/>
                            </div>
                        </div>
                        <div className={style.text_section}>
                        <h3>
                            {data.title}
                        </h3>
                        <Link href={data.link}>
                        <a className={style.btn}>Read More <FaArrowRight /> </a></Link>
                        </div>
                    </div>
              </article>)
          }
      </div>
      </div>
      
    </section>
  );
}

export default RecentPost;
