import CartWidget from './CartWidget'
import {Link} from "react-router-dom"

const NavBar = () =>
    <header>
        <Link to="/">
            <h1>Mi E-Commerce</h1>
        </Link>

        <nav>
            <Link to="/categoria/1">categoria 1</Link>
            <Link to="/categoria/2">categoria 2</Link>
            <CartWidget/>
        </nav>
    </header>

export default NavBar