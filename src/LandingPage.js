import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function LandingPage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
        <div className="landing-container">
            <div className="welcome">
                <h1>UNITTRACKER</h1>
            </div>
            <div className="welcome-info">
                <h2>Hej och välkommen!</h2>
                <h4>Skriv in ditt program, så löser vi resten.</h4>
                <Dropdown className="drop" options={options} placeholder="Välj ditt program"/>
            </div>
            <div className="buttonEnter">
            <Link to="/home"><button>
                HÅLL KOLL!
              </button></Link>
            </div>
            <div className="changeToCourse">
              <h6>Växla till kurser</h6>
            </div>
        </div>
    </body>
  );
}

export default LandingPage;
