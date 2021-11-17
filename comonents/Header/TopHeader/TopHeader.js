import style from "../../../styles/components/TopHeader/TopHeader.module.css";
import TopHeaderLeft from "./TopHeaderLeft";
import TopHeaderRight from "./TopHeaderRight";

/**
 * This component handel Top Navigation
 * TopHeaderLeft component import for Left side in Top Navigation
 */

function TopHeader() {
  return (
    <div className={`${style.top_header} d-none d-md-block`}>
      <div className="container">
        <div className="row">
          <TopHeaderLeft />
          <TopHeaderRight />
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
