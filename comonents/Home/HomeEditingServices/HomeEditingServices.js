import style from "../../../styles/home/HomeEditingServices.module.css";
import Link from "next/link";
import { FaImages, FaMagic, FaUntappd } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";
import {
  imageEditingDatas,
  photoRetouchingData,
  imagePostProductionData,
} from "./HomeEditingServicesData";

const serviceCategories = [
  {
    text: "Image Editing",
    icon: <FaImages />,
  },
  {
    text: "Photo Retouching",
    icon: <FaMagic />,
  },
  {
    text: "Image Post-Production",
    icon: <FaUntappd />,
  },
];

function HomeEditingServices() {
  const [activeCate, setActiveCate] = useState("Image Editing");
  const [activeData, setActiveData] = useState(imageEditingDatas);

  const handelChange = (text) => {
    setActiveCate(text);
    if (text === "Image Editing") {
      setActiveData(imageEditingDatas);
    } else if (text === "Photo Retouching") {
      setActiveData(photoRetouchingData);
    } else {
      setActiveData(imagePostProductionData);
    }
  };

  return (
    <section className={style.section}>
      <div className="container">
        <article className={style.heading_section}>
          <h2> Get Image Editing Services Done Perfectly</h2>
          <p>
            Looking for high-quality photo editing service. Choose your Service
            and make your images outstanding and enhance perfection.
          </p>
        </article>
        <article className={style.cate_area}>
          <div className="row w-100 mx-auto">
            {serviceCategories.map((data, index) => (
              <div
                key={index}
                className={`col ${style.single_cate} ${
                  data.text === activeCate ? style.active : ""
                }`}
                onClick={() => handelChange(data.text)}
              >
                <p>
                  <span className={style.cate_icon}>{data.icon}</span>
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </article>
        <article className={style.main}>
          <div className="row w-100 mx-auto">
            {/* left text section */}
            <div className="col-md-4">
              {activeData.services1.map((data, index) => (
                <Link href={data.link} key={index}>
                  <a className={style.main_wrapper}>
                    <div>
                      <div className={style.main_icon}>{data.icon}</div>
                    </div>
                    <div>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
            {/* Middle image section */}
            <div className="col-md-4">
              <div>
                <div className="next_image_container">
                  <Image
                    src={activeData.image}
                    alt="test"
                    layout="fill"
                    className="next_image"
                  />
                </div>
              </div>
            </div>
            {/* right text section */}
            <div className="col-md-4">
              {activeData.services2.map((data, index) => (
                <Link href={data.link} key={index}>
                  <a className={style.main_wrapper}>
                    <div>
                      <div className={style.main_icon}>{data.icon}</div>
                    </div>
                    <div>
                      <h4>{data.title}</h4>
                      <p>{data.description}</p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default HomeEditingServices;
