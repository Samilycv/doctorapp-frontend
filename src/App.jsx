
import { Route, Routes } from 'react-router-dom';
import AllDoctor from './AllDoctor/AllDoctor';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ViewDoctor from './ViewDoctor/ViewDoctor';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {/*localhost:3000*/}
        <Route path="/" element={<AllDoctor/>}/>
        {/*localhost:3001/view/1*/}
        <Route path="/view/:id" element={<ViewDoctor/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
