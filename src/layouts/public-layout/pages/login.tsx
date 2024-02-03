import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axiosHttp from "../../../core/interceptor";
import { RolesEnum } from "../../../core/enums/roles.enum";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid Email Address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "minimum is 6 characters!"),
    }),
    onSubmit: (values) => {
      axiosHttp.get("https://fakestoreapi.com/products");
      localStorage.setItem("token", "token");
      localStorage.setItem("role", RolesEnum.superAdmin);
    },
  });

  return (
    <div className="co-auth-page login">
      <div className="co-page-data">
        <div className="co-form">
          <img src={logo} className="img-fluid logo mb-5" alt="logo" />

          <h4 className="mb-3"> Login </h4>
          <Form className="form mb-3" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="email"
                {...formik.getFieldProps("email")}
                type="email"
                placeholder="name@example.com"
                autoComplete="off"
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error-area">{formik.errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label> password </Form.Label>
              <Form.Control
                {...formik.getFieldProps("password")}
                id="password"
                type="password"
                placeholder="*****"
                autoComplete="off"
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="error-area">{formik.errors.password}</div>
              ) : null}
            </Form.Group>

            <Button type="submit" className="w-100" disabled={!formik.isValid}>
              Login
            </Button>
          </Form>

          <a href="#"> Forget Password </a>

          <div className="form-group mb-0 mt-3 text-center">
            <p>
              Creating an account means that you fully agree to our{" "}
              <a href="#/terms"> Terms of Service and Conditions .</a>
            </p>
            <p>
              Dont have account? <Link to={"/register"}> Register!</Link>{" "}
            </p>
            <p>
              Swich Language? <a href="#/login"> العربية</a>
            </p>
          </div>
        </div>
      </div>
      <div className="co-wallpaper">
        <div className="top-text text-center p-3 pt-5">
          <h1 className="text-white"> welcome to zar3i app </h1>
          <p className="text-white">
            We provide the best services for our clients 100% guaranteed trust
            and satisfaction
          </p>
        </div>
      </div>
    </div>
  );
}
