import React, {useState, useRef} from 'react';
import logo from '../assets/trivago.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { ChevronDown } from 'react-bootstrap-icons';

export default function NavBar() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const noBorder = {
    border: 0,
    ':hover': {
      border: 0
    }
  };

  return (<>

    <style type="text/css">{`
      .Navbar {
        padding: 0 0 0 16px;
        height: 64px;
        backgroundColor: transparent;
        border-bottom: thin solid #8080802b;
      }      
      .collapsed {
        font-size: 15px;
        color: #37454d;
        border-width: 0;
        padding-right: 30px;
      }      
      .menuButtons {
        border-radius: 0;
        height: 100%;
        font-size: 14px;
        vertical-align: top
      }    
      .dropdownToggle {
        border-radius: 0;
        height: 100%;
        font-size: 14px;
        vertical-align: top;
        padding-right: 16px;
        &::after: {
          border: 0;
        }
      }
      
    .btn-light {
      background-color: transparent;
      border-color: transparent;
      &:focus {
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
      }
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    .menuPopover {
      font-size: 15px;
      padding: 15px 30px;
    }
    `}</style>

    <Navbar bg="light" expand="lg" className='Navbar'>
      <Navbar.Brand href="#home">
        <img src={logo} alt='' style={{width: 102}}/>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" style={noBorder}>
        <span className="navbar-toggler-icon" />
        <span style={{verticalAlign: 'text-bottom', marginLeft: 10}}>Menú</span>
      </Navbar.Toggle>

      <Navbar.Collapse id="basic-navbar-nav" style={{height: '100%'}}>
        <Nav className="mr-auto" />
        <Form inline style={{height: '100%'}}>
          <Button variant='light' className='menuButtons'  style={{minWidth: 109, }}>
            Iniciá sesión
          </Button>

          <Button variant="light" className='menuButtons' style={{minWidth: 99}}
                  ref={target} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            Menú
            <ChevronDown size={22} style={{marginLeft: 10}} />

            <Overlay target={target.current}  placement="bottom" show={show} onMouseEnter={() => setShow(true)}>
              {props => (
                <Popover id={`popover-positioned-bottom`} style={{padding: 12, fontSize: 14}} {...props} show={show.toString()}>
                  <Dropdown.Item href="#" className='menuPopover'>Vistos recientemente</Dropdown.Item>
                  <Dropdown.Item href="#" className='menuPopover'>Información general</Dropdown.Item>
                  <Dropdown.Item href="#" className='menuPopover'>Formas de pago</Dropdown.Item>
                </Popover>
              )}
            </Overlay>

          </Button>

          <Dropdown style={{height: '100%', width: 93, fontSize: 14}} alignRight>
            <Dropdown.Toggle id="dropdown-basic"
                             variant="light" className='menuButtons' style={{paddingRight: 16, '&::after': {border: 0}}}>
              ARS
              <ChevronDown size={22} style={{marginLeft: 10}} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Principales monedas</Dropdown.Header>
              <Dropdown.Item>EUR - Euro</Dropdown.Item>
              <Dropdown.Item>GBP - Libra esterlina</Dropdown.Item>
              <Dropdown.Item>USD - Dólar EE.UU.</Dropdown.Item>
              <Dropdown.Header>Todas las monedas</Dropdown.Header>
              <Dropdown.Item>AED - Dírham de los EAU</Dropdown.Item>
              <Dropdown.Item>ARS - Peso argentino</Dropdown.Item>
              <Dropdown.Item>AUD - Dólar australiano</Dropdown.Item>
              <Dropdown.Item>AZN - Manat azerbaiyano</Dropdown.Item>
              <Dropdown.Item>BGN - Lev búlgaro</Dropdown.Item>
              <Dropdown.Item>BHD - Dinar bareiní</Dropdown.Item>
              <Dropdown.Item>BRL - Real brasileño</Dropdown.Item>
              <Dropdown.Item>CAD - Dólar canadiense</Dropdown.Item>
              <Dropdown.Item>CHF - Franco suizo</Dropdown.Item>
              <Dropdown.Item>CLP - Peso chileno</Dropdown.Item>
              <Dropdown.Item>CNY - Yuan chino</Dropdown.Item>
              <Dropdown.Item>COP - Peso colombiano</Dropdown.Item>
              <Dropdown.Item>CZK - Corona checa</Dropdown.Item>
              <Dropdown.Item>DKK - Corona danesa</Dropdown.Item>
              <Dropdown.Item>DZD - Dinar argelino</Dropdown.Item>
              <Dropdown.Item>EGP - Libra egipcia</Dropdown.Item>
              <Dropdown.Item>EUR - Euro</Dropdown.Item>
              <Dropdown.Item>GBP - Libra esterlina</Dropdown.Item>
              <Dropdown.Item>HKD - Dólar de Hong Kong</Dropdown.Item>
              <Dropdown.Item>HRK - Kuna croata</Dropdown.Item>
              <Dropdown.Item>HUF - Florín húngaro</Dropdown.Item>
              <Dropdown.Item>IDR - Rupia indonesia</Dropdown.Item>
              <Dropdown.Item>ILS - Shequel israelí</Dropdown.Item>
              <Dropdown.Item>INR - Rupia india</Dropdown.Item>
              <Dropdown.Item>JOD - Dinar jordano</Dropdown.Item>
              <Dropdown.Item>JPY - Yen japonés</Dropdown.Item>
              <Dropdown.Item>KRW - Won surcoreano</Dropdown.Item>
              <Dropdown.Item>KWD - Dinar kuwaití</Dropdown.Item>
              <Dropdown.Item>KZT - Tenge kazajo</Dropdown.Item>
              <Dropdown.Item>LBP - Libra libanesa</Dropdown.Item>
              <Dropdown.Item>MAD - Dírham marroquí</Dropdown.Item>
              <Dropdown.Item>MDL - Leu moldavo</Dropdown.Item>
              <Dropdown.Item>MXN - Peso mexicano</Dropdown.Item>
              <Dropdown.Item>MYR - Ringgit malayo</Dropdown.Item>
              <Dropdown.Item>NGN - Naira nigeriano</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </>)
}