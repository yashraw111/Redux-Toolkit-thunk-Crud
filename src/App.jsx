import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Routers , Routes,Route } from 'react-router-dom'
import Header from './Layout/Header'
import CreateThunk from './Redux-thunk/Crud/CreateThunk'
import View from './Redux-thunk/Crud/View'
// import CreateThunk from './Redux-thunk/Crud/CreateThunk'
// import View from './Redux-thunk/Crud/View'
function App() {

  return (
    <>
    <Routers>
      <Header></Header>
      <Routes>
        <Route path='/' element={<CreateThunk></CreateThunk>} ></Route>
        <Route path='/View' element={<View></View>} ></Route>
      </Routes>
    </Routers>
    </>
  )
}

export default App
