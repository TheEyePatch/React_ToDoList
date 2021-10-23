import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CategoriesPage from './pages/CategoriesPage';
import Task from './components/Task'


function App() {
  return (
   <div>
    <NavBar/>
    <Switch>
      <Route path='/categories' exact>
        <CategoriesPage/>
      </Route>
    </Switch>
    
   </div>
  );
}

export default App;
