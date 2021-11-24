import style from "../../../styles/home/HomeGrowYourBuisness.module.css";
import Image from "next/image"


function HomeGrowYourBuisness() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <h2 className={style.title}>
              Grow your business by hiring the best image editing service
            </h2>
            <p>
              Outsource photo editing services are a billion dollar industry in
              current times. And we are here for you to do that job on time. So
              are you looking to grow your business with quality images? Our
              mission is to provide the best clipping path service. We are a
              skilled bulk image editing company who can help you to grow your
              business. Moreover, A Company grows and thrives while they put
              strong teams in their place. Right now we are offering our service
              in Canada, USA, UK, Australia, Denmark, Germany, France, Italy,
              Netherland and many more countries.
            </p>
          </div>
          <div className="col-md-5">
<div className={style.img}>
    <div className="next_image_container">
        <Image src="/home/Grow-your-Business-300x300-1.webp" alt="Grow your business by hiring the best image editing service"  layout="fill" className="next_image"/>
    </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeGrowYourBuisness;
