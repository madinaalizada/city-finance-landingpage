import './App.css';
import Campaigns from './Components/Campaigns';
import SideBar from './Components/SideBar';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <MainPage/>
      <Campaigns/>
    </div>
  );
}

export default App;
