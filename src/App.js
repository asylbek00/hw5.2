import './App.css';
import Comment  from './Comment/Comment';
const blocks = [
  {
    id: 'b1',
    block: 'yellow',
  },
  {
    id: 'b2',
    block: 'green',
  },
  {
    id: 'b3',
    block: 'color',
  },
  {
    id: 'b4',
    block: `${Math.random()}`,
  },
];



function App() {
  return <div className="App">
    
    <button className="button">Обновите для изменение  </button>
    <Comment blocks={blocks}/>
  </div>
}

export default App;