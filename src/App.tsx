import './App.scss'
import { Route, Navigate, BrowserRouter } from 'react-router-dom'
// import { PublicRoutes, PrivateRoutes } from './models/routes'
// import { AuthGuard, RoleGuard } from './guards'
// import { RoutesWithNotFound } from './utilities'
// import { Suspense, lazy } from 'react'
// import store from './redux/store'
// import { Provider } from 'react-redux'
// import { Roles } from './models' 
// import { Dashboard } from './pages/Private'
// import { Landing } from './pages/Public/Landing'
// import { FormLeaveData } from './pages/Public/FormLeaveData'

function App() {

  return (
    <div>
    {/* <Suspense fallback={<>Cargando</>}>
        <Provider store={store}>
          <BrowserRouter>
          <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PublicRoutes.LANDING} />} />
              <Route path={PublicRoutes.LANDING} element={<Landing />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.DATA_FORM} element={<FormLeaveData />} />
              
          </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense> */}
    </div>
  )
}

export default App;
