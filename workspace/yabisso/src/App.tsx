import { lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

const Shell = lazy(() => import('./app/Shell'))
const HomePage = lazy(() => import('./pages/Home'))
const ArtistPage = lazy(() => import('./pages/Artist'))
const AlbumPage = lazy(() => import('./pages/Album'))
const SearchPage = lazy(() => import('./pages/Search'))
const ProfilePage = lazy(() => import('./pages/Profile'))
const SubscriptionPage = lazy(() => import('./pages/Subscription'))
const AuthPage = lazy(() => import('./pages/Auth'))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}> 
          <Route index element={<HomePage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
