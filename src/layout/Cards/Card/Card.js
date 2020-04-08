import React from 'react';
import Button from  'carbon-components-react/es/components/Button';
import DataRefinery32 from '@carbon/icons-react/es/data-refinery/32';
import './Card.css';
const Cards = ({title,body,imgSrc,url}) => {
  const text = body.substring(0,150);
  const pos = text.lastIndexOf(" ");
  const newText = text.substring(0,pos);
  return (
    <div className="card">
      <div className="card-img-top">
        <img src={imgSrc} alt={title}/>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{`${newText} ...`}</p>
      </div>
      {/*<a href={url} target="_black" className="btn">Lee artículo</a>*/}
      <Button style={{fontSize:'1.3rem',display:'flex',alignItems:'space-around'}} onClick={ e =>  window.open(url,'_black')}>Leer artículo<DataRefinery32 style={{background:'#0f62fe'}}/></Button>
    </div>
  );
}

export default Cards;