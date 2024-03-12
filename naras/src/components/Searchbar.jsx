import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Searchbar.module.css';

export default function Searchbar() {

  const [search, setSearch] = useState("");
  const nav = useNavigate();
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.key === 13){
        onClickSearch();
      }
    };

  const onClickSearch = () => {
    if(search !== ""){
      nav(`/search?q=${search}`);
    }
  }

  return (
  <div className={style.container}>
    <input 
    onKeyDown={onKeyDown}
    value={search} 
    onChange={onChangeSearch}
    placeholder='검색어를 입력하세요...'/>
    <button onClick={onClickSearch}>검색</button>
  </div>
  )
}