import "./App.css";
import AppMenu from "./components/appMenu/AppMenu";
import Navbar from "./components/navbar/Navbar";
import { card_content } from "./data";
function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="main">
        <div className="card_flex">
          {card_content.slice(0, 4).map((card) => (
            <div className="card" key={card.id}>
              <img src={card.icon} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
        <div className="sec_wrapper">
          <div className="container">
            <p>CODE CLAIM</p>
          </div>
        </div>
        <div className="card_flex">
          {card_content.slice(4, 8).map((card) => (
            <div className="card" key={card.id}>
              <img src={card.icon} alt={card.name} />
              <p>{card.name}</p>
            </div>
          ))}
        </div>
        <div className="container_flex">
          <div></div>
          <div></div>
        </div>
      </div>
      <AppMenu />
    </div>
  );
}

export default App;
