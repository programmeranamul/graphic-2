import style from "../../styles/contact/contact.module.css";
import CommonBanner from "./../../comonents/common/CommonBanner/CommonBanner";
import ContactBody from './../../comonents/Contact/ContactBody';

function index() {
  return (
    <section>
      <CommonBanner
        title="CONTACT"
        description="Edit Your Photos Errorless, Cost-Effective and For business"
      />
      <ContactBody />
    </section>
  );
}

export default index;
