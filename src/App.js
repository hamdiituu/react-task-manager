// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Routes, Route, Link } from "react-router-dom";
import { Login, Register } from "./pages";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to={"/"}>Task Manager App</Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/register"}>Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="outer">
                <div className="inner">
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
