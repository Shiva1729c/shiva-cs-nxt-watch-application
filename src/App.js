import {Route, Switch} from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import TrendingVideos from './components/TrendingVideos'
import GamingVideos from './components/GamingVideos'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={TrendingVideos} />
      <ProtectedRoute exact path="/gaming" component={GamingVideos} />
      <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
      <ProtectedRoute component={NotFound} />
    </Switch>
  </>
)

export default App
