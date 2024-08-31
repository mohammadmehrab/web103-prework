import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AddCreator from "./pages/AddCreator.jsx";
import ShowCreators from "./pages/ShowCreators.jsx";
import ViewCreator from "./pages/ViewCreator.jsx";
import EditCreator from "./pages/EditCreator.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<StrictMode><App /></StrictMode>}>
                <Route path={'new'} element={<AddCreator/>} />
                <Route path={'/'} element={<ShowCreators/>} />
                <Route path={':creatorId'} element={<ViewCreator/>}/>
                <Route path={'edit'}>
                    <Route path={':creatorId'} element={<EditCreator/>}/>
                </Route>
            </Route>

        </Routes>

    </BrowserRouter>,
)
