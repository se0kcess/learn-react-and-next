import useUpdate from '../hooks/useUpdate';

export default function Controller({onClickButton}) {

  useUpdate(()=>{
    console.log("CONTROLLER 컴포넌트 업데이트")
  })

  return (
    <div>
      <button
        onClick={() => {
          onClickButton(-1);
        }}
      > 
        -1
      </button>
      <button
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        onClick={() => {
          onClickButton(-100);
        }}
      >-100
      </button>
      <button
        onClick={() => {
          onClickButton(1);
        }}
      >1
      </button>
      <button
        onClick={() => {
          onClickButton(10);
        }}
      >10
      </button>
      <button
        onClick={() => {
          onClickButton(100);
        }}
      >
        100
      </button>
    </div>
  );
}