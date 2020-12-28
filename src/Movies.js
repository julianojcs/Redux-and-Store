import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from './redux/actions'

const Search = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <input type='text' />
      <h1>Hey {counter}</h1>
      <button onClick={() => dispatch(signIn)}>Sing in</button>
      <button onClick={() => dispatch(signOut)}>Sing out</button>
    </div>
  )
}

export default Search
