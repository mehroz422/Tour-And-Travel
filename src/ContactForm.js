import React from "react";

import { Form, Field, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ContactForm({ errors, touched, isValid, dirty }) {


const navigate = useNavigate();

  return (
   
          <Form >
      <div className="form-group">
        <label className="col-form-label" style={{marginLeft:"-530px"}}>Name :</label>
        <Field
          name="registration"
          className={
            touched.registration
              ? `form-control ${errors.registration ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.registration && errors.registration && (
          <small className="text-danger">{errors.registration}</small>
        )}
      </div>

      <div className="form-group">
        <label className="col-form-label" style={{marginLeft:"-500px"}}>UserName :</label>
        <Field
          name="username"
          className={
            touched.username
              ? `form-control ${errors.username ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.username && errors.username && (
          <small className="text-danger">{errors.username}</small>
        )}
      </div>

      <div className="form-group">
        <label className="col-form-label" style={{marginLeft:"-510px"}}> Tour Days : </label>
        <Field   as="select" 
          name="program"
          className={
            touched.program
              ? `form-control ${errors.program ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
          
        >
        <option value="Invalid"></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
          </Field> 
        {touched.program && errors.program && (
          <small className="text-danger">{errors.program}</small>
        )}
      </div>

      <label className="col-form-label" style={{marginLeft:"-520px"}}>Gender :</label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <br/>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            <br/>
            {touched.gender && errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}
            
          </div>

        


          
          <label className="col-form-label" style={{marginLeft:"-450px"}}> Services Selection: </label>
          <div role="group" aria-labelledby="my-checkbox-group" style={{justifyContent:"center"}}>
            <label>
              <Field type="checkbox" name="services" value="guide,"  />
              Specilaized Guide
            </label>
            <br/>
            <label >
              <Field type="checkbox" name="services" value="transportation," />
              Private Transport
            </label>
            <br/>
            <label >
              <Field type="checkbox" name="services" value="fees," />
              Entrance Fees
            </label>
            <br/>
            <label >
              <Field type="checkbox" name="services" value="dinners," />
              Box Lunch,Water,Dinner and Snacks
            </label>
            <br/>
            {touched.services && errors.services && (
          <small className="text-danger">{errors.services}</small>
        )}


          </div>
      
          <label className="col-form-label" style={{marginLeft:"-420px"}}> Upload Image: </label>
          <div role="group" >
              <Field type="file" name="image"   />
              
          {touched.image && errors.image && (
          <small className="text-danger">{errors.image}</small>
          )}
            
          </div>
         

          
     


     
      <Link to='/register' >
      <button 
        type="submit"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
      >
        Submit
      </button>
      </Link>
      
    
    </Form>
        
  );
}

export default ContactForm;
