import React from 'react'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Ahoulmman from "../images/aho_ullman.jpg";

const Historia = () => (
  <section>
    <div>
      <hr/>
      <h1>Historia</h1>
    </div>
    <div className="contenido-centrado">
      <p>El canadiense Alfred Vaino Aho (79 años), profesor emérito de la Universidad de Columbia, y el estadounidense Jeffrey David Ullman (78 años), profesor emérito de la Universidad de Stanford, han sido distinguidos con el premio Turing de 2020, conocido como el nobel de la informática. El galardón lo entrega cada año la ‘Association for Computing Machinery (ACM)’ entre quienes hayan contribuido de manera destacada al avance de la ciencia de la computación.</p>
      <Card>
        <Card.Body>
          <Image src={Ahoulmman} rounded/>
        </Card.Body>
      </Card>
      <p><i>Alfred Vaino Aho y Jeffrey David Ullman</i></p>
    </div>
    <hr/>
    <div>
      <p>La ACM asegura en un comunicado en su página, que Aho y Ullman se han hecho merecedores del premio por su contribución al diseño y análisis de los algoritmos, por contribuir a los fundamentos de los lenguajes de programación de los ordenadores y su compilación, y por sintetizar estos resultados en sus libros, muy influyentes, <i>“que han educado a varias generaciones de científicos informáticos”</i>.</p>
      <p>La colaboración entre Ullman y Aho comenzó en 1967 durante su etapa en Bell Labs, histórico centro de investigación de AT&T. Los dos profesores ayudaron a describir la tecnología de compiladores y abrir la puerta a traducir programas de alto nivel en códigos máquina de bajo nivel.</p>
      <p>El software (programa informático) que hace funcionar cualquier dispositivo tecnológico con el que interactuamos ―desde un teléfono móvil a un servidor gigante― está escrito por humanos en un lenguaje de programación de nivel superior que luego es traducido (compilado) para su ejecución por la máquina en un código de nivel inferior. Un compilador, explica Ricardo Peña, catedrático de Lenguajes y Sistemas Informáticos de la Universidad Complutense de Madrid, <i>“es un tipo de programa muy complejo encargado de dicha traducción, que se realiza en varias fases”</i>.</p>
    </div>
    <hr/>
    <h1>¿Quienes son?</h1><br/>
    <div>
      <h3>Alfred V. Aho</h3>
      <p>Alfred Vaino Aho es un informático teórico. Sus ocupaciones incluyen trabajar para los laboratorios Bell y ser profesor de Computación en la Universidad de Columbia. Se hizo famoso por su creación, el lenguaje de programación AWK (la A viene de Aho), obra que realizó en conjunto con Brian Kernighan y Peter J.</p>
    </div>
    <br/>
    <div>
      <h3>Jeffrey D. Ullman</h3>
      <p>Jeffrey David Ullman es un connotado informático teórico estadounidense. Sus libros de texto sobre compiladores, teoría de computación, estructuras de datos y bases de datos son considerados como libros estándar en estos campos.</p>
    </div>
  </section>
)

export default Historia