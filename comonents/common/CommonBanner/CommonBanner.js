import style from "../../../styles/components/CommonBanner/CommonBanner.module.css";
import Link from "next/link";
import { FaMousePointer } from "react-icons/fa";

function CommonBanner({ title, description }) {
  return (
    <section className={style.section}>
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <Link href="/">
            <a className={style.btn}>
              <FaMousePointer /> Get started eith free trial
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CommonBanner;
