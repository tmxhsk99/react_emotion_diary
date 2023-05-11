import './App.css';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import {Route, Routes} from "react-router-dom";
import {useReducer} from "react";

function reducer(state, action) {
    return state;
}

function App() {
    const [data, dispatch] = useReducer(reducer, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new" element={<New/>}/>
                <Route path="/diary/:id" element={<Diary/>}/>
                <Route path="/edit" element={<Edit/>}/>
            </Routes>
        </div>
    );
}

export default App;
