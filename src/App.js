// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "./pages";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
