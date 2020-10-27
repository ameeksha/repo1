import React, { Component } from 'react';
import Input from './common/input';
import Form from './common/form';
import Joi from 'joi-browser';


class LoginForm extends Form {

    state = {
       data: {
        username: "",
        password: ""
       },

       errors: {}
    }

    schema = {
        username : Joi.string().required().label('Username'),
        password : Joi.string().required().label('Password')
    }

    // username = React.createRef();
    validate= () =>
    {
        const result = Joi.validate(this.state.data, this.schema, {
            abortEarly: false
        })
       
        if(!result.error) return null;
        const errors= {};
        for(let item of result.error.details)
            errors[item.path[0]] = item.message;
        return errors;
    };

    validateProperty = ({name, value}) =>
    {
        const obj = { [name] : value};
        const schema = { [name] : this.schema[name]};
        const{error}=Joi.validate(obj, schema);
        if(!error) return null;
        return error.details[0].message;
    }

    doSubmit= () =>
    {
    
        console.log("Submitted");

    }

   
    render() {
        
        return ( 
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handlEvent}>
                   {this.renderInput('username','Username')}
                   {this.renderInput('password','Password','password')}
                    {this.renderButton("Login")}
                </form>
            </div>
         );  
        };
}
 
export default LoginForm;