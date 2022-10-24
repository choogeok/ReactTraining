import React, { Component } from 'react';
import Button from '@mui/material/Button';
import "./App.css";

class FormInput extends Component{

    state = {
         name:'',
         dob:'',
         email:'',
         contact:'',
         description:'',
        errormsg:{
            nameError:'',
            dobError:'',
            emailError:'',
            contactError:'',
           },
        formCheck:false,
    };

    // To handle the change in the User Input
    handleChange = (e) => {
        if(e.target.id == 'name'){
            this.checkName(e.target.value);
        } else if(e.target.id == 'dob'){
                this.checkDob(e.target.value);
                } else if(e.target.id == 'email'){
                    this.checkEmail(e.target.value);
                    }else if(e.target.id == 'contact'){
                        this.checkContact(e.target.value);
                    }else if(e.target.id == 'description'){
                        this.setState({description:e.target.value})
                    }
                };

    // Validation of Name Field
    checkName = (nameUpdate) => {
        let nameError = this.state.errormsg.nameError;
        let formCheck = this.state.formCheck;
        let regex = /^[a-zA-Z\s]*$/ ;
        if(nameUpdate.trim() === ''){
            nameError = "Please Enter Name";
            formCheck = false;
        }else if (!regex.test(nameUpdate)){
            nameError = "Characters A-Z or a-z only";
            formCheck = false;
        } else {
            nameError ='';
            formCheck = true;
        }
        this.setState({
            name: nameUpdate,
            errormsg:{...this.state.errormsg,nameError}
        });
        return formCheck;
    }

    // Validation of DOB Field
    checkDob = (dobUpdate) => {
        let dobError = this.state.errormsg.dobError;
        let formCheck = this.state.formCheck;
        let date = new Date() ;
        let checkdate = date.getFullYear() +"-" + (Number(date.getMonth())+Number(1)) + "-" + date.getDate();
        if(dobUpdate === ''){
            dobError = "Please Input Date of Birth";
            formCheck = false;
        }else if (dobUpdate >= checkdate){  
            dobError = "Date of Birth must be smaller than current date ";
            formCheck = false;
        } else {
            dobError ='';
            formCheck = true;
        }
        this.setState({
            dob: dobUpdate,
            errormsg:{...this.state.errormsg,dobError}
        });
        return formCheck;
    }

    // Validation of Email Field
    checkEmail = (emailUpdate) => {
        let emailError = this.state.errormsg.emailError;
        let formCheck = this.state.formCheck;
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
        if(emailUpdate.trim() === ''){
            emailError = "Please Input Email";
            formCheck = false;
        }else if (!regex.test(emailUpdate)){
            emailError = "Invalid Email Address";
            formCheck = false;
        } else {
            emailError ='';
            formCheck = true;
        }
        this.setState({
            email: emailUpdate,
            errormsg:{...this.state.errormsg,emailError}
        });
        return formCheck;
    }

    // Validation of Contact Field
    checkContact = (contactUpdate) => {
        let contactError = this.state.errormsg.contactError;
        let formCheck = this.state.formCheck;
        let regex = /^[0-9]{10}$/ ;
        if(contactUpdate.trim() === ''){
            contactError = "Please Enter Contact Number";
            formCheck = false;
        }else if (!regex.test(contactUpdate)){
            contactError = "Contain exactly 10 digits";
            formCheck = false;
        } else {
            contactError ='';
            formCheck = true;
        }
        this.setState({
            contact: contactUpdate,
            errormsg:{...this.state.errormsg,contactError}
        });
        return formCheck;
    }

    //To handle the Submit Button Event 
    handleSubmit = (e) => {
        e.preventDefault();
        let nameCheck = this.checkName(this.state.name);
        let dobCheck = this.checkDob(this.state.dob);
        let emailCheck = this.checkEmail(this.state.email);
        let contactCheck = this.checkContact(this.state.contact);
        if (nameCheck && dobCheck && emailCheck && contactCheck){
            alert("form submitted");
            this.props.data(this.state);
            this.setState({
                name:'',
                dob:'',
                email:'',
                contact:'',
                description:'',
            });
        }else{
            alert("Please Check Your Details")
        }
    }

    render() {
        return (
            <div>
                <form className='formInput' onSubmit={this.handleSubmit}> 
                <fieldset> 
                <legend> User Form Input </legend>
                <label htmlFor='name'> Name </label> 
                <input type="text" id="name" name="name" placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
                <h5>{this.state.errormsg.nameError}</h5> 

                <label htmlFor='dob'> Date of Birth </label>
                <input type="date" id="dob" name="dob" placeholder='Date of Birth' value={this.state.dob} onChange={this.handleChange}/>
                <h5>{this.state.errormsg.dobError}</h5> 

                <label htmlFor='email'> Email Address </label>
                <input type="email" id="email" name="email" placeholder='Email' value={this.state.email} onChange={this.handleChange}/>
                <h5>{this.state.errormsg.emailError}</h5> 
                
                <label htmlFor='contact'> Contact No. </label>
                <input type="number" id="contact" name="contact" placeholder='Contact No.' value={this.state.contact} onChange={this.handleChange}/>
                <h5>{this.state.errormsg.contactError}</h5> 

               <label htmlFor='description'> About Me </label>
               <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
               <br/><br/>
                
                <Button variant="contained" type="submit">Submit Form </Button>
                </fieldset>
                </form>
                </div>

        );
    }
};
export default FormInput;