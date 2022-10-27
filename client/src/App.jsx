import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Words from './components/words';
import Rank from './components/Rank';
import {useDispatch} from "react-redux";
import { inetialize_QS } from './actions/questions';
//import {getRank} from './actions/generalActions'

function App() {

  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(inetialize_QS())
    // dispatch(getRank(null))
  }, []) 
 
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Words />} />
          <Route path="/rank" element={<Rank  />} />
        </Routes>
      </BrowserRouter>   
   
  );
}

export default App;
