import React, {useEffect, useRef, useState} from 'react';
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import {People, Person} from "react-bootstrap-icons";
import FormControl from "react-bootstrap/FormControl";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import Dropdown from "react-bootstrap/Dropdown";
import PropTypes from "prop-types";

export default function HabitacionInput(props){

  const target = useRef(null);
  const [showSelect, setShowSelect] = useState(false);
  const [value, setValue] = useState('');

  function handleClickVisibility() {
    setShowSelect(prevState => (!prevState));
  }

  useEffect(() => {
    setShowSelect(props.show)
  }, [props.show]);

  function handleSelection(option){
    if (option === 1) {
      setValue('Individual');
    } else {
      setValue('Doble');
    }
    setShowSelect(false);
  }
  return<>

    <style type="text/css">{`
      .habitacionItems {
         vertical-align: middle;
         margin-right: 50px;
         font-size: x-large
      }
    `}</style>

    <Col md={2} style={{padding: 3}}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend ref={target} onClick={handleClickVisibility} className='prepends' style={{height: 34}}>
          <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'transparent'}}>
            <People />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Habitación"
          aria-describedby="basic-addon1"
          value={value}
          onChange={handleSelection}
        />
      </InputGroup>
    </Col>
    <Overlay target={target.current}  placement="bottom" show={showSelect}>
      {props => (
        <Popover id={`popover-positioned-bottom`} style={{padding: 12, fontSize: 14}} {...props} show={showSelect.toString()}>
          <Dropdown.Item href="#" className='menuPopover' onClick={() => handleSelection(1)}>
            <Person className='habitacionItems' />
            Individual
          </Dropdown.Item>
          <Dropdown.Item href="#" className='menuPopover' onClick={() => handleSelection(2)}>
            <People className='habitacionItems' />
            Doble
          </Dropdown.Item>
        </Popover>
      )}
    </Overlay>

  </>;
}

HabitacionInput.propTypes = {
  show: PropTypes.bool.isRequired
};