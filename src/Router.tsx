import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/02-ignite-timer" element={<Home />}></Route>
        <Route path="/02-ignite-timer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
