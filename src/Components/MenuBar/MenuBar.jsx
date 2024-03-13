import "./MenuBar.css"
import NavBar from "../NavBar/NavBar"

export default function MenuBar(){
  return (
    <div className="menu__top">
      <div className="logos">
        <img
          src="	https://rype-app.vercel.app/assets/img/logo-web-menu.png"
          alt=""
          className="logo1"
        />
        <img
          src="https://rype-app.vercel.app/assets/img/RYPE.png"
          alt=""
          className="logo2"
        />
      </div>
      <NavBar />
    </div>
  )
}