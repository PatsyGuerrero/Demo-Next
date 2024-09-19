import "./hero.scss"
import "../sass/_titles.scss"

const Hero = () => (
  <section className="heroCleo">
    <div className="containerHero">
      <div className="containerHero__info">
        <div className="containerHero__text">
          <h1 className="text-color-mg-light level-five">
            Póliza de Inversión
          </h1>

          <div className="containerHero__main">
            <p id="mainText" className="text-size-titular">
              Multiplica tu dinero con un Depósito a Plazo Fijo
            </p>
              <div className="text-size-subtitular">
                Invierte sin costo, desde $100 por un mínimo de 31 días, y gana intereses desde 6.20% hasta 8.35%
              </div>
          </div>
          <ul className="containerHero__item">
              <li className="text-size-subtitular">
                Completa el proceso 100% en línea y sin costo.
              </li>
              <li className="text-size-subtitular">
                Selecciona un plazo desde 31 hasta 720 días.
              </li>
              <li className="text-size-subtitular">
                Realiza seguimiento de tu inversión desde la app.
              </li>
          </ul>
        </div>

        {/* <div className="containerHero__actions">
          {data?.botones &&  (
            <div className="containerHero__buttons">
              {data?.botones?.map((item, index) => {
                return <><ButtonPrimary data={item} key={index} /></>
              })}
            </div>
          ) 
        }
          <div className="containerHero__review">{data?.textInfo}</div>
        </div> */}
      </div>

      <div className="containerHero__left">
        <img
          alt=""
          src="https://www.bancoguayaquil.com/static/9f6e482a0e827b75c2bf0b6cacd342d9/a5772/Desktop1_2500x2500x150px.webp"
          title=""
          className="imageComponent"
          width="500px"
        />
      </div>
    </div>
  </section>
);

export default Hero;
