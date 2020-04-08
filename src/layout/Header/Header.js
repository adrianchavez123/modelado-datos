import React from 'react';
import './Header.css';
import DataCheck32 from '@carbon/icons-react/es/data--check/32';
import { HashLink as Link } from 'react-router-hash-link';
const header = props => {
  return (
    <nav className="header">
      <span className="title"><DataCheck32 style={{background:'#0f62fe'}}/>Modelado de datos</span>
      <Link smooth to="#posts">ARTICULOS</Link>
      <Link smooth to="#dataset">DATASET</Link>      
      <Link smooth to="#metrics">METRICAS</Link> 
    </nav>
  );
}
export default header;