import {
  imageEditingData,
  photoRetouchingData,
  imgPostProductionData,
} from "./HoverServiceData";
import Link from "next/link";
import style from "../../../styles/components/header/main_header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faAngleUp, faAngleDown} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useState } from "react";

const allService = [
  {
    title: "Image Editing Services",
    services: imageEditingData,
  },
  {
    title: "Photo Retouching Services",
    services: photoRetouchingData,
  },
  {
    title: "Image Post-Production Services",
    services: imgPostProductionData,
  },
];
function MobaileMenu() {
  const [showService, setShowService] = useState(null);

  const handelShowService = (title) => {
    if (title === showService) {
      setShowService(null);
    } else {
      setShowService(title);
    }
  };

  return (
    <div className={`container ${style.mob_service_wrapper}`}>
      <li className={`${style.services} `}>
        <Link href="/">
          <a
            className={`d-flex align-items-center ps-0  ${style.link} ${style.mobile_link}`}
          >
            Services
            <FontAwesomeIcon icon={faCaretDown} className="height-14 ms-1" />
          </a>
        </Link>
        <div>
          {allService.map((service, index) => (
            <div
              onClick={() => handelShowService(service.title)}
              key={index}
              className={style.mobile_service}
            >
              <h4 className={style.mob_service_title}>
                <span>{service.title}</span>{" "}
                <span>
                 {service.title ===showService ? <FontAwesomeIcon
                    className={style.mob_service_icon}
                    icon={faAngleUp}
                    alt={service.title}
                  />:  <FontAwesomeIcon
                  className={style.mob_service_icon}
                  icon={faAngleDown}
                  alt={service.title}
                />}
                </span>
              </h4>
              <div className="row">
              {service.services.map((sr, index) => (
                <div
                  key={index}
                  className={`${style.mob_service_image} ${
                    service.title == showService ? "d-block" : "d-none"
                  }  col-sm-6`}
                >
                  <Link href="/">
                    <a className={style.mob_service_single_img}>
                      <div className="next_image_container pt-3">
                        <Image
                          src={sr.imgSrc}
                          alt={sr.text}
                          layout="fill"
                          className="next_image"
                        />
                      </div>
                      <p className="mb-0 fw-bold mt-1 mb-3">{sr.text}</p>
                    </a>
                  </Link>
                </div>
              ))}
              </div>
            </div>
          ))}
          {/* <div className={style.mobile_service}>
            <h4 className={style.mob_service_title}>
              <span>Test</span>{" "}
              <span>
                <FontAwesomeIcon
                  className={style.mob_service_icon}
                  icon={faAngleUp}
                  alt="Test"
                />
              </span>
            </h4>
            <div className={style.mob_service_image}>
              <Link href="/">
                <a className={style.mob_service_single_img}>
                  <div className="next_image_container pt-3">
                    <Image
                      src="/navigation/Product-Photo-Retouching.webp"
                      alt="T"
                      layout="fill"
                      className="next_image"
                    />
                  </div>
                  <p className="mb-0 fw-bold mt-1">Photo Restoration Service</p>
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </li>
      <li>
        <Link href="/">
          <a className={style.link}>Prices</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={style.link}>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className={style.link}>Contact</a>
        </Link>
      </li>
      <li className="py-2">
        <Link href="/">
          <a className={`${style.nav_btn} ${style.free_triale_btn} py-2`}>
            Free Trial
          </a>
        </Link>
      </li>
      <li className="py-2">
        <Link href="/">
          <a className={`${style.quate_btn} ${style.nav_btn} py-2`}>
            Get A Quote
          </a>
        </Link>
      </li>
    </div>
  );
}

export default MobaileMenu;
