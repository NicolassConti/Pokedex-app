import React from 'react';
import {HashRouter, Routes, Route} from "react-router-dom"
import InputName from './components/InputName';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';
import "./App.css"
import './style/style.css'
import './index.css'

const App = () => {



  
  return (
    <div>
       <HashRouter>
         <Routes>

            <Route path = "/" element={ <InputName />}/>
            

            <Route element ={<ProtectedRoutes />}>
              <Route  path = "/pokemonCard" element = {< PokemonCard />}/>
               <Route  path = "/pokemonCard/:id" element = {< PokemonDetail />} />
            </Route>

    
         </Routes>
       </HashRouter>
    </div>
  );
};

export default App;
