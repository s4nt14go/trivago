import React, {useRef, forwardRef, useImperativeHandle} from "react";
import PropTypes from 'prop-types';
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import DateRangePicker from "react-bootstrap-daterangepicker";
import {Calendar} from "react-bootstrap-icons";
import FormControl from "react-bootstrap/FormControl";
import { daysOfWeek } from './constants';

const datePickerConfiguration = {
  daysOfWeek,
  monthNames: [ "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE" ]
};

const DateInput = forwardRef((props, ref) => {

  const pickerEl = useRef(null);

  useImperativeHandle(ref, () => ({

    click() {
      pickerEl.current['$picker'][0].click();
    }

  }));

  function formatDate(_date) {
    if (!_date) return '';
    const date = new Date(_date);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek + ', ' + date.toLocaleDateString();
  }

  return <>

    <Col md={props.md} style={{padding: 3}}>
    <InputGroup className="mb-3">
      <DateRangePicker ref={pickerEl} startDate={props.startDate} singleDatePicker onApply={(e, p) => props.handleDateSelected(e, p, props.llegadaOrSalida)} locale={datePickerConfiguration}>
        <InputGroup.Prepend className='prepends'>
          <InputGroup.Text id="basic-addon1" style={{backgroundColor: 'transparent'}}>
            <Calendar />
          </InputGroup.Text>
        </InputGroup.Prepend>
      </DateRangePicker>
      <FormControl
        placeholder={props.llegadaOrSalida}
        aria-describedby="basic-addon1"
        value={formatDate(props.value)}
        onChange={props.handleDateSelected}
        style={{textTransform: 'capitalize'}}
      />
    </InputGroup>
  </Col>

  </>
});

export default DateInput;

DateInput.propTypes = {
  md: PropTypes.number.isRequired,
  startDate: PropTypes.object.isRequired,
  handleDateSelected: PropTypes.func.isRequired,
  llegadaOrSalida: PropTypes.string.isRequired
};
