import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import style from "../../../styles/components/TopHeader/TopHeader.module.css";
import { faTwitter, faFacebookF, faInstagram, faPinterestP, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



function TopHeaderRight() {
    return (
        <div className="col-md-7 col-sm-8">
            <div className="d-flex justify-content-end">
                <div className="d-flex align-items-center">
                    <FontAwesomeIcon alt="test" icon={faPhoneAlt} className={style.phone}/>
                    <a href="tel: +8801309423215" className="fs-14 text-decoration-none text-white"> +1 (437) 991-9094</a>
                </div>
                <a className={`${style.social_icon} ${style.facebook_bg}`} href="#" target="_blank">
                <FontAwesomeIcon alt="test" icon={faFacebookF} />
                </a>
                <a className={`${style.social_icon} ${style.twitter_bg}`} href="#" target="_blank">
                <FontAwesomeIcon alt="test" icon={faTwitter} />
                </a>
                <a className={`${style.social_icon} ${style.instagram_bg}`} href="#" target="_blank">
                <FontAwesomeIcon alt="test" icon={faInstagram} />
                </a>
                <a className={`${style.social_icon} ${style.pinterest_bg}`} href="#" target="_blank">
                <FontAwesomeIcon alt="test" icon={faPinterestP} />
                </a>
                <a className={`${style.social_icon} ${style.linkDin_bg}`} href="#" target="_blank">
                <FontAwesomeIcon alt="test" icon={faLinkedinIn} />                </a>

                
            </div>
        </div>
    )
}

export default TopHeaderRight
