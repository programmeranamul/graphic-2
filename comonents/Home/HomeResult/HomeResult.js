import style from "../../../styles/home/HomeResult.module.css";

function HomeResult() {
  return (
    <section className={style.section}>
      <article className="container">
        <div className="row">
          <div className="col-md-5">
            <p className={style.title}>Our Results</p>
            <p className={style.we_done}>What we done?</p>
          </div>
          <div className="col-md-7">
              <div className="row">
              <div className="col-md-4">
                  <p className={style.count}><span>150</span>+ </p>
                  <p className={style.after_count}>Image Editors</p>
              </div>
              <div className="col-md-4">
                  <p className={style.count}><span>8</span>+ </p>
                  <p className={style.after_count}>Years</p>
              </div>
              <div className="col-md-4">
                  <p className={style.count}><span>250</span>+ </p>
                  <p className={style.after_count}>Happy Clients</p>
              </div>
              </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default HomeResult;
