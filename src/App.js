// import Login from './components/login';
import ToDo from './components/todo';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/login';
import Output from './components/output';
import './App.css';

function App() {
  return (
    <>
      {/* <Login/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/output' element={<Output/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
