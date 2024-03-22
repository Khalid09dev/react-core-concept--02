import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

export default function MyApp() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
      <div>
          <h1>রিয়েক্ট কোর কন্সেপ্ট (পাওয়ার্ড বাই ভিট )</h1>
          <h2>1.Component (function)</h2>  
          <h2>2.JSX (Javascript + HTML)</h2>  
          <h2>3.Props</h2>
          <h2>4.Condtional Rendering</h2>  
          <h2>5.Array of Objects</h2>  

          <h1>React Core Concepts -02</h1>
          <Friends></Friends>
          <Users></Users>
          <Team></Team>
          <Counter></Counter>
          <button onClick={handleClick}>Click Me</button>
          <button onClick={handleClick2}>Click2</button>
          <button onClick={() => {alert('third clicked')}}>third</button>
          <button onClick={() => addToFive(5)}>Four</button>
      </div>
  )
}