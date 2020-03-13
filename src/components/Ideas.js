import React from 'react';
import magazine from '../assets/magazine.svg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import map from "../assets/map.webp";
import hamburger from "../assets/hamburger.webp";
import beach from "../assets/beach.webp";
import bedroom from "../assets/bedroom.webp";
export default function() {

  return (<>

    <style type="text/css">{`
    .photosRow {
      display: inline-block;
      margin-right: 14px;
      width: 250px;
    }
    .mhp-visual__container {
      background-color: #9ba2a6;
      border-radius: 2px;
      box-shadow: 0 1px 4px rgba(41,51,57,.5);
      height: 0;
      overflow: hidden;
      padding-bottom: 100%;
    }
    .caption {
      color: #757575;
      font-size: 14px;
      margin: 8px 0;
    }
    `}</style>

    <Container style={{marginLeft: 32}}>
      <Row>

        <h5 style={{fontWeight: 700}}>¿Necesitás ideas para tu próximo viaje?</h5>
        <p>Descubrí las mejores experiencias en hoteles en los más de 140 artículos de trivago Magazine, desde hoteles boutique en Mendoza hasta casas de campo encantadoras en Córdoba.</p>
        <img src={magazine} alt='' />

      </Row>


      <Row style={{overflow: 'hidden', marginRight: -31}}>
        <ul style={{whiteSpace: 'nowrap', padding: 0, overflow: 'hidden'}}>

          {[{src:map, articulos: '30+ articulos'}, {src:hamburger, articulos: '30+ articulos'}, {src:beach, articulos: '20+ articulos'}, {src:bedroom, articulos: '140+ articulos'}]
            .map(e => {return (
              <li className='photosRow' key={e.src}>
                <div className='mhp-visual__container'>
                  <img className='item'
                       src={e.src}
                       alt="" />
                </div>
                <span className='caption'>{e.articulos}</span>
              </li>
            )})}
        </ul>
      </Row>

    </Container>
  </>)
}