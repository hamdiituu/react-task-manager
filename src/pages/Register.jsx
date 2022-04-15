import { Link } from 'react-router-dom';

function Register() {
    const createUserFetch = async (url = "", data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return response.json();
    };

    const createUser = (name, email, password) => {
        createUserFetch("https://task-manager-cagri.herokuapp.com/users", {
            name,
            email,
            password,
        }).then((data) => {
            console.log(data);
        });
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const name = `${e.target.elements.firstname.value} ${e.target.elements.lastname.value}`
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;
            createUser(name, email, password);
        }}>
            <h3>Register</h3>

            <div className="form-group">
                <label>First name</label>
                <input name="firstname" type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input name="lastname" type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/">log in?</Link>
            </p>
        </form>
    );
}

export default Register;
