import style from "../../../styles/home/HomeEditingProcess.module.css";
import Image from "next/image";

//HomeEditingProcess
//icon-download.png
//icon-cc.png

const datas = [
  {
    imgSrc: "/home/icon-cart.png",
    title: " Free Trial / Get Quote",
    description:
      " You can take 2-3 free trials to check our image editing quality. Within just a few minutes, you may acquire a quote for your ongoing and upcoming projects at a fair price.",
  },
  {
    imgSrc: "/home/icon-download.png",
    title: "  Download Edited Images",
    description:
      "  After completing our editing by our professionals, you will get your pictures before your deadline and give us your overall feedback or let us know if any revision required.",
  },
  {
    imgSrc: "/home/icon-cc.png",
    title: " Revision / Make Payments",
    description:
      "  Once you’re satisfied with our quality service, pay the payment which is generated weekly or monthly. You can pay us by PayPal using your credit card or bank account. ",
  },
];

function HomeEditingProcess() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className="row w-100 mx-auto">
          <article className="col-12">
            <h2 className={style.title}> Step into the Editing Process</h2>
            <p className={style.text}>
              Just get into the photo editing process by creating your account
              and send a bunch of images to us as you have. After completing the
              image editing by our professionals you can download photos.
            </p>
          </article>
          {datas.map((data, index) => (
            <article key={index} className="col-md-4">
              {/* <div> */}
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
                <h4 className={style.img_title}>
                    <span>{index+1}.</span> {data.title}
                </h4>
                <p className={style.img_description}>
                    {
                        data.description
                    }
                </p>
              {/* </div> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeEditingProcess;
