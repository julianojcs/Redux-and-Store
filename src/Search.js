import { useSelector, useDispatch } from 'react-redux'

const Search = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <input type='text' />
      <h1>Hey {counter}</h1>
      <button onClick={() => dispatch({ type: 'SIGN_IN' })}>Sing in</button>
      <button onClick={() => dispatch({ type: 'SIGN_OUT' })}>Sing out</button>
    </div>
  )
}

export default Search
