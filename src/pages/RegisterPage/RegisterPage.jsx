import FormsRegister from "../../Components/Forms-Register/Forms"
import Header from "../../Components/Header/Header"
import "./RegisterPage.css"

export default function RegisterPage() {
  return (
    <>
      <Header />
      <div className="Background-space">
        <div className="Welcome-Register">
          <div className="img-logo">
            <img
              src="	https://rype-app.vercel.app/assets/img/logo-web-menu.png"
              alt=""
              className="logo1-Welcome"
            />
          </div>
          <div className="name-site">
            <h1 className="h3">BEM VINDO A</h1>
            <h1 className="h1">RYPE</h1>

            <p className="introduction">
              Sua rede social gamer e comunidade, Conecte-se com seus amigos e
              jogue com nosso sistema de gamificação e medalhas.
            </p>
          </div>
        </div>
        <FormsRegister />
      </div>
    </>
  )
}
