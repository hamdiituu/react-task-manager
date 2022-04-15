import { Link } from "react-router-dom";
// import { Button, Form, Container } from "react-bootstrap";

function Login() {
    const loginUserFetch = async (url = "", data = {}) => {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        return response.json();
    };

    const loginUser = (email, password) => {
        loginUserFetch("https://task-manager-cagri.herokuapp.com/users/login", {
            email,
            password,
        }).then((data) => {
            console.log(data);
        });
    };

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.elements.email.value;
            const password = e.target.elements.password.value;
            loginUser(email, password);
        }}>
            <h3>Log in</h3>

            <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input name="password" type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
            <p className="forgot-password text-right">
                Forgot <Link to="#">password?</Link>
            </p>

        </form>

        // <Container>
        //     <Form
        // onSubmit={(e) => {
        //     e.preventDefault();
        //     const email = e.target.elements.email.value;
        //     const password = e.target.elements.password.value;
        //     loginUser(email, password);
        // }}
        //     >
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control
        //                 name="email"
        //                 required={true}
        //                 type="email"
        //                 placeholder="Enter email"
        //             />
        //             <Form.Text className="text-muted">
        //                 We'll never share your email with anyone else.
        //             </Form.Text>
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control
        //                 name="password"
        //                 required={true}
        //                 type="password"
        //                 placeholder="Password"
        //             />
        //         </Form.Group>
        //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //             <Form.Check type="checkbox" label="Check me out" />
        //         </Form.Group>
        //         <Button variant="primary" type="submit">
        //             Submit
        //         </Button>
        //     </Form>
        // </Container>
    );
}

export default Login;