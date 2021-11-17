import Link from "next/link";
import style from "../../../styles/components/Footer/FooterBottom.module.css";

/**
 * This component for bottom footer
 * This component have 2 section
 * 1st Navigation Link, whice stand top in copywrite text
 * 2nd Copywrite text
 * See below to code there have comment for every secion
 */

function FooterBottom() {
  return (
    <footer className={style.footer_bottom}>
      <div className="container">
          {/* Navigation section */}
        <div className={style.link_container}>
          <Link href="/test">
            <a>Privacy Policy</a>
          </Link>
          <span>|</span>
          <Link href="/test">
            <a>Terms & Conditions</a>
          </Link>
          <span>|</span>
          <Link href="/test">
            <a>FAQ</a>
          </Link>
        </div>
        {/* Copywrite text section */}
        <div className={style.copy_write_text}>
          <p className="text-center fs-15 mb-0">
            <span>© Copyright {new Date().getFullYear()}</span>{" "}
            <Link href="/text">
              <a>Clipping Path Solve</a>
            </Link>
            <span>. All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
