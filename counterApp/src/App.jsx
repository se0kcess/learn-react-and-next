
import { useState, useEffect } from 'react';
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even';
import useUpdate from './hooks/useUpdate';
import useInPut from './hooks/useInput';

function App() {

  const[count, setCount] = useState(0);
  const[text, onChangeText] = useInPut();

  useUpdate(()=>{
    console.log("업데이트");
  });

  useEffect(()=>{
    console.log("마운트");
  },[]);

  const onClickButton = (value)=>{
    setCount(count + value);
  };

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input value = {text} onChange = {onChangeText} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>   
    </div>
  )
}

export default App