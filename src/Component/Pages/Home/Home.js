import "./Home.css";
import { useState } from "react";
const Home = () => {
  const [details, setDetails] = useState([
    {
      productName: "Salam",
      ProductID: 1,
    },
    {
      productName: "Hallo",
      ProductID: 2,
    },
    {
      productName: "Guten Tag",
      ProductID: 3,
    },
  ]);
  return (
    <div className="app">
      <h1 className="title">Lernen Sie jetzt einfach Deutsch!</h1>
      <div className="captions">
        <p className="caption__title">
          Sie können ganz einfach bis 6 Monaten Ihre Sprache verbessern!
        </p>
        <p className="moreCaptions">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          consequatur culpa earum eveniet ex excepturi modi molestiae nulla
          pariatur quaerat quam qui quis quod sunt tempora tenetur ut vel
          voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aliquam, consequatur culpa earum eveniet ex excepturi modi molestiae
          nulla pariatur quaerat quam qui quis quod sunt tempora tenetur ut vel
          voluptatem.
          <br />
          <br />
          Wir bringen Ihnen für Geothe und Telc Prüfungen bei!
          <br />
          <div className="logos">
            <img src={process.env.PUBLIC_URL + `images/geothe.svg`} alt="" />
            <img src={process.env.PUBLIC_URL + `images/telc.svg`} alt="" />
          </div>
        </p>
      </div>
      <div className="plans">
        <div className="plan freePlan">
          <p className="plan__title">Kostenlos</p>
          <ul className="options">
            <li className="option">Kleines Wörterbuch.</li>
            <li className="option">Kleine Kurse.</li>
            <li className="option">eine freie Prüfung.</li>
          </ul>
          <button className="accessPlan">Kostenlos</button>
        </div>
        <div className="plan vipPlan">
          <p className="plan__title">VIP</p>
          <ul className="options">
            <li className="option">normales Wörterbuch.</li>
            <li className="option">normale Kurse.</li>
            <li className="option">zehn freie Prüfungen.</li>
          </ul>
          <button className="accessPlan">3,99€ pro Monat</button>
        </div>
        <div className="plan professionalPlan">
          <p className="plan__title">Professional</p>
          <ul className="options">
            <li className="option">großes Wörterbuch.</li>
            <li className="option">beste kurse.</li>
            <li className="option">alle freie Prüfungen.</li>
          </ul>
          <button className="accessPlan">5,99€ pro Monat</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
