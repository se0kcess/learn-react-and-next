import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Country from "./pages/Country"
import Search from "./pages/Search"
import NotFound from './pages/NotFound'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/country/:code" element={<Country />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </Layout>
  )
}

export default App
