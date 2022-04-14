import { Link } from "react-router-dom";
import { Button, Form, Container, Col, Row } from "react-bootstrap";

function Login(params) {
    const loginUserFetch = async (url = "", data = {}) => {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    };

    const loginUser = (email, password) => {
        loginUserFetch("https://task-manager-cagri.herokuapp.com/users/login", {
            email,
            password,
        }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
        });
    };

    return (
        <Container>
            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    const email = e.target.elements.email.value;
                    const password = e.target.elements.password.value;
                    loginUser(email, password);
                }}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        required={true}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        required={true}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default Login;
