import style from "../../styles/contact/contact.module.css";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ContactLeftArea from "./LeftArea";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaSkype } from "react-icons/fa";

function ContactBody() {
  const canadaDatas = [
    {
      icon: <FaMapMarkerAlt />,
      text: "57 Weather Vane Lane Brampton, ON, L6X4R4 Canada",
    },
    {
      icon: <FaEnvelope />,
      text: "info@clippingpathsolve.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: " +1 (437) 991-9094",
    },
    {
      icon: <FaSkype />,
      text: "clippingpathsolve@gmail.com",
    },
  ];
  const bangladeshData = [
    {
      icon: <FaMapMarkerAlt />,
      text: " House No.13 (5th Floor), Road No.18, Rupnagar R/A, Mirpur, Dhaka- 1216, Bangladesh.",
    },
    {
      icon: <FaEnvelope />,
      text: "info@clippingpathsolve.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: "  +880 1612-244440",
    },
    {
      icon: <FaSkype />,
      text: "clippingpathsolve@gmail.com",
    },
  ];


 

  return (
    <section className={style.section}>
      <div className="container">
        <div className="row w-100 mx-auto">
          <article className="col-md-7 mb-4 pb-2">
            <ContactLeftArea />
          </article>
          <article className="col-md-5">
            <div className={style.right_side}>
              <h4> Canada Office:</h4>
              <ul>
                  {
                      canadaDatas.map((data, index) => <li key={index}>{data.icon} {data.text} </li>)
                  }
              </ul>
              <h4>  Bangladesh Office:</h4>
              <ul>
                  {
                      bangladeshData.map((data, index) => <li key={index}>{data.icon} {data.text} </li>)
                  }
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ContactBody;
