import {useEffect, useState} from 'react'
import './App.css'
import {Link, Outlet} from "react-router-dom";
// import useRoutes from 'react-router-dom'
// import AddCreator from "./pages/AddCreator.jsx";
// import EditCreator from "./pages/EditCreator.jsx";
// import ShowCreators from "./pages/ShowCreators.jsx";
// import ViewCreator from "./pages/ViewCreator.jsx";
import {supabase} from "./client.js";
import CreatorCard from "./components/CreatorCard.jsx";

function App() {
    //console.log(supabase);



  return (
    <>
        <h1>Creatorverse</h1>
        <Link to={'/'}>
            <button>View all creators</button>
        </Link>
        <Link to={'/new'}>
            <button>Add a creator</button>
        </Link>

        <Outlet/>
    </>
  )
}

export default App
