import style from "../../../styles/Prices/Prices.module.css";
import Image from "next/image";

function FacilitiesVolumeImages() {
  return (
    <section className={style.FacilitiesVolumeImages_section}>
      <div className="container">
        <div className="row w-100 mx-auto">
          <article className="col-lg-7">
            <p className={style.bulk}>Bulk Images?</p>
            <h2> Facilities for volume images!</h2>
            <p>
              If you have a lot of regular work, we are always with you. The
              clipping path solve all the time with additional benefits. We do
              not limit our clients to prices. We provide them 24/7 services. We
              offer our clients a wide range of benefits to reduce their post
              production costs. Another facility that we provide to the clients
              who made a large order, we don’t charge a single penny for
              correction. Clipping Path Solve always tried giving best service.
            </p>
            <p>
              Clipping Path Solve all time ready to your work. So don’t be late,
              please give us your free trail and judge our quality.
            </p>
          </article>
          <article className="col-lg-5">
<div>
    <div>
        <div className="next_image_container">
            <Image className="next_image" src="/price/bulk-orders-cps.webp" alt="t" layout="fill"/>
        </div>
    </div>
</div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FacilitiesVolumeImages;
