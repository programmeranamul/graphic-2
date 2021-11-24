import CommonBanner from "./../../comonents/common/CommonBanner/CommonBanner";
import AboutDescription from './../../comonents/AboutUs/AboutDescription/AboutDescription';
import MessionVission from './../../comonents/AboutUs/MessionVission/MessionVission';
import AboutFounder from './../../comonents/AboutUs/AboutFounder/AboutFounder';

function index() {
  return (
    <div>
      <CommonBanner
        title="ABOUT US"
        description="Edit Your Photos Errorless, Cost-Effective and For business"
      />
      <AboutDescription />
      <MessionVission />
      <AboutFounder />
    </div>
  );
}

export default index;
