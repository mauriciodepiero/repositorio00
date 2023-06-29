import React from 'react';
import imagen from '../img/fondo07.png';

const myStyle = { background: 'green', color: 'white' };

const HomeSection2 = () => {
  return (
    <section style={{ position: 'relative' }}>
      <div style={myStyle}>
        <div id="contenedor1">
          <div className="bg-cover" style={{ position: 'relative' }}>
            <img src={imagen} height="100%" alt="..." style={{ filter: 'brightness(0.4)' }} />
            <div className="texto-encima"></div>
            <div className="izquierda"><span>Honorable Legislatura</span></div>
            <nav className="navbar bg-body-tertiary" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" style={{ width: '800px', margin: 'auto' }} placeholder="Buscar Expediente" aria-label="Buscar Expediente" />
                  <button className="btn btn-outline-success" type="submit">BUSCAR</button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection2;

