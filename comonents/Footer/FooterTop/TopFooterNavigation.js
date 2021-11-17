import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import style from "../../../styles/components/Footer/TopFooter.module.css"
import Link from "next/link"


const links = [
    {text: "Home", path:"/"},
    {text: "Services", path:"/"},
    {text: "Prices", path:"/"},
    {text: "About Us", path:"/"},
    {text: "Contact", path:"/"},
    {text: "Free Trial", path:"/"},
    {text: "Blog", path:"/"},
]

function TopFooterNavigation() {
    return (
        <div className="col-md-2 col-sm-6">
            <h4 className={style.title}>Navigation</h4>
            <div>
                {
                    links.map((link, index) =><p className={style.link} key={index}><Link href={link.path}>
                    <a className="text-white"><FontAwesomeIcon icon={faAngleDoubleRight} alt={link.text} className={style.top_footer_icon}/> <span>{link.text}</span></a>
                    </Link></p> )
                }
                
            </div>
        </div>
    )
}

export default TopFooterNavigation
