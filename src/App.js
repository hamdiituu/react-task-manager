// import Login from "./pages/Login";
// import Register from "./pages/Register";

import { Login, Register } from "./pages";
import { useState } from "react";

function App() {
    const [route, setRoute] = useState("login");

    return (
        <div>
            <button onClick={() => setRoute("login")}>Login</button>
            <button onClick={() => setRoute("register")}>Register</button>

            {route === "login" ? <Login /> : <Register />}
        </div>
    );
}

export default App;
