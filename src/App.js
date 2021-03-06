import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Movies from './Movies'
import { increment, increment2, decrement, decrement2 } from './redux/actions'

function App() {
  const counter = useSelector((state) => state.counter)
  const sign = useSelector((state) => state.sign)
  const dispatch = useDispatch()
  
  useEffect(() => {
    console.log(sign);
  }, [sign])

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(decrement2(2))}>- 2</button>
      <button onClick={() => dispatch(decrement)}>- 1</button>
      <button onClick={() => dispatch(increment)}>+ 1</button>
      <button onClick={() => dispatch(increment2(2))}>+ 2</button>

      <div className="logged">
        <h2>Logged in: 
          <span className={sign.logged? 'yes': 'no'}>{sign.logged? 'Yes': 'No'}</span>
        </h2>
      </div>
      
      <h3>Loggin counter: {sign.count}</h3>
      <Movies />
      {sign.logged && (
        <>
          <h1>Top 10 movie list:</h1>
          <ol>
            <li>Parasite</li>
            <li>Portrait Of A Lady On Fire</li>
            <li>Uncut Gems</li>
            <li>Rocks</li>
            <li>Saint Maud</li>
            <li>The Invisible Man</li>
            <li>Lovers Rock</li>
            <li>The Lighthouse</li>
            <li>Mank</li>
            <li>Jojo Rabbit</li>
          </ol>
        </>
      )}
    </div>
  )
}

export default App;
