import React from 'react';
import Cards from '../../layout/Cards/Cards';
import Link32 from '@carbon/icons-react/es/link/16';
const posts = () => {
  return (
  <div style={{display:"grid",justifyItems:'center'}}>
    <a id="posts"></a>
    <h1>Articulos</h1>
    <Cards/>
    <div style={{justifySelf:'start',marginLeft:'20%'}}>
      <h3>Referencias</h3>
      <p><a target="_blank" href="https://www.milenio.com/negocios/crece-cifra-de-mexicanos-que-emigra-para-estudiar"><Link32 style={{background:'white'}}/> https://www.milenio.com/negocios/crece-cifra-de-mexicanos-que-emigra-para-estudiar</a></p>
      <p><a target="_blank" href="https://www.abc.com.py/edicion-impresa/suplementos/abc-revista/2020/03/08/ellas-creen-ellas-crean/"><Link32 style={{background:'white'}}/> https://www.abc.com.py/edicion-impresa/suplementos/abc-revista/2020/03/08/ellas-creen-ellas-crean/</a></p>
      <p><a target="_blank" href="https://www.milenio.com/estilo/canada-busca-jovenes-mexicanos-visa-estudien"><Link32 style={{background:'white'}}/> https://www.milenio.com/estilo/canada-busca-jovenes-mexicanos-visa-estudien</a></p>
      <p><a target="_blank" href="https://www.primicias.ec/noticias/sociedad/canada-jovenes-estudios-extranjero/"><Link32 style={{background:'white'}}/> https://www.primicias.ec/noticias/sociedad/canada-jovenes-estudios-extranjero/</a></p>
      <p><a target="_blank" href="https://www.eleconomista.com.mx/arteseideas/Se-dificulta-acceso-a-fondos-Conacyt-20200212-0050.html"><Link32 style={{background:'white'}}/> https://www.eleconomista.com.mx/arteseideas/Se-dificulta-acceso-a-fondos-Conacyt-20200212-0050.html</a></p>
    </div>
  </div>);
};

export default posts;