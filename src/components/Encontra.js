import React, {useRef, useState} from 'react';
import logo from '../assets/trivago.svg';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateInput from './DateInput';
import HabitacionInput from "./HabitacionInput";

export default function() {

  const [salida, setSalida] = useState('');
  const [llegada, setLlegada] = useState('');
  const [showHabitacion, setShowHabitacion] = useState(false);

  function handleDateSelected(e, picker, llegadaOrSalida) {
    const date = new Date(picker.startDate);
    if (llegadaOrSalida === 'llegada') {
      setLlegada(date);
      dateInputSalida.current.click()
    } else {
      setSalida(date);
      setShowHabitacion(true)
    }
  }

  const dateInputSalida = useRef(null);

  return (<>

    <style type="text/css">{`
      .hero__link {
        border-right-style: inset;
        border-right-width: thin;
        margin: auto;
      }
      .row {
        margin-top: 20px; 
        margin-bottom: 20px; 
      }
      .prepends {
        cursor: pointer;
        height: 100%;
      }
      input {
        font-size: smaller !important;
        border-left: 0 !important;
        height: 100% !important;
      }
      .mb-3 {
        height: 38px;
      }
      .buscarButton {
        background-color: #007fad;
        border-radius: 0;
        font-weight: 700;
        width: 132px;
        border-color: #007fad;
      }
    `}</style>

    <Jumbotron style={{backgroundColor: 'white'}}>

      <Row>
        <Col className='hero__link noneForSmallScreen'><img src={logo} width='220' alt='' style={{marginLeft: 43}} /></Col>
        <Col xs={8}>
          <h4 style={{fontWeight: 700}}>Encontrá tu hotel ideal y compará precios de diferentes páginas web</h4>
          <span>Buscá una ciudad, hotel o hasta un lugar famoso</span>

        </Col>
      </Row>

      <Row style={{height: 43}}>

        <Col md={4} style={{padding: 3}}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'transparent'}}>
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Ingresa el nombre de un hotel o destino"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>

        <DateInput md={2} handleDateSelected={handleDateSelected} value={llegada} llegadaOrSalida='llegada' startDate={llegada || new Date()} />
        <DateInput md={2} handleDateSelected={handleDateSelected} value={salida}  llegadaOrSalida='salida'  startDate={salida || new Date()} ref={dateInputSalida} />
        <HabitacionInput show={showHabitacion} />
        <div style={{padding: 3, maxWidth: 138}}>
          <Button style={{width: 132}} className='buscarButton noneForSmallScreen'>Buscar</Button>
          <Button style={{width: 44}} className='buscarButton noneForLargeScreen'>
            <Search style={{fontSize: 20}} />
          </Button>
        </div>
      </Row>

    </Jumbotron>
  </>)
}