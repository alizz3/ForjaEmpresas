import './Main.css'
import barraForja from './img/barra.jpeg'
import iconFlechaDerecha from './img/7.flechaderecha.svg'
import iconQuestion from './img/8.question-circle-solid.svg'
import iconOms from './img/5.oms.png'

function Main() {
   return (
      <main id="main-body-index">
         <div class="banner">
            <div class="text-banner-index">
               <h2>Unidos ganaremos la batalla</h2>
               <h1>Covid-19</h1>
               <a href="#" class="button-log-mobile"><i class="fa-solid fa-user-nurse"></i></a>

               <a href="#" class="animate2 button-log-iniciar-banner">Iniciar sesión <i
                  class="fa-solid fa-user-nurse"></i></a>
            </div>
         </div>

         <img src={barraForja} alt="" id="barra-forja"/>

            <div id="information-index">
               <div class="information-left">
                  <div class="article-1">
                     <div class="tittle-information-1">
                        <img src={iconFlechaDerecha} alt=""/>
                           <h2>Signos compatibles con Covid-19</h2>
                     </div><br/>
                        <div class="sintomas-index">
                           <ul>
                              <li>Fiebre de 37.5º o más</li>
                              <li>Dolor de garganta</li>
                              <li>Tos y dificultad respiratoria</li>
                              <li>Dolor de cabeza</li>
                              <li>vómito y diarrea</li>
                           </ul>
                        </div>
                  </div>
               </div>

               <div class="information-right">
                  <div class="article-2">
                     <div class="tittle-information-2">
                        <img src={iconQuestion} alt=""/>
                           <h2>ㅤ¿Que hacer?</h2>
                     </div>
                     <div class="hacer-index">
                        <p>sí diagnósticas más de 2 síntomas, aísla de inmediato al paciente y procede a realizar cuanto
                           antes el hisopado para confirmar o descartar COVID-19</p>
                     </div>
                  </div>
                  <div class="oms-curso">
                     <img src={iconOms} alt=""/>
                        <a href="">curso online nuevo coronavirus Oms</a>
                  </div>
               </div>
            </div>

            <section id="other-information-index">
               <a href="#" class="other-information-1">Enfermedad por coronavirus (COVID-19): Accesibilidad y asignación de
                  las vacunas</a>
               <a href="#" class="other-information-2">Seguridad de las vacunas contra el COVID-19 | CDC</a>
               <a href="#" class="other-information-3">Luego de la vacunación ¿qué síntomas se pueden presentar?</a>
               <a href="#" class="other-information-4">Lineamiento técnico para la gestión de residuos de la vacunación
                  Covid-19</a>
               <a href="#" class="other-information-5">Recomendaciones generales al tener contacto con personas
                  infectadas</a>
            </section>
      </main>
   )
}

export default Main
