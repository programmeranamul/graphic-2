import CommonBanner from "./../../comonents/common/CommonBanner/CommonBanner";
import PricingText from './../../comonents/Prices/PricingText/PricingText';
import StartPricing from './../../comonents/Prices/StartPricing/StartPricing';
import FacilitiesVolumeImages from './../../comonents/Prices/FacilitiesVolumeImages/FacilitiesVolumeImages';
import FrequentlyAskedQuestion from './../../comonents/Prices/FrequentlyAskedQuestion/FrequentlyAskedQuestion';

function index() {
  return (
    <>
      <CommonBanner
        title="IMAGE EDITING SERVICES PRICING"
        description="Edit Your Photos Errorless, Cost-Effective and For business"
      />
      <PricingText />
      <StartPricing />
      <FacilitiesVolumeImages />
      <FrequentlyAskedQuestion />
    </>
  );
}

export default index;
