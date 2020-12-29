import { useSelector, useDispatch } from 'react-redux'
import { signIn, signOut } from './redux/actions'

const Search = () => {
  const counter = useSelector((state) => state.counter)
  const logged = useSelector((state) => state.sign.logged)
  const dispatch = useDispatch()

  return (
    <div>
      <h4>Counter again: {counter}</h4>
      <button
        onClick={() => dispatch(signIn)}
        disabled={logged  ?  'disabled'  :  ''}
      >Sing in
      </button>
      <button
        onClick={() => dispatch(signOut)}
        disabled={logged  ?  ''  :  'disabled'}
      >Sing out
      </button>
    </div>
  )
}

export default Search
