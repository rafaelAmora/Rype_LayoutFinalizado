import { Link } from "react-router-dom"
import "./MenuMobile.css"



export default function MenuMobile({menu}) {

  return (
    <>
      <div className={`container-mobile ${menu ? "menu-open" : ""}`}>
        <nav className="">
          <ul className="navigator-list-Mobile">
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

            <div className="create_user_Mobile">
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
        </nav>
      </div>
    </>
  )
}
