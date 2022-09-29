import logo from './logo.svg';
import './App.css';
import AllSports from './components/AllSports/AllSports';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <div className='main-bg'>
      <div className="container-fluid">
        <AllSports></AllSports>
        <Faq></Faq>
      </div>
    </div>
  );
}

export default App;
