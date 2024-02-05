import { useLocation, useNavigate } from "react-router-dom";
import axiosHttp from "../../../../core/interceptor";
import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import IUser from "../../../../core/models/user.model";

export default function CreateUser() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [userDetails, setUserDetails] = useState<IUser | null>(null);

  useEffect(() => {
    if (state !== null) {
      axiosHttp.get(`users/${state.id}`).then((response) => {
        setUserDetails(response.data);
      });
    }
  }, [state]);

  const formik = useFormik({
    initialValues: {
      name: userDetails?.name || "",
      email: userDetails?.email || "",
      phone: userDetails?.phone || "",
      website: userDetails?.website || "",
      company: "",
      country: userDetails?.country?.name || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid Email Address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="col-md-6"></div>
      <h2 className="mb-5">{state ? "Update" : "Create"} User</h2>
      <Form className="form" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="full name"
                id="name"
                {...formik.getFieldProps("name")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                id="email"
                {...formik.getFieldProps("email")}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="+201033842262"
                id="phone"
                {...formik.getFieldProps("phone")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://www.google.com"
                id="website"
                {...formik.getFieldProps("website")}
              />
            </Form.Group>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="zr3i"
                id="company"
                {...formik.getFieldProps("company")}
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Select id="country" {...formik.getFieldProps("country")}>
                <option>Choose Country</option>
                <option value="1">Egypt</option>
                <option value="2">Saudi Arabia</option>
                <option value="3">Other</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>
        <div className="d-flex justify-content-start">
          <Button
            variant="primary"
            className="mt-3"
            type="submit"
            disabled={!formik.isValid}
          >
            {state ? "Update" : "Create"} User
          </Button>
        </div>
      </Form>
    </>
  );
}
