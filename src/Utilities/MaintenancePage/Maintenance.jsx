import RainfallAnimation from "../../animations/RainfallAnimation"
import "./Maintenance.css"
import { Link } from "react-router-dom"

export default function Maintenance() {
  return (
    <>
      <div className="box_principal">
        <RainfallAnimation />
      </div>
      <div className="container-error">
        <img
          src="	https://rype-app.vercel.app/assets/svg/rover.svg"
          alt=""
          className="img-sinal"
        />
        <div className="box-aviso">
          <h1>Recebendo sinal...</h1>
          <h3>Repito, sinal em 70%. Câmbio!</h3>
          <h4>Ei, sinal quase concluído.</h4>
          <p>Em breve você vai conseguir visualizar essa página.</p>
          <Link to="/" className="link-no-outline">
            <button className="button_link_home">VOLTAR PARA HOME</button>
          </Link>
        </div>
      </div>
    </>
  )
}
