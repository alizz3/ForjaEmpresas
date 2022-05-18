import './Header.css'
import logo from './img/0.logoforja.png'
import iconPhone from './img/TELEFONO_ICO_DESK.png'
import iconLocate from './img/POINT_ICO_DESK.png'
import iconSyringe from './img/syringe-solid.svg'

function Header() {
  return (
    <header id="header-index">
      <div class="header-index-container">

        <div class="index-head-left">
          <img src={logo} alt="Logo de forja" class="logo-head" />
          <a href="#" class="button-log-mobile"><i class="fa-solid fa-user-nurse"></i></a>
          <a href="#" class="button-log-iniciar-tablet"> Iniciar sesión <i
            class="fa-solid fa-user-nurse"></i></a>
        </div>

        <div class="index-head-right">
          <div class="index-head-top">
            <div class="head-phone">
              <img src={iconPhone} alt=""/>
                <a href="tel:+5717447050">601 744 7050</a>
            </div>

            <div class="head-ubication">
              <img src={iconLocate} alt=""/>
                <a href="https://goo.gl/maps/fJz7nZKd46UvYdp19" target="_blank">Carrera 21 # 98-71 Segundo
                  Piso<br/>Bogotá - Colombia</a>
            </div>

            <div class="button-index-head">
              <a href="login.html" class="button-log-iniciar">Iniciar sesión <i
                class="fa-solid fa-user-nurse"></i></a>
            </div>
          </div>

          <div class="index-head-bottom">
            <img src={iconSyringe} alt="" class="syringe"/>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header
