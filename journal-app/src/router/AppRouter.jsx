import { Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JorunalRoutes } from '../journal/routes/JorunalRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRoutes/>} />
        <Route path='/*' element={<JorunalRoutes/>} />
    </Routes>
  )
}
