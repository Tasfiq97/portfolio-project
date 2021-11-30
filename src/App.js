import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home/Home';
import Project1 from './Pages/ProjectDetails/Project1/Project1';
import Project2 from './Pages/ProjectDetails/Project2/Project2';
import Project3 from './Pages/ProjectDetails/Project3/Project3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
 <Route  path="/" element={<Home></Home>}>

 </Route>
 <Route  path="/home" element={<Home></Home>}></Route>
 <Route  path="/project1" element={<Project1></Project1>}></Route>
 <Route  path="/project2" element={<Project2></Project2>}></Route>
 <Route  path="/project3" element={<Project3></Project3>}></Route>
 <Route  path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
