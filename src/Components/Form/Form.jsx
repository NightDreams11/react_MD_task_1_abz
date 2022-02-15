import React from 'react';
import {Button, Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import {useForm} from 'react-hook-form';
import HelperText from "../HelperText/HelperText";
import {useState} from "react";

const style = {
    mt: 7,
    width: 380,
    height: 54,
    helperText: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
};




function Form() {

    const {register, handleSubmit, formState: {errors},} = useForm();

    const onSubmit = (data) => (console.log(data));
    console.log(errors);


    // const [values, setValues] = React.useState({
    //     name: ""
    // });
    // const handleChange = (name) => event => {
    //     setValues({...values, [name]: event.target.value});
    // };




    const [stringLength, setStringLength] = useState('');

    let errorMessage = () => {
        if (stringLength.length < 2) {
            return 'Your name needs to be between 2 and 128 characters long'
        } else if (stringLength.length > 128) {
            return 'Your name needs to be between 2 and 128 characters long'
        } else {
            return false;
        }
    }

    return (
        <Container
            sx={{
                textAlign: 'center',
                height: '100vh',
            }}
        >
            <form onSubmit={handleSubmit(onSubmit)} style={{...style.form}} noValidate>
                <TextField
                    sx={{...style}}
                    label="Name*"
                    {...register("name", {required: "Enter your name"})}
                    error={(stringLength.length < 2) ? true : ((stringLength.length > 128) ? true : false)}
                    helperText={<HelperText error={errorMessage()}
                                            counter={`${stringLength.length}/${128}`}/>}
                    onChange={e => {
                        // handleChange("name");
                        setStringLength(e.target.value)
                    }}
                    // inputProps={{minLength: 2, maxLength: 128}}
                    FormHelperTextProps={{style: style.helperText}} //Специальный props для стилизации helperText
                />


                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Email*"
                    {...register("email", {
                        required: "Enter your email", pattern: {
                            value: /^([a-zA-Z0-9\.]+[^@\s!#$%&'*+\/=?^_`{|}~\-\.])[@][a-zA-Z]+[\.]{1}[a-zA-Z]+([\.]{1}|[a-zA-Z])+([a-zA-Z]$)/,
                            message: "Please insert a valid email address",
                        }
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                />
                <TextField sx={{...style}} id="outlined-basic" label="Email RFC" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="ID" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="id*" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="Phone*" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="Phone" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="Pin code" variant="outlined"/>
                <TextField sx={{...style}} id="outlined-basic" label="Pin code" variant="outlined"/>
                <Button type="submit" variant="contained">Send</Button>
            </form>
        </Container>
    );
}

export default Form;
