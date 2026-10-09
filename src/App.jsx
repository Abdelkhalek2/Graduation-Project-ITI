import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'
import MovieDetails from './pages/MovieDetails/MovieDetails'
import NotFound from './pages/NotFound/NotFound'
import MovieProvider from './context/MovieContext'
import Favorites from './pages/Favorites/Favorites'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,children: [
        { index: true, element: <Home /> },
        { path: 'search', element: <Search /> },
        { path: 'movie/:id', element: <MovieDetails /> },
        { path: 'favorites', element: <Favorites /> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <MovieProvider>
        <RouterProvider router={routes} />
      </MovieProvider>
    </>
  )
}

export default App
