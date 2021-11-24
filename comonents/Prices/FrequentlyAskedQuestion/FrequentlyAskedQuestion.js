import style from "../../../styles/Prices/Prices.module.css";

const datas = [
  {
    qus: "Is there any discount if I order a large quantity?",
    ans: "We certainly do! A discount can be bestowed if a customer submits a project at least 100 photographs, and it raised up to 30% based on the image quantity and image classifications.",
  },
  {
    qus: "What Payment Method Do You Use?",
    ans: "We have a safe and simple payment method in place. Credit card payments can be made via PayPal. We also receive checks from US customers, as well as standard banking transactions.",
  },
  {
    qus: "Can I get free trials to check your service quality?",
    ans: "Undoubtedly you will get 2-3 free trials to check our working quality.",
  },
  {
    qus: "Are you able to provide rush delivery service?",
    ans: "Our rush service is the perfect option whenever you need to process a huge number of photographs in a short amount of time. This service offers a unique facility for completing tasks rapidly.",
  },
];

function FrequentlyAskedQuestion() {
  return (
    <section className={style.FrequentlyAskedQuestion_section}>
      <div className="container">
        <h2> Some Frequently asked question(FAQ) by Our Clients</h2>
     
{
    datas.map((data, index) => <div key={index}>
        <p className={style.qus}>{data.qus}</p>
        <p className={style.ans}>{data.ans}</p>
    </div>)
}
 

      </div>
    </section>
  );
}

export default FrequentlyAskedQuestion;
