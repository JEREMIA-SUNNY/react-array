import logo from './logo.svg';
import './App.css';
import Naavbar from './Naavbar';
import Hero from './Hero';
import Card2 from './Card2';
import data from './data';

function App() {
  const datas=data.map(e=>{
    return <Card2  key={e.id}
      {...e}
      />
    
    })
  return (
    <div className="App">
      <Naavbar />
      <Hero />
    <div className='card-main'>{datas}</div>

      
    </div>
  );
}

export default App;
