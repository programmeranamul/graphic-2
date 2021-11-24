import style from "../../../styles/AboutUs/MessionVission.module.css";

function MessionVission() {
  return (
    <section className={style.section}>
      <div className="container">
        <div className="row w-100 mx-auto">
          <article className="col-md-6">
            <div className={style.content}>
              <h3> Our Mission</h3>
              <p> On a regular basis, we look at a large number of photographs, and the quality of those photos has an impact on how people perceive your photography. Our goal is to transform those photographs into a work of art that tells its own story in exquisite detail, using skilled professionals who have years of experience. So that, we able to make a good relationship with our clients.</p>
            </div>
          </article>
          <article className="col-md-6">
            <div className={style.content}>
              <h3> Our Vision</h3>
              <p>  Our vision is to be the industry expert and a role model for a young generation of local outsourcing companies that specialize at customer service through proactive, empowered workers, smart technology, and a broad variety of high-quality services and goods.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default MessionVission;
