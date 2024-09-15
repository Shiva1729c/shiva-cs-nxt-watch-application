import {Route} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Trending from './components/Trending'

const App = () => (
  <>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/trending" component={Trending} />
  </>
)

export default App
