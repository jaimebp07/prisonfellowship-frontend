import './App.scss'
import { Route, Navigate, BrowserRouter } from 'react-router-dom'
import { PublicRoutes} from './models/routes'
import { Landing } from './pages/Public/Landing'
import { RoutesWithNotFound } from './utilities'
import { RegisterRaffleFrom } from './pages/Public/RegisterRaffleFrom'
// import { FormLeaveData } from './pages/Public/FormLeaveData'

// import { AuthGuard, RoleGuard } from './guards'
// import { Suspense, lazy } from 'react'
// import store from './redux/store'
// import { Provider } from 'react-redux'
// import { Roles } from './models' 
// import { Dashboard } from './pages/Private'

function App() {

  return (
    <div>
          <BrowserRouter>
          <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PublicRoutes.LANDING} />} />
              <Route path={PublicRoutes.LANDING} element={<Landing />} />
              {/* <Route path={PublicRoutes.LOGIN} element={<Login />} /> */}
              <Route path={PublicRoutes.REGISTER_RAFFLE} element={<RegisterRaffleFrom />} />
              
          </RoutesWithNotFound>
          </BrowserRouter>
    </div>
  )
}

export default App;
