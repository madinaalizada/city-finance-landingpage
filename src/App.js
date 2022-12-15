import './App.css';
import Campaigns from './Components/Campaigns';
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Header/>
      <div className='mainpage-container'>
        <MainPage/>
        <Campaigns/>
      </div>
    </div>
  );
}

export default App;
