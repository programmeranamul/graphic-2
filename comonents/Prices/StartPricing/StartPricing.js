import style from "../../../styles/Prices/Prices.module.css";
import Link from "next/link"

const priceDatas = [
  {
    title: "IMAGE EDITING",
    titleYellow: false,
    services: [
      { name: "Clipping Path Service ", price: 0.29 },
      {
        name: "Background Remove Service ",
        price: 0.35,
      },
      {
        name: "Image Masking Service ",
        price: 0.89,
      },
      {
        name: "Shadow Making Service ",
        price: 0.49,
      },
      {
        name: "Ghost Mannequin Service ",
        price: 1.29,
      },
      {
        name: "Car Photo Editing Service ",
        price: 0.49,
      },
      {
        name: "Multi Clipping Path Service ",
        price: 1.5,
      },
      {
        name: "Color Variants Service  ",
        price: 1.25,
      },
    ],
  },
  {
    title: "IMAGE EDITING",
    titleYellow: true,
    services: [
      { name: "Clipping Path Service ", price: 0.29 },
      {
        name: "Background Remove Service ",
        price: 0.35,
      },
      {
        name: "Image Masking Service ",
        price: 0.89,
      },
      {
        name: "Shadow Making Service ",
        price: 0.49,
      },
      {
        name: "Ghost Mannequin Service ",
        price: 1.29,
      },
      {
        name: "Car Photo Editing Service ",
        price: 0.49,
      },
      {
        name: "Multi Clipping Path Service ",
        price: 1.5,
      },
      {
        name: "Color Variants Service  ",
        price: 1.25,
      },
    ],
  },
  {
    title: "IMAGE EDITING",
    titleYellow: false,
    services: [
      { name: "Clipping Path Service ", price: 0.29 },
      {
        name: "Background Remove Service ",
        price: 0.35,
      },
      {
        name: "Image Masking Service ",
        price: 0.89,
      },
      {
        name: "Shadow Making Service ",
        price: 0.49,
      },
      {
        name: "Ghost Mannequin Service ",
        price: 1.29,
      },
      {
        name: "Car Photo Editing Service ",
        price: 0.49,
      },
      {
        name: "Multi Clipping Path Service ",
        price: 1.5,
      },
      {
        name: "Color Variants Service  ",
        price: 1.25,
      },
    ],
  },
];

const defaultDatas = [
  "Free Trail",
  "Secure FTP",
  "3 Steps Quality Control",
  "24×7 Support",
  "Low Cost",
  "Bulk Offer",
];

function StartPricing() {
  return (
    <section className={style.startPricing_section}>
      <article className="container">
        <h2> Clipping Path Solve Starting Prices</h2>
        <div className="row w-100 mx-auto">
          {priceDatas.map((priceData, index) => (
            <div className="col-md-4" key={index}>
              <div className={style.price_table}>
                <h4 className={priceData.titleYellow? style.highlight_title : ""}>{priceData.title}</h4>
                <ul className={style.price_ul}>
                  {priceData.services.map((service, index) => (
                    <li key={index}>
                      {service.name} <strong>{service.price}/image</strong>
                    </li>
                  ))}
                </ul>
                <ul className={style.default_ul}>
                    {
                        defaultDatas.map((data, index ) => <li key={index}>{data} </li>)
                    }
                </ul>
                <div className={style.btn_container}>
                    <Link href="/">
                        <a className={style.free_trial}>Free Trial</a>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default StartPricing;
