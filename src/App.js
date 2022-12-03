import './App.css';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<div>로그인페이지</div>}></Route>
        <Route path="/todo" element={<div>todolist</div>}></Route>
      </Routes>



    </div >
  );
}

export default App;
