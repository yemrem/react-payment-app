import { React, useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './Form.module.css';
import VirtualKeyboard from '../VirtualKeyboard/VirtualKeyboard.js';
import { vkActions, selectNumber } from '../../stores/virualKeyboardSlice';
import { Link } from 'react-router-dom';

const CreditCardForm = () => {
   const enteredNumbersFromSlice = useSelector(selectNumber);
   const [enteredCardNumber, setEnteredCardNumber] = useState('');
   const [enteredSecurityNumber, setEnteredSecurityNumber] = useState('');
   const [isCardNo, setIsCardNo] = useState(false);
   const [isSecurityNo, setIsSecurityNo] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      // const numy = parseInt(enteredNumbersFromSlice.vkeyboard.newNumber);
      const ecn = enteredNumbersFromSlice.vkeyboard.enteredCardNumber;
      const esn = enteredNumbersFromSlice.vkeyboard.enteredSecurityNumber;
      // let shownFields = '';
      if (isCardNo) {
         setEnteredCardNumber(ecn.join(""));
         // previousValue.current = enteredCardNumber;
         // setEnteredCardNumber(previousValue.current +""+numy);
      };
      if (isSecurityNo) {
         //  esn.forEach(element => {
         // shownFields = shownFields + element;
         setEnteredSecurityNumber(esn.join(""));
         // });
         // setEnteredSecurityNumber(previousValue.current +""+numy);
      };

   }, [enteredNumbersFromSlice.vkeyboard.enteredCardNumber, enteredNumbersFromSlice.vkeyboard.enteredSecurityNumber])

   const touchedField = event => {
      if (event.target.id === 'creditCardNumber') {
         setIsCardNo(true);
         setIsSecurityNo(false);
         const data = {
            isCardNo: true,
            isSecurityNo: false,
            enteredCardNumber: enteredCardNumber
         };
         dispatch(vkActions.booleanSetter(data));
      };
      if (event.target.id === 'securityNumber') {
         setIsCardNo(false);
         setIsSecurityNo(true);
         const data = {
            isCardNo: false,
            isSecurityNo: true,
            enteredCardNumber: enteredCardNumber
         };
         dispatch(vkActions.booleanSetter(data));
      };
   };
   return (
      <div>
         <form className={classes.body}>
            <div>
               <br></br>
               <div>
                  <label className={classes.label}> Name and Surname on Credit Card</label>
                  <br></br>
                  <input className={classes.input} type='text' id='nameSurname' />
               </div>
               <div>
                  <label className={classes.label}> Credit Card Number</label>
                  <br></br>
                  <input className={classes.input} type='number' id='creditCardNumber' onClick={touchedField} value={enteredCardNumber} />
               </div>
               <div>
                  <label className={classes.label}> Last Usage Date</label>
                  <br></br>
                  <input className={classes.input} type='date' id='date' />
               </div>
               <div>
                  <label className={classes.label}> Security Number</label>
                  <br></br>
                  <input className={classes.input} type='number' id='securityNumber' onClick={touchedField} value={enteredSecurityNumber} />
               </div>
            </div>
            <br></br><br></br><br></br><br></br>
            <div>
               <VirtualKeyboard></VirtualKeyboard>
            </div>
            <br></br><br></br>
            <button><Link to="paymentSuccess"> Confirm Payment </Link> </button>
         </form>
      </div>
   );
};

export default CreditCardForm;