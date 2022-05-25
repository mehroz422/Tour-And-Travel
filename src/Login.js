import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import Si1 from "../src/assets/Si1.jpg";



class Login extends React.Component {
 
  validationSchema() {
    return Yup.object().shape({
      fullname: Yup.string().required('Fullname is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    });
  }
 
constructor(props) {
  super(props);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(data) {
  console.log(JSON.stringify(data, null, 2));
}

render() {
  const initialValues = {
   
    email: '',
    password: '',
  };
  return (
    <div style={{display:"flex",flexDirection:"row"}}>

    <img src={Si1} style={{marginTop:"40px", marginLeft:"50px",borderBottomRightRadius:"500px", width:"60%", height:"630px"}}/>

    <div className="register-form shadow p-5" style={{backgroundColor:"white", marginTop:"40px" , borderRadius:"30px",position: "absolute", left: "800px", top: "125px", width:"400px"}}>
      <Formik
        initialValues={initialValues}
        validationSchema={this.validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ resetForm }) => (
          <Form>
           
            <div className="form-group">
              <label htmlFor="email"> Email </label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password"> Password </label>
              <Field
                name="password"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </div>
        
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="btn btn-danger float-right"
              >
                Reset
              </button>
            
               
            </div>
            <h6 className='mt-4'>Don't Have an account?<Link className="Si mx-3" to={'/sign-up'}><strong>SignUp</strong></Link></h6>
          </Form>
        )}
      </Formik>
    </div>
    </div>
  );
}
}


export default Login;