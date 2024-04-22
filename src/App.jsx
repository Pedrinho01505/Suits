import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Principal from './pages/Principal'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Principal/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/> 
  )
}
