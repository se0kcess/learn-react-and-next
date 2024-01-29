import { useState } from 'react';

export default function useInPut(){
  const [value, setValue] = useState();

  const onChangeValue = (e) =>{
    setValue(e.target.value);
  };

  return [value, onChangeValue];
}