import { useState } from "react";

const Calculator = () =>{
    let [hour, setHour] =useState("00")
    let [minutes, setMinutes] =useState("00")
    const add2Digit = (n) => {
        if(n.toString().length === 1 && n < 10){
            return "0" + n;
        }
        else{
            return n.toString()
        }
    }
    const upHourClick = ()=>{
        let newhour = parseInt(hour)
        if(newhour>=0 && newhour <24){
            setHour(add2Digit(newhour+1))
        }else{
            setHour("00")
        }
    }
    const upMinutesClick = ()=>{
           let newminutes = parseInt(minutes)
        if(newminutes>=0 && newminutes < 60){
            setMinutes(add2Digit(newminutes + 1))
        }else{
            setMinutes("00")
        }
    }
    const downHourClick = ()=>{
        let newhour = parseInt(hour)
        if(newhour>0 && newhour <=24){
            setHour(add2Digit(newhour - 1))
        }else{
            setHour("24")
        }
    }
    const downMinutesClick = ()=>{
        let newminutes = parseInt(minutes)
        if(newminutes>0 && newminutes <=60){
            setMinutes(add2Digit(newminutes - 1))
        }else{
            setMinutes("60")
        }
    }
    return (
    <>
    <div className="container">
          <div className="row">
            <div className="col"><button onClick={upHourClick}>UP Hour</button></div>
            <div className="col"><button onClick={upMinutesClick}>UP Minutes</button></div>
          </div>
          <div className="row"><h1>{hour} : {minutes}</h1></div>
          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col"><button onClick={downHourClick}>Down Hour</button></div>
            <div className="col"><button onClick={downMinutesClick}>Down Minutes</button></div>
          </div>
    </div>
    </>)
    };
export default Calculator;