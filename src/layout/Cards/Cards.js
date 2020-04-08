import React, { useState } from 'react';
import './Cards.css';
import Card from './Card/Card';
import post1 from '../../assets/post1.jpg';
import post2 from '../../assets/post2.jpg';
import post3 from '../../assets/post3.jpg';
const Cards = props => {
  const [posts,setPost] = useState([
    {title:"Crece cifra de mexicanos que emigra para estudiar",
    body:"Aunque la población estudiantil que estudia fuera del país representa una muy pequeña parte de la población emigrante de México, en los últimos años este es un segmento que ha crecido. A escala global, se estima que el conjunto de países que integran la Organización para la Cooperación y el Desarrollo Económicos (OCDE) tenía una población cercana a los 2.3 millones de estudiantes internacionales en 2008, cifra que creció a 3.4 millones para 2016.",
    imgSrc:post1,
    url:"https://www.milenio.com/negocios/crece-cifra-de-mexicanos-que-emigra-para-estudiar"
  },
  {title:"Canadá, en el radar de los jóvenes que buscan estudiar en el extranjero",
    body:"En 2019 y 2020 la mirada de los jóvenes apunta hacia Canadá. Muchos buscan emigrar a ese país para estudiar y luego conseguir un empleo. El gobierno de Canadá otorga anualmente cientos de becas a estudiantes de América Latina. Lo hace a través del programa Líderes Emergentes en las Américas (ELAP), que incluso entrega un estipendio de USD 5.300.",
    imgSrc:post2,
    url:'https://www.primicias.ec/noticias/sociedad/canada-jovenes-estudios-extranjero/'
  },
  {title:"Ellas creen,ellas crean",
    body:"El camino para hacer ciencia en nuestro país es todavía árido, pero las investigadoras Laura Mereles, Natalia Cabrera, Alicia Arévalos y Cecilia Lamosas no se amilanan. Trabajan, se capacitan,miran al futuro y esperan lo mejor.",
    imgSrc:post3,
    url:'https://www.abc.com.py/edicion-impresa/suplementos/abc-revista/2020/03/08/ellas-creen-ellas-crean/'
  },
  ]);
  return (
      <section>
        <div className="cards">
          { posts.map( (post,i) => (<div className="col-md-4" key={"Card-"+i}>
              <Card {...post}/>
          </div>))}
        </div>
      </section>
    );
}

export default Cards;