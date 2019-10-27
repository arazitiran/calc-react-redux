import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

let CalculatorBtn = ({ btnValue, classes }) => {
  let dispatch = useDispatch();
  let pressType;
  switch (btnValue) {
    case 'C':
      pressType = "CLEAR_BUTTON_PRESS";
      break;
    case '=':
      pressType = "RESULT_BUTTON_PRESS";
      break;
      case '+/-':
      pressType = "PLUSMINUS_BUTTON_PRESS";
      break;
    default:
      pressType = "INPUT_BUTTON_PRESS";
      break;
  }
  //let pressType = (btnValue ==='=') ? "RESULT_BUTTON_PRESS" : "INPUT_BUTTON_PRESS";
  let speacialColor = (btnValue === 'C') ? { backgroundImage: 'linear-gradient(to top, #45b540, #45b649)' } : {};
  const buttonClass = classes + " MuiButtonGroup-grouped MuiButtonGroup-groupedContained MuiButtonGroup-groupedContainedSecondary";
  return (
    <Button btnValue={btnValue} size="large" color="secondary" variant="contained"
      className={buttonClass} style={speacialColor} onClick={(e) => dispatch({ type: pressType, payload: { btnval: btnValue } })} > {btnValue} </Button>
  );
};

export default CalculatorBtn;