import React from 'react'
import Libro from "../images/libro.jpg"
import Image from 'react-bootstrap/Image';

const Logros = () => (
  <section>
    <div>
      <hr/>
      <h1>Logros</h1>
    </div>
    <div>
      <p>El software (programa informático) que hace funcionar cualquier dispositivo tecnológico con el que interactuamos ―desde un teléfono móvil a un servidor gigante― está escrito por humanos en un lenguaje de programación de nivel superior que luego es traducido (compilado) para su ejecución por la máquina en un código de nivel inferior. Un compilador, explica Ricardo Peña, catedrático de Lenguajes y Sistemas Informáticos de la Universidad Complutense de Madrid, <i>“es un tipo de programa muy complejo encargado de dicha traducción, que se realiza en varias fases”</i>.</p>
      <p><i>“En primer lugar, hay un análisis gramatical, en el que es imprescindible una teoría llamada de autómatas. A continuación, se produce la detección de errores, tanto gramaticales como de las reglas semánticas del lenguaje. Después, se genera el código y por último, tiene lugar la optimización”</i>, detalla Peña. Tanto Ullman como Aho son pioneros en este tema de la compilación; en análisis de la complejidad de los algoritmos y en bases de datos. Y sobre todo, han volcado muchas energías en poner al alcance de los estudiantes toda esa información de forma asequible para su estudio.</p>
      <p>Gabriel Kotsis recordó que <i>“la programación informática y el desarrollo de sistemas de software cada vez más avanzados sustentan casi todas las transformaciones tecnológicas que ha experimentado la sociedad en las últimas cinco décadas”</i>. Y añadió: <i>“Si bien numerosos investigadores han contribuido a estas tecnologías, el trabajo de Aho y Ullman ha sido especialmente influyente. Han sido líderes de opinión desde principios de la década de 1970 y su trabajo ha guiado a generaciones de programadores hasta el día de hoy”</i>.</p>
      <p>Aho y Ullman son coautores de nueve libros. En su comunicado, la ACM destaca dos de ellos, El diseño y análisis de los algoritmos computacionales (1974), uno de los primeros libros sobre algoritmos disponibles para estudiantes, y Principios del diseño compilador (1977), conocido como <i>“el libro del dragón”</i> por el diseño de su portada y que es todavía hoy el manual más usado en la asignatura del mismo nombre. A estos dos libros, Peña añade un tercero sobre estructuras de datos y algoritmos (1983), escrito junto con otro autor (J.E. Hopcroft), que también se ha convertido en un clásico en la Ingeniería Informática.</p>
    </div>
    <div className='contenido-centrado'>
    <Image src={Libro} roundedCircle/>
    </div>
  </section>
)

export default Logros