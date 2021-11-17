import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import style from "../../../styles/components/TopHeader/TopHeader.module.css";

/**
 * This component for Left side of Top Navigation
 */

function TopHeaderLeft() {
    return (
        <div className="col-md-5 col-sm-4">
            <div className={style.left_container}>
              <span className="text-orange me-1"><FontAwesomeIcon alt="test" className={style.envelope} icon={faEnvelope} /></span>
              <a className={`fs-14 ${style.email}`} href="mailto:programmer.anamul@gmail.com">info@clippingpathsolve.com</a>
            </div>
          </div>
    )
}

export default TopHeaderLeft
