import logo from './logo.svg';
import './App.css';

import CompanyName from './components/CompanyName';
import AddInfo from './components/AddInfo';
import CardCont from './components/CardCont';

const response = [
  {
    compName : "Microsoft India",
    industry:"Computer Software",
    founded : "1999",
    founder : "Bill Gates"
  },
  {
    compName : "Netflix India",
    industry:"	OTT streaming platform",
    founded : "January 16, 2007",
    founder : "Marc Randolph"
  },
  {
    compName : "Amazon India",
    industry:"E Commerce",
    founded : " July 5, 1994",
    founder : "	Jeff Bezos"
  }
];

function App() {
  return (
      <div>
         <CardCont> 
          <div>
            
        <p className='Footer' >Major foreign companies that have invested in the IT sector in India </p>

        <CompanyName Name = {response[0].compName} > </CompanyName>
        <AddInfo industry={response[0].industry} year={response[0].founded} founder = {response[0].founder}></AddInfo>

        <CompanyName Name = {response[1].compName} > </CompanyName>
        <AddInfo industry={response[1].industry} year={response[1].founded} founder = {response[1].founder}></AddInfo>

        <CompanyName Name = {response[2].compName} > </CompanyName>
        <AddInfo industry={response[2].industry} year={response[2].founded} founder = {response[2].founder}></AddInfo>
          
      </div>
     </CardCont>
      </div>
  );
}

export default App;
