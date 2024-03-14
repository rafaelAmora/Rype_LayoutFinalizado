import "./Forms.css"
import { Link } from "react-router-dom"


export default function Forms (){
  return (
    <div className="Forms-Login">
      <h1>Fazer Login</h1>
      <form action="" className="Forms_infos">
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
        <p>ESQUECEU A SENHA ?</p>
        <button className="Create__button"> Login</button>
        <p>
          Não tem uma conta?{" "}
          <Link to="/RegisterPage" className="link-no-outline">
            <span id="link-loginRigister-forms">Registre-se</span>
          </Link>
        </p>
      </form>
    </div>
  )
}