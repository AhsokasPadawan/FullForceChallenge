import './App.css';
import {Route} from 'react-router-dom';
import Home from './Components/Home';
import FullCard from './Components/FullCard';

function App() {
  return (
    <div className="App">
      <Route exact path='/home' component={Home}></Route>
      <Route path='/home/:id' render = {({match})=> <FullCard dogId={match.params.id} />}></Route>
    </div>
  );
}

export default App;