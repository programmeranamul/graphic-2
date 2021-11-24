import style from "../../../styles/AboutUs/AboutFounder.module.css";
import Image from "next/image";
import { FaQuoteLeft , FaQuoteRight} from "react-icons/fa";

function AboutFounder() {
  return (
    <section className={style.section}>
      <div className="container">
        <article className={style.top_section}>
          <p className={style.f_c}>ABOUT FOUNDER & CEO</p>
          <h2 className={style.name}>Anamul Hoque</h2>
          <p className={style.f}>Founder & CEO</p>
          <p className={style.s}>Successful Entrepreneur.</p>
        </article>
        <article className={style.main}>
          <div className={style.img}>
            <div className="next_image_container">
              <Image
                src="/aboutUs/Maidul-Founder-CEO.-1024x915-1.webp"
                alt="text"
                layout="fill"
                className="next_image"
              />             
            </div>
          </div>
          <FaQuoteLeft className={style.left_icon}/>
          I am Maidul Islam, Founder & CEO at Clipping Path Solve. I started my career Graphic design as a Junior Photo Editing executive in 2011. The last position held General Manager in GSC up to June 2016.<br /> <br /> As a successful entrepreneur, I founded Clipping Path Solve. I has been working as the Founder & CEO of Clipping Path Solve for five years. Clipping Path Solve is one of the best online-based outsourcing graphic designing and Photo Editing firms in Bangladesh. <br /> <br />Covering all your design needs, whether they’re personal or for your business. I am working in Photo Editing/graphic design roles for almost 10 years. Looking for creative partner to boost your business, take your business needs to the next level of marketing and exposure, I can help. Whether you just startup a business or you have established onethat needs to standout from the crowd. Whether you need a Photo Editing, Photo Retouching, Ecommerce Image Editing. No need to look further, I can help you providing excellent creative service. I able enough to handle multiple projects simultaneously based on the ability to manage time and details. <FaQuoteRight className={style.right_icon}/>
          <div className={style.clear}></div>
        </article>
      </div>
    </section>
  );
}

export default AboutFounder;
