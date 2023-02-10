import React from "react";
import { useDispatch } from "react-redux";
import classes from './VirtualKeyboard.module.css'
import { vkActions } from '../../stores/virualKeyboardSlice'


const VirtualKeyboard = () => {
  const dispatch = useDispatch();

  const numbersHandler = event => {
    const newNumber = parseInt(event.target.value);
    dispatch(vkActions.fillState(newNumber));
  }

  const deleteHandler = () => {
    dispatch(vkActions.deleteNumber());
  }

  return (
    <div id="VirtualKey" className={classes.style}>
      <input id="btn1" type="button" onClick={numbersHandler} className={classes.eachButton} value="1" />
      <input id="btn2" type="button" onClick={numbersHandler} className={classes.eachButton} value="2" />
      <input id="btn3" type="button" onClick={numbersHandler} className={classes.eachButton} value="3" />
      <br />
      <input id="btn4" type="button" onClick={numbersHandler} className={classes.eachButton} value="4" />
      <input id="btn5" type="button" onClick={numbersHandler} className={classes.eachButton} value="5" />
      <input id="btn6" type="button" onClick={numbersHandler} className={classes.eachButton} value="6" />
      <br />
      <input id="btn7" type="button" onClick={numbersHandler} className={classes.eachButton} value="7" />
      <input id="btn8" type="button" onClick={numbersHandler} className={classes.eachButton} value="8" />
      <input id="btn9" type="button" onClick={numbersHandler} className={classes.eachButton} value="9" />
      <br />
      <input id="btn0" type="button" onClick={numbersHandler} className={classes.eachButton} value="0" />
      <input id="btnDel" type="button" value="Delete" onClick={deleteHandler} className={classes.eachButton} style={{ width: "auto", marginLeft: "12%" }} />
    </div>
  );
};

export default VirtualKeyboard;