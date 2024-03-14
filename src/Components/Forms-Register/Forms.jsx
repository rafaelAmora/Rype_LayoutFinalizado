import "./Forms.css"
import { Link } from "react-router-dom"

export default function FormsRegister() {
  return (
    <div className="Forms-Register">
      <h1>Criar Conta</h1>
      <form action="" className="Forms_infos">
        <input type="text" placeholder="Nickname" className="Inputs" />
        <input type="text" placeholder="Nome" className="Inputs" />
        <input type="date" name="" id="" className="Inputs" />
        <input type="text" placeholder="Celular" className="Inputs" />
        <input
          type="email"
          name=""
          id=""
          placeholder="Email"
          className="Inputs"
        />
        <input
          type="password"
          name=""
          id=""
          className="Inputs"
          placeholder="Senha"
        />
        <div className="termos-info">
          <input type="checkbox" name="" id="termos" />
          <label htmlFor="termos" className="termos">
            Aceitar termos da plataforma TERMOS
          </label>
        </div>
        <button className="Create__button"> Criar Minha conta</button>
        <p>
          Já tem conta?{" "}
          <Link to="/LoginPage" className="link-no-outline">
            <span id="link-loginRigister-forms">Fazer login</span>
          </Link>
        </p>
      </form>
    </div>
  )
}
