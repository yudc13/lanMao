import {Provider} from 'react-redux'
import store from './store/store'

const App = (props) => {

  return <Provider store={store}>
    {props.children}
  </Provider>
}

export default App
