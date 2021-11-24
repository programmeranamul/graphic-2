import style from "../../../styles/home/HomeBenefits.module.css";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";


const datas = [
  "Get high quality image editing",
  "Meet the deadline",
  " Rush service",
  "Get the service with reasonable price",
  "Three step of quality control",
  "24/7 amazing customer support",
  "Discount for bulky images",
  "Strong FTP server"
];

function HomeBenefits() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className="row w-100 mx-auto">
          <div className="col-md-6">
            <div>
              <div className="next_image_container">
                <Image
                  src="/home/Key-Benefits-of-Clipping-Path-Solve-1.webp"
                  alt="test"
                  layout="fill"
                  className="next_image"
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2> Key Benefits of Clipping Path Solve</h2>
            <p>
              Nowadays clipping paths are one of the most popular photo editing
              techniques for various purposes. Clipping Path Solve helps
              professional photographers, eCommerce business owners, magazines,
              Automobile industries, Garment industries, printing design etc. We
              have 650+ satisfied clients who have got our services with high
              quality work.
            </p>
            <ul>
                {
                    datas.map((data, index) => <li key={index}><FaCheck /> {data}</li>)
                }
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeBenefits;
