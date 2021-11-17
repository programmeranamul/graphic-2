import Link from "next/link"
import style from "../../styles/components/FreeTrialOrGetQuate.module.css"

function FreeTrialOrGetQuate() {
    return (
        <section className={style.FreeTrialOrGetQuate}>
            <article className='container'>
                <div className={"d-flex align-items-center justify-content-center flex-wrap"}>
                    <p className="me-2 mb-0">We are dedicated to editing photos in your style and enhancing perfection.</p>
                    <div className={`my-3 my-lg-0 ${style.btn_container}`}>
                        <Link href="/"><a className={style.free_trail_btn}>Free Trial</a></Link>
                        <Link href="/"><a className={style.get_quate_btn}>Get Quote</a></Link>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default FreeTrialOrGetQuate
