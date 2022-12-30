import { useRecoilState, useRecoilValue } from 'recoil';
import { todoIdState, todoItemQuery } from './recoil/todo';

function App() {

  const result = useRecoilValue(todoItemQuery);
  const [id, setId] = useRecoilState(todoIdState);

  // console.log(result);

  return (
    <div>
      {result.title}
      <div>
        <button onClick={() => setId(id+1)}>+</button> 
        <span>{id}</span>
      </div>  
    </div>
  );
}

export default App;
