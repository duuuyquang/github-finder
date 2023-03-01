import { createContext, useReducer} from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext()

export const GithubProvider = ({children}) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  }

  const [state, setState] = useReducer(githubReducer, initialState)

  return <GithubContext.Provider
    value={{
      ...state,
      setState,
    }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext