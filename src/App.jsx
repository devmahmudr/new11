import MainPage from './pages/main.page'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/:id' element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
