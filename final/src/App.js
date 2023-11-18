// import logo from './logo.svg';
import './css/style.scss';
import './css/main.scss';


// components
import NaviHeader from './components/Navi';
import Background from './components/Background';
import Table_grid from './components/Table_grid';
import Grida from './components/Grid';

function App() {
  return (
    <div className="App wrapper">
      <Background />
      <NaviHeader />
      <Grida />
      <Table_grid />
    </div>
  );
}

export default App;
