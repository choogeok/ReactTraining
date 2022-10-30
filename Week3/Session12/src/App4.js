import React, { useState } from "react";

function App() {
    const initialValue = { firstName: "", lastName: "" };
    const [formData, setFormData] = useState(initialValue);
    const [formError, setFormError] = useState({});
    const [formCheck, setFormCheck] = useState(false);

    // For user input check
    function handleChange(e) {
        const { name, value } = e.target;
        if ([name] == "firstname") {
            setFormError(checkfname(value));
        } else if ([name] == "lastname") {
            setFormError(checklname(value));
        } else if ([name] == "email") {
            setFormError(checkemail(value));
        }
    }

    //Validation check for First Name Field
    const checkfname = (updatefname) => {
        let errors = {};
        if (!updatefname) {
            errors.firstName = "Please enter First Name";
            setFormCheck(false);
        } else if (updatefname.length < 3) {
            errors.firstName = "Minimum 3 characters";
            setFormCheck(false);
        } else {
            errors.firstName = "";
            setFormCheck(true);
        }
        return errors;
    };

    // Validation check for Last Name field
    const checklname = (updatelname) => {
        let errors = {};
        if (!updatelname) {
            errors.lastName = "Please enter Last Name";
            setFormCheck(false);
        } else if (updatelname.length < 2) {
            errors.lastName = "Minimum 2 characters";
            setFormCheck(false);
        } else {
            errors.lastName = "";
            setFormCheck(true);
        }
        return errors;
    };

    // Validation check for Email field
    const checkemail = (updateemail) => {
        let regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let errors = {};
        if (!updateemail) {
            errors.email = "Please enter Email Address";
            setFormCheck(false);
        } else if (!regex.test(updateemail)) {
            errors.email = "Incorrect Email Format";
            setFormCheck(false);
        } else {
            errors.email = "";
            setFormCheck(true);
        }
        return errors;
    };

    // To handle the submit button click
    function handleSubmit(e) {
        e.preventDefault();
        if (formCheck === true) {
            alert("Form is Submitted");
        } else {
            alert("Data incorrect");
        }
    }

    return (
        <div>
            <h2> Form Input </h2>
            <form onSubmit={handleSubmit}>
                <fieldset> 
                    <legend style={{color:"blue", fontSize:20, padding:10}}> Input Data </legend>
                <label htmlFor="firstname"> First Name</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={setFormData.firstName}
                    onChange={handleChange}
                />
                <p> {formError.firstName}</p>

                <label htmlFor="lastname"> Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={setFormData.lastName}
                    onChange={handleChange}
                />
                <p> {formError.lastName}</p>

                <label htmlFor="email"> Email Address </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={setFormData.email}
                    onChange={handleChange}
                />
                <p> {formError.email}</p>

                <button> Submit Form </button>
                </fieldset>
            </form>
        </div>
    );
}
export default App;
