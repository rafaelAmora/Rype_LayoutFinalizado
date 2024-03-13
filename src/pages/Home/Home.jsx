import Header from "../../Components/Header/Header"
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home(){
  return (
    <>
      <Header />
      <section className="section-home">
        <div className="home">
          <h1>Rype sua Plataforma Gamer</h1>
          <p>Chegamos para revolucionar 😎</p>
          <button className="btn-register">EMBARCAR</button>
        </div>
        <div
          className="
presentation"
        >
          <div className="box-image-rocket">
            <img
              src="https://rype-app.vercel.app/assets/svg/rocket.svg"
              alt=""
              className="img-rocket"
            />
          </div>
          <div className="text">
            <h1>Conheça nosso universo</h1>
            <p>
              Aqui você encontra diversas funcionalidades para elevar o seu jogo
              para o próximo nível, tem muita coisa legal, então se cadastre
              agora mesmo.
            </p>
          </div>

          <div className="cards-infos">
            <div className="card_i">
              <div className="box-img-phone">
                <img
                  src="https://rype-app.vercel.app/assets/img/gerencie.png"
                  alt=""
                  className="img-phone"
                />
              </div>
              <div className="text-item">
                <h3>GERENCIE O SEU TIME</h3>
                <p>
                  Cadastre os membros e os mantenha todos informados sobre os
                  eventos disponíveis.
                </p>
              </div>
            </div>

            <div className="card_i">
              <div className="box-img-phone">
                <img
                  src="https://rype-app.vercel.app/assets/img/eventos.png"
                  alt=""
                  className="img-phone"
                />
              </div>
              <div className="text-item">
                <h3>ORGANIZE SEUS EVENTOS</h3>
                <p>
                  Com essa funcionalidade você pode gerenciar e permitir o
                  check-in dos participantes em seus eventos de X-Treino ou
                  Campeonatos.
                </p>
              </div>
            </div>

            <div className="card_i">
              <div className="box-img-phone">
                <img
                  src="https://rype-app.vercel.app/assets/img/organize.png"
                  alt=""
                  className="img-phone"
                />
              </div>
              <div className="text-item">
                <h3>DIVULGUE</h3>
                <p>
                  Além de gerenciar todas as inscrições dos eventos, divulgue os
                  seus Campeonatos e X-Treino para todos os membros cadastrados
                  em nossa Plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
more-information"
        >
          <div className="box-information">
            <h1>
              Gostou? para conheçer melhor a Rype é só clicar no botão ao lado
              🚀
            </h1>
            <Link to="/About" className="link-no-outline">
              <button className="button_about">SOBRE NÓS</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}