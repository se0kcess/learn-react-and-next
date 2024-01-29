import "./Button.css";

export default function Button({color, children}){

  const onClick = (e) => {
    console.log(e);
  }

  return (
  <button 
    onClick = {onClick}
    //onClick={() => {
      //alert("버튼을 클릭했습니다.");
    //}}
    style={{
      backgroundColor: color,
    }}
    className='button'
    >
      {children}
    </button>
  );
}

