import React, { useState } from "react";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import "./register.css";
import { useDispatch } from "react-redux";
import * as AppConstants from '../../constants/AppConstants';
import { USER_REGISTER } from "../../components/constant/type";

function Register() {
  const dispatch = useDispatch();

  const fnRegister = (res) => {

    console.log('res',res);

    if(res != "" && res.email != "" &&  res.name != "" && res.mobile != "" && res.password != "")
    {
      dispatch({ type: USER_REGISTER, payload: res });
      alert("Registered successfully!");
      // const BaseURL = 'http://localhost/api/save_user.php';
      // axios.post(BaseURL, {
      //   res
      //   })
      //   .then((response) => {
      //     if(response)
      //     {
      //       console.log(response);
      //       dispatch({ type: USER_REGISTER, payload: res });
      //       alert("Registered successfully!");
      //     }
          
      //   }, (error) => {
      //     console.log(error);
      //   });   
    }
  };

  const [userInfo, setuserInfo] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
    email: "",
    mobile: "",
  });
  const [success, setsuccess] = useState(false);

  const fnonChange = (event) => {
     const { name, value } = event.target;
     let errors = {};
     let error = '';
     const validEmailRegex = 
     RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
     switch (name) {

       case 'name':
        if((/\s/.test(value)))
        {
         error = errors.name =  AppConstants.VALIDATION_INVALID_NAME;
        }
        else if(value.length > 50)
        {
         error =  errors.name = AppConstants.VALIDATION_NAME_MAX_CHAR;
        }
        else
        {
         error =  errors.name = ''; 
        }
        break;

        case 'email':
         if(!validEmailRegex.test(value))
         {
          error = errors.email =  AppConstants.VALIDATION_INVALID_EMAIL;
         }
         else if(value.length > 254)
         {
          error =  errors.email = AppConstants.VALIDATION_EMAIL_MAX_CHAR;
         }
         else
         {
          error =  errors.email = ''; 
         }
         break;

         case 'mobile':
          if((/\s/.test(value)) || !(/^-?[\d.]+(?:e-?\d+)?$/.test(value)))
          {
           error = errors.mobile =  AppConstants.VALIDATION_INVALID_MOBILE;
          }
          else if(value.length < 10)
          {
           error =  errors.mobile = AppConstants.VALIDATION_MOBILE_MIN_CHAR;
          }
          else if(value.length > 10)
          {
           error =  errors.mobile = AppConstants.VALIDATION_MOBILE_MAX_CHAR;
          }
          else
          {
           error =  errors.mobile = ''; 
          }

          console.log('regex value',(/^-?[\d.]+(?:e-?\d+)?$/.test(value)));
          break;

         case 'password':        
         if(/\s/.test(value))
         {
          error = errors.password = AppConstants.VALIDATION_PASSWORD_WITH_SPACE;
         }
         else if(value.length < 8)
         {
          error = errors.password = AppConstants.VALIDATION_PASSWORD_MIN_CHAR; 
         }
         else if(value.length > 30)
         {
          error =  errors.password = AppConstants.VALIDATION_PASSWORD_MAX_CHAR;
         }
         else
         {
          error =  errors.password = ''; 
         }
         break;
       default:
         break;
     }
 
     setErrors({[name]: error});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(userInfo);
    fnRegister(userInfo);
    setuserInfo({ name: "", email: "", mobile: "", password: "" });
    setsuccess(true);
  };
  if (success) {
    console.log(success);
    setsuccess(false);
    return <Redirect to={"/"} />;
  }
  
  return (
    <div>
      <section className="login_container">
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Col sm="5" className="reg-container">
              <div>
                <h1>Register</h1>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                      type="text"
                      value={userInfo.name}
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      onChange={(event) =>
                        {
                        setuserInfo({
                          name: event.target.value,
                          password: userInfo.password,
                          email: userInfo.email,
                          mobile: userInfo.mobile,
                        })
                        fnonChange(event)
                        }
                      }
                    />
                    {(errors.name)? <div className='error'>{errors.name}</div> : ''}
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      value={userInfo.email}
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      onChange={(event) =>
                            {
                            setuserInfo({
                              name: userInfo.name,
                              password: userInfo.password,
                              email: event.target.value,
                              mobile: userInfo.mobile,
                            })
                            fnonChange(event)
                          }
                      }
                    />
                    {(errors.email)? <div className='error'>{errors.email}</div> : ''}
                  </FormGroup>
                  <FormGroup>
                    <Label for="mobile">Mobile</Label>
                    <Input
                      type="text"
                      value={userInfo.mobile}
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile"
                      required
                      onChange={(event) =>
                      {
                        setuserInfo({
                          name: userInfo.name,
                          password: userInfo.password,
                          email: userInfo.email,
                          mobile: event.target.value,
                        })
                        fnonChange(event)
                      }
                      }
                    />
                    {(errors.mobile)? <div className='error'>{errors.mobile}</div> : ''}
                  </FormGroup>
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      value={userInfo.password}
                      name="password"
                      id="password"
                      placeholder="********"
                      required
                      onChange={(event) =>
                        {
                          setuserInfo({
                            name: userInfo.name,
                            password: event.target.value,
                            email: userInfo.email,
                            mobile: userInfo.mobile,
                          })
                          fnonChange(event)
                        }
                      }
                    />
                    {(errors.password)? <div className='error'>{errors.password}</div> : ''}
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" className="reg_btn">
                      REGISTER
                    </Button>
                    <p>
                      Having account ! <Link to="/"> Login </Link>
                    </p>
                  </FormGroup>
                </Form>
              </div>
            </Col>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
