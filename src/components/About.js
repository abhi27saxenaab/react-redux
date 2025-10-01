import React,{useState,useEffect,useLayoutEffect} from 'react';
import { useSelector } from "react-redux";



function About() {

  function expensiveCalculation(num) {
    console.log('Running heavy calculation...');
    for (let i = 0; i < 1000000000; i++) {} // Artificial delay
    return num * 2;
  }

  const users = useSelector((state)=>state.users)
  const [count, SetCount] =  useState(0)
  const [count2, SetCount2] =  useState(0)

  console.log(users.userdetails)

  const updateCount = () =>{
      SetCount(count+1)
  }

  useEffect(()=>{
    console.log('===' + count + "===" +  count2)
  })

  const updateCount2 = () =>{
      SetCount2(count2+1)
  }
  useEffect(() => {
      console.log('====this is callig every time')
      
    }, []);

  useLayoutEffect(() => {
    console.log('==============use layout')
  }, []);
  return <>
  <h1>About Page -  {users?.userdetails?.username}</h1>
  <p>Count: {count}</p>
  <button onClick={updateCount}>Update Count</button>

  <p>Count1: {count2}</p>
  <button onClick={updateCount2}>Update Count2</button>
  </>;
}

export default About;