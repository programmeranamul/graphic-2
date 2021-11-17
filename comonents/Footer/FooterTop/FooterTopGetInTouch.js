import style from "../../../styles/components/Footer/TopFooter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";

function FooterTopGetInTouch() {
  return (
    <div className="col-md-3 col-sm-6">
      <h4 className={style.title}>Get In Touch</h4>
      <div className={style.get_in_touch}>
        <p className="d-flex">
          <span>
            <FontAwesomeIcon
              className={style.get_in_touch_icon}
              icon={faMapMarkerAlt}
              alt={"57 Weather Vane Lane Brampton, ON, L6X4R4, Canada"}
            />
          </span>
          <span> 57 Weather Vane Lane Brampton, ON, L6X4R4, Canada</span>
        </p>
        <p>
          <a href="mailto:programmer.anamul@gmail.com" className="d-flex">
            <span>
              <FontAwesomeIcon
                className={style.get_in_touch_icon}
                icon={faEnvelope}
                alt={"57 Weather Vane Lane Brampton, ON, L6X4R4, Canada"}
              />
            </span>
            <span className="text-white"> programmer.anamul@gmail.com</span>
          </a>
        </p>
        <p className="d-flex ">
          <a
            href="tel: +8801309423215"
            className="fs-14 text-decoration-none text-white"
          >
            <span>
              {" "}
              <FontAwesomeIcon
                alt="test"
                icon={faPhoneAlt}
                className={style.get_in_touch_icon}
              />
            </span>
            <span>+1 (437) 991-9094</span>
          </a>
        </p>
        <p>
          <a href="mailto:programmer.anamul@gmail.com" className="d-flex">
            <span>
              <FontAwesomeIcon
                className={style.get_in_touch_icon}
                icon={faSkype}
                alt={"57 Weather Vane Lane Brampton, ON, L6X4R4, Canada"}
              />
            </span>
            <span className="text-white"> programmer.anamul@gmail.com</span>
          </a>
        </p>
      </div>
    </div>
  );
}

export default FooterTopGetInTouch;
