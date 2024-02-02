import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import axiosHttp from "../../../core/interceptor";

import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";

export default function Register() {


    return (

        <div className="co-auth-page login">

            <div className="co-page-data">

                <div className="co-form">

                    <img src={logo} className="img-fluid logo mb-4" alt="logo" />

                    <h4 className="mb-3"> Register </h4>

                    <Form className="form mb-3">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label> Full name</Form.Label>
                            <Form.Control type="text" placeholder="Your full name" />
                        </Form.Group>


                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>



                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                            <Form.Label> password </Form.Label>
                            <Form.Control type="password" placeholder="*****" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm">

                            <Form.Label> Gender </Form.Label>
                            <div className="row">
                                <div className="col-md-3">
                                    <Form.Check
                                        type={'radio'}
                                        id={`male`}
                                        label={`male`}
                                    />
                                </div>
                                <div className="col-md-3">
                                    <Form.Check
                                        type={'radio'}
                                        id={`female`}
                                        label={`female`}
                                    />
                                </div>
                            </div>

                        </Form.Group>

                        <Button className="w-100"> Register </Button>

                    </Form>


                    <div className="form-group mb-0 mt-3 text-center">
                        <p> Creating an account means that you fully agree to our <a href="#/terms"> Terms of Service and Conditions .</a></p><p> Already have account?  <Link to={'/login'}> Login!</Link> </p>
                        <p> Swich Language? <a href="#/login"> العربية</a></p>
                    </div>

                </div>
            </div>
            <div className="co-wallpaper">

                <div className="top-text text-center p-3 pt-5">
                    <h1 className="text-white"> welcome to zar3i app </h1>
                    <p className="text-white"> We provide the best services for our clients 100% guaranteed trust and satisfaction </p>
                </div>

            </div>
        </div>

    );
}
