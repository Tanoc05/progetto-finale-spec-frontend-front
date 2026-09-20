import { BrowserRouter, Routes, Route ,NavLink} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FoodDetail from './pages/FoodDetail';
import ComparePage from './pages/ComparePage';
import { GlobalProvider } from './context/GlobalContext';

function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/food/:id' element={<FoodDetail/>}/>
            <Route path='/compare' element={<ComparePage/>}/>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
