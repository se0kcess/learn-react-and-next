import { useParams } from 'react-router-dom'

export default function Country(){

  const params = useParams();


  return <div>Country : {params.code}</div>
}