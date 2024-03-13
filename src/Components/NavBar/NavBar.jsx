import "./NavBar.css"
import { Link } from "react-router-dom"
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react"
import MenuMobile from "../MenuMobile/MenuMobile"

export default function NavBar() {
  const [menu, Setmenu] = useState(false)
  const handleClick = () => {
    Setmenu(!menu)
  }




  return (
    <nav className="">
      {menu ? (
        <MenuMobile menu={menu} />
      ) : (
        <ul className="navigator-list">
          <Link to="/" className="link-no-outline">
            <li className="nav_pages">HOME</li>
          </Link>
          <Link to="/About" className="link-no-outline">
            <li className="nav_pages">A RYPE</li>
          </Link>

          <Link to="/Events" className="link-no-outline">
            <li className="nav_pages">EVENTOS</li>
          </Link>
          <Link to="/Trenings" className="link-no-outline">
            <li className="nav_pages">TREINOS</li>
          </Link>

          <Link to="/Contact" className="link-no-outline">
            <li className="nav_pages">CONTATO</li>
          </Link>

          <div className="create_user">
            <Link to="/LoginPage" className="link-no-outline">
              <li>
                <button>ENTRAR</button>
              </li>
            </Link>

            <Link to="/RegisterPage" className="link-no-outline">
              <li>
                <button className="button_register">REGISTRAR</button>
              </li>
            </Link>
          </div>
        </ul>
      )}
      <CiMenuFries className="btn-mobile" onClick={handleClick} />
    </nav>
  )
}
