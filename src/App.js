import logo from 'react';
import './App.css';
import Menu from './component/Menu';
import Slider from './component/slider';
import Footer from './component/Footer';
import Comment from './component/Comment';


// React functional Component

function App() {
  return (
    <div className="container-fluid">
      <Menu/>
      <Slider/>
      <Comment/>
      <Footer/>
    </div>
  );
}

export default App;
