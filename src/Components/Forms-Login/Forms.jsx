import "./Forms.css"


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
        <p>Não tem uma conta? Registre-se</p>
      </form>
    </div>
  )
}