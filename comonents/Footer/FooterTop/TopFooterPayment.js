import style from "../../../styles/components/Footer/TopFooter.module.css";
import Image from "next/image";

function TopFooterPayment() {
  return (
    <div className="col-md-3 col-sm-6 ">
      <h4 className={style.title}>Payment Methods</h4>
      <div className={style.payment_section}>
        <p>We accept Paypal, Payoneer and all major credit/debit cards.</p>
        <div>
          <div className={`next_image_container ${style.paypal_logo}`}>
            <Image
              src="/payment/paypal-logo.png"
              className="next_image"
              alt="We accept Paypal, Payoneer and all major credit/debit cards."
              layout="fill"
            />
          </div>
          <div className={`next_image_container ${style.payment_method_image}`}>
            <Image
              src="/payment/Payment-Method.png"
              className="next_image"
              alt="We accept Paypal, Payoneer and all major credit/debit cards."
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopFooterPayment;
