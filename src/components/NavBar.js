import { Link } from "react-router-dom";
import classes from '../styles/components/NavBar.module.css'

function NavBar(){
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/categories'>Categories</Link>
        </li>
        <li>
          <Link to='/login'>Logout</Link>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;