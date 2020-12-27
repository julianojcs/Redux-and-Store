import { useEffect, useState } from 'react'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Search from './Search'

function App() {
  const counter = useSelector((state) => state.counter)
  const signedIn = useSelector((state) => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <Search />
      {signedIn && (
        <h1>MOVIE LIST</h1>
      )}
    </div>
  )
}

export default App;
