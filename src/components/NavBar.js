import React, {useState, useRef } from 'react';
import logo from '../assets/trivago.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import { ChevronDown } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

export default function() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const noBorder = {
    border: 0,
    ':hover': {
      border: 0
    }
  };

  const [currency, setCurrency] = useState('ARS');

  const currencies = [
    {
      short: 'AED',
      long: 'Dírham de los EAU'
    },
    {
      short: 'ARS',
      long: 'Peso argentino'
    },
    {
      short: 'AUD',
      long: 'Dólar australiano'
    },
    {
      short: 'AZN',
      long: 'Manat azerbaiyano'
    },
    {
      short: 'BGN',
      long: 'Lev búlgaro'
    },
    {
      short: 'BHD',
      long: 'Dinar bareiní'
    },
    {
      short: 'BRL',
      long: 'Real brasileño'
    },
    {
      short: 'CAD',
      long: 'Dólar canadiense'
    },
    {
      short: 'CHF',
      long: 'Franco suizo'
    },
    {
      short: 'CLP',
      long: 'Peso chileno'
    },
    {
      short: 'CNY',
      long: 'Yuan chino'
    },
    {
      short: 'COP',
      long: 'Peso colombiano'
    },
    {
      short: 'CZK',
      long: 'Corona checa'
    },
    {
      short: 'DKK',
      long: 'Corona danesa'
    },
    {
      short: 'DZD',
      long: 'Dinar argelino'
    },
    {
      short: 'EGP',
      long: 'Libra egipcia'
    },
    {
      short: 'EUR',
      long: 'Euro',
      main: true
    },
    {
      short: 'GBP',
      long: 'Libra esterlina',
      main: true
    },
    {
      short: 'HKD',
      long: 'Dólar de Hong Kong'
    },
    {
      short: 'HRK',
      long: 'Kuna croata'
    },
    {
      short: 'HUF',
      long: 'Florín húngaro'
    },
    {
      short: 'IDR',
      long: 'Rupia indonesia'
    },
    {
      short: 'ILS',
      long: 'Shequel israelí'
    },
    {
      short: 'INR',
      long: 'Rupia india'
    },
    {
      short: 'JOD',
      long: 'Dinar jordano'
    },
    {
      short: 'JPY',
      long: 'Yen japonés'
    },
    /*{
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    {
      short: '',
      long: ''
    },
    <Dropdown.Item>KRW - Won surcoreano</Dropdown.Item>
    <Dropdown.Item>KWD - Dinar kuwaití</Dropdown.Item>
    <Dropdown.Item>KZT - Tenge kazajo</Dropdown.Item>
    <Dropdown.Item>LBP - Libra libanesa</Dropdown.Item>
    <Dropdown.Item>MAD - Dírham marroquí</Dropdown.Item>
    <Dropdown.Item>MDL - Leu moldavo</Dropdown.Item>
    <Dropdown.Item>MXN - Peso mexicano</Dropdown.Item>
    <Dropdown.Item>MYR - Ringgit malayo</Dropdown.Item>
    <Dropdown.Item>NGN - Naira nigeriano*/
    {
      short: 'USD',
      long: 'Dólar EE.UU.',
      main: true
    },
  ];

  function handleClick(short) {
    setCurrency(short);
  }
  return (<>

    <style type="text/css">{`
      .Navbar {
        padding: 0 0 0 16px;
        height: 64px;
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
    .collapsed {
      height: 100%;
      border-radius: 0;
      padding: 0px 12px;
    }
    .collapsedText {
      font-size: 14px;
      color: rgb(55, 69, 77);
    }
    `}</style>

    <Navbar bg="light" expand="lg" className='Navbar'>
      <Navbar.Brand href="#home" className='noneForLargeScreen'>
        <img src={logo} alt='' style={{width: 102}}/>
      </Navbar.Brand>

      <div style={{height: '100%'}}>
      <button className='btn-light navbar-toggler collapsed' style={{position: 'absolute', right: 59}}>
        <FontAwesomeIcon icon={faUser} style={{fontSize: 20}} /><br />
        <span className='collapsedText'>Inicia sesión</span>
      </button>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='btn-light collapsed' style={noBorder}>
        <span className="navbar-toggler-icon" /><br />
        <span className='collapsedText'>Menú</span>
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
              {currency}
              <ChevronDown size={22} style={{marginLeft: 10}} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Principales monedas</Dropdown.Header>
              {currencies.map(e => {
                return e.main?
                  <Dropdown.Item key={e.short} onClick={() => handleClick(e.short)}>{e.short} - {e.long}</Dropdown.Item>
                  : null;
              })}
              <Dropdown.Header>Todas las monedas</Dropdown.Header>
              {currencies.map(e =>
                (<Dropdown.Item key={e.short} onClick={() => handleClick(e.short)}>{e.short} - {e.long}</Dropdown.Item>)
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Form>
      </Navbar.Collapse>
    </Navbar>
    </>)
}