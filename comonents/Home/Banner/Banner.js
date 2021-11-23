import style from "../../../styles/home/home_banner.module.css";
import Link from "next/link";
import Image  from "next/image"


const content_text="Provide hand-drawn advanced photo editing services by highly skilled designers who can bring your pictures to life. For that, you can easily drive your sales on online business."

function Banner() {
  return (
    <section className={style.section}> 
     <div className="container">    
        <div className="row w-100 mx-auto">
       
          <article className={`col-md-6 ${style.left_section}`}>
            <h2 className={style.title}>
              Edit Your Photos <span>Cost-Effective</span>
            </h2>
            <p className={style.text}>
              {
                  content_text
              }
            </p>
            <div>
              <Link href="/">
                <a className={style.btn}>Free Trial</a>
              </Link>
              <Link href="/">
                <a className={style.btn}>Get Quote</a>
              </Link>
            </div>
            <p className={style.credit}>* No credit card required.</p>
          </article>
          <article className="col-md-6">
              <div>
                    <div className="next_image_container">
                        <Image src="/home/Laptop-1.webp" layout='fill' alt={content_text} className="next_image"/>
                    </div>
              </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Banner;
