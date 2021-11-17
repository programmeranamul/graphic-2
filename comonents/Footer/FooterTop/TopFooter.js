
import style from "../../../styles/components/Footer/TopFooter.module.css"
import TopFooterLogoSection from './TopFooterLogoSection';
import TopFooterNavigation from './TopFooterNavigation';
import FooterTopGetInTouch from './FooterTopGetInTouch';
import TopFooterPayment from './TopFooterPayment';

function TopFooter() {
    return (
        <div className={style.footer_top}>
            <div className="container">
                <div className="row">
                    <TopFooterLogoSection />
                    <TopFooterNavigation />
                    <FooterTopGetInTouch />
                    <TopFooterPayment />
                </div>
            </div>
        </div>
    )
}

export default TopFooter
