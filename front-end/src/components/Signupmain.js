import React from "react";
import "./Signupmain.scss";
import { useContext } from "react";
import Card from "./elements/Card";
import { TextField, Select } from "./elements/FormField";
import Button from "./elements/Button";
import { useFormik } from "formik";
import { login, register } from "../Helper/Helper"
import { ThemeContext } from '../Helper/ThemeProvider.js'
import { useAuth } from '../store/Store.jsx'
import { validateRegister } from '../Helper/Validate'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Signupmain() {
  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const genderOptions = ["Select Your Gender", "Male", "Female", "others"];
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      email: "",
      phonenumber: "",
    },
    validate: validateRegister,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      let name = `${values.firstname} ${values.lastname}`;
      let registerPromise = register({
        values: {
          username: values.firstname,
          email: values.email,
          password: values.firstname,
          name: name,
          gender: values.gender,
          phonenumber: values.phonenumber,
        },
      });
      toast.promise(registerPromise, {
        success: "Registered Successfully",
        error: "Registration failed",
        loading: "Registering",
      });
      registerPromise
        .then((res) => {
          let loginPromise = login({
            values: { username: values.email, password: values.firstname },
          });
          toast.promise(loginPromise, {
            success: "Login Successfull",
            error: "Login Failed",
            loading: "Checking",
          });
          loginPromise
            .then((res) => {
              dispatch({ type: "LOGIN", payload: res });
              navigate("/");
            })
            .catch((err) => {
              toast.error("Login Failed");
            });
        })

        .catch((err) => {
          if (err?.response?.data?.username) {
            toast.error(err?.response?.data?.username);
          } else if (err?.response?.data?.email) {
            toast.error(err?.response?.data?.email);
          } else if (err?.response?.data?.phonenumber) {
            toast.error(err?.response?.data?.phonenumber);
          }
        });
    },
  });
  return (
    <div className="signupmain">
      <section className="Register">
        <Toaster position="top-center" reverseOrder={false} />
        <Card
          bgcolor={"#fff"}
          height={"80vh"}
          width={"30%"}
          radius={"25px"}
          CustomClass={"RegCard"}
          border={`1px solid ${theme.color3}`}
        >
          <h2 className="head">REGISTER</h2>
          <form className="RegForm">
            <TextField
              legend={"First Name"}
              width={"100%"}
              border={`1px solid ${theme.color1}`}
              placeholder={"Enter your First Name"}
              type={"text"}
              fieldProp={formik.getFieldProps("firstname")}
              padding={"1em"}
            />
            {formik.errors.firstname && (
              <span className="error-text">{formik.errors.firstname}</span>
            )}
            <TextField
              legend={"Last Name"}
              width={"100%"}
              border={`1px solid ${theme.color1}`}
              placeholder={"Enter your Last Name"}
              type={"text"}
              fieldProp={formik.getFieldProps("lastname")}
            />
            {formik.errors.lastname && (
              <span className="error-text">{formik.errors.lastname}</span>
            )}
            <Select
              options={genderOptions}
              legend={"Gender"}
              width={"100%"}
              border={`1px solid ${theme.color1}`}
              placeholder={"Enter your Gender"}
              type={"button"}
              fieldProp={formik.getFieldProps("gender")}
            />
            {formik.errors.gender && (
              <span className="error-text">{formik.errors.gender}</span>
            )}
            <TextField
              legend={"Email"}
              width={"100%"}
              border={`1px solid ${theme.color1}`}
              placeholder={"Enter your Email Id"}
              type={"email"}
              fieldProp={formik.getFieldProps("email")}
            />
            {formik.errors.email && (
              <span className="error-text">{formik.errors.email}</span>
            )}
            <TextField
              legend={"Phone Number"}
              width={"100%"}
              border={`1px solid ${theme.color1}`}
              placeholder={"Enter your Phone number"}
              type={"text"}
              fieldProp={formik.getFieldProps("phonenumber")}
            />
            {formik.errors.phonenumber && (
              <span className="error-text">{formik.errors.phonenumber}</span>
            )}
            <div className="centerAlign">
              <Button
                text={"Submit"}
                radius={"20px"}
                type={"submit"}
                width={"8rem"}
                height={"2.5rem"}
                customClass={"regButton"}
                onClick={formik.handleSubmit}
              />
            </div>
          </form>
          <div className="Signuplink">
            <p>
              Don't have an account?
              <Link to="/signin">Signin</Link>
            </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
