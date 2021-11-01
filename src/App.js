import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import CategoriesPage from './pages/CategoriesPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import classes from './styles/components/NavBar.module.css'
import styles from './styles/pages/categoriesPage.module.css'

function App() {
  return (
   <div>
    <NavBar className = {classes.nav}/>
    <Switch>
      <Route path='/categories' exact>
        <CategoriesPage class={styles.page}/>
      </Route>
      <Route path='/' exact >
        <HomePage/>
      </Route>
      <Route path='/login' exact>
        <LoginPage/>
      </Route>
    </Switch>
    
   </div>
  );
}

export default App;
