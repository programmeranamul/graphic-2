import Image from "next/image";
import style from "../../../styles/components/header/main_header.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBars } from "@fortawesome/free-solid-svg-icons";
import HoverService from "./HoverService";
import MobaileMenu from "./MobaileMenu";

/**
 * This component for main navigation
 * It contains all nav link
 * If hover in service link service option will be display
 *
 */

function MainNavigation() {

  const handelShowMenu = () => {
const mobileMenu = document.getElementById("mobileMenu")
mobileMenu.classList.toggle("d-block")
  }


  return (
    <header className={style.main_navigation}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-6 ">
            <div className="next_image_container">
              <Image
                src="/navigation/logo.webp"
                alt="logo"
                layout="fill"
                className="next_image"
              />
            </div>
          </div>
          <div className="col-md-9 col-6 d-none d-md-block  ">
            <div className="d-flex position_relative align-items-center justify-content-end h-100">
              <nav
                className={`d-flex justify-content-end align-items-center flex-wrap ${style.nav_container}`}
              >
                <li className={style.services} id="service">
                  <Link href="/">
                    <a className={`d-flex align-items-center  ${style.link} `}>
                      Services
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="height-14 ms-1"
                      />
                    </a>
                  </Link>
                </li>
                <div id="servie-hover" className={style.service_hover}>
                  <HoverService />
                </div>
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
                <li>
                  <Link href="/">
                    <a className={`${style.nav_btn} ${style.free_triale_btn}`}>
                      Free Trial
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className={`${style.quate_btn} ${style.nav_btn}`}>
                      Get A Quote
                    </a>
                  </Link>
                </li>
              </nav>
            </div>
          </div>

          <div className={"d-block d-md-none col-6"}>
            <div className={style.menu_icon_wrapper}>
              <div onClick={handelShowMenu} className={style.menu_icon}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
          <div className={style.mobaile_menu} id="mobileMenu">
            <MobaileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default MainNavigation;
