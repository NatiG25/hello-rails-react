import React, { useEffect } from 'react';
import Greeting from './Greeting';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greeting/greeting';

const App = () => {
  const greetings = useSelector((state) => state.greetingReducer)
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchGreetings())
  }, [])

    return (
    <>
        <Greeting text={greetings.text}/>
    </>
  );
}

export default App;
