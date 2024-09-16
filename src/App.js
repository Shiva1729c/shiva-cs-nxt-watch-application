import {Route} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'

const App = () => (
  <>
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/" component={Home} />
    <Route exact path="/trending" component={TrendingVideos} />
    <Route exact path="/gaming" component={GamingVideos} />
    <Route exact path="/videos/:id" component={VideoItemDetails} />
  </>
)

export default App
