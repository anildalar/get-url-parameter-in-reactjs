import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={ Home }></Route>
      <Route path="/blog/:blogid" component={ Blog  }></Route>
    </BrowserRouter>
  );
}

export default App;
