import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Page1 from './Components/Master/CountryMaster/Page1';
import HeaderComponent from './Components/Master/CountryMaster/HeaderComponent';
import FooterComponent from './Components/Master/CountryMaster/FooterComponent';
import addCountryDetails from './Components/Master/CountryMaster/addCountryDetails';
import showCountryDetails from './Components/Master/CountryMaster/showCountryDetails';
import updateCountryDetails from './Components/Master/CountryMaster/updateCountryDetails';
import deleteCountryDetails from './Components/Master/CountryMaster/deleteCountryDetails';


function App() {
  return (
    <div className="App">
        <Router>
      <div className = "container">
      <div>
      <HeaderComponent/>
        <Switch>
          <Route path = "/" exact component = {Page1}></Route>
          <Route path = "/addCountryDetails"  component = {addCountryDetails}></Route>
          <Route path = "/showCountryDetails"  component = {showCountryDetails}></Route>
          <Route path = "/updateCountryDetails/:id"  component = {updateCountryDetails}></Route>
          {/* <Route path = "/deleteCountryDetails"  component = {deleteCountryDetails}></Route> */}
          
        </Switch>
      </div>
      <FooterComponent/>
    </div>
    </Router>
    </div>
  );
}

export default App;
