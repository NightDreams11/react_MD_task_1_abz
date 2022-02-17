import React from 'react';
import {Button, Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import HelperText from "../HelperText/HelperText";
import {useState} from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {errorMessage, emailIsValid, emailIsValidRFC, IDIsValid, PhoneIsValid, PinIsValid} from "../../Validators/validators";
import InputMask from "react-input-mask";


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
    button: {
        mt: 12,
        width: 120,
        height: 42
    },
};


function Form() {

    const onSubmit = (data) => (console.log(data));
    //Name field
    const [stringLength, setStringLength] = useState('');
    const [isDirty, setIsDirty] = useState(false);
    //Email field
    const [emailLength, setEmailLength] = useState('');
    const [isDirtyEmail, setIsDirtyEmail] = useState(false);
    //EmailRFC field
    const [emailLengthRFC, setEmailLengthRFC] = useState('');
    const [isDirtyEmailRFC, setIsDirtyEmailRFC] = useState(false);
    //ID field
    const [ID, setID] = useState('');
    const [isDirtyID, setIsDirtyID] = useState(false);
    //ID field
    const [id_, setId_] = useState('');
    const [isDirtyId_, setIsDirtyId_] = useState(false);
    //Phone* field
    const [PhoneMark, setPhoneMark] = useState('');
    const [isDirtyPhoneMark, setIsDirtyPhoneMark] = useState(false);
    //Phone
    const [Phone, setPhone] = useState('');
    const [isDirtyPhone, setIsDirtyPhone] = useState(false);
    //Pin code1
    const [PinCode1, setPinCode1] = useState('');
    const [isDirtyPinCode1, setIsDirtyPinCode1] = useState(false);
    //Pin code2
    const [PinCode2, setPinCode2] = useState('');
    const [isDirtyPinCode2, setIsDirtyPinCode2] = useState(false);
    //Description
    const [description, setDescription] = useState('');
    console.log(PhoneMark)


    return (
        <Container
            sx={{
                textAlign: 'center',
                height: '100vh',
            }}
        >
            <form onSubmit={(onSubmit)} style={{...style.form}} noValidate>
                {/*Name field*/}
                <TextField
                    sx={{...style}}
                    label="Name*"
                    inputProps={{maxLength: 128}}
                    InputProps={{
                        endAdornment: isDirty ? (errorMessage(stringLength) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    error={isDirty ? (errorMessage(stringLength) ? true : false) : false}
                    helperText={<HelperText error={errorMessage(stringLength) ? true : false}
                                            errorMessage={errorMessage(stringLength)}
                                            counter={`${stringLength.length}/${128}`}
                                            isDirty={isDirty}/>}
                    onChange={e => {
                        setStringLength(e.target.value.trim())
                    }}
                    onBlur={e => setIsDirty(true)}
                    FormHelperTextProps={{style: style.helperText}} //Специальный props для стилизации helperText
                />
                {/*Email field*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Email*"
                    inputProps={{maxLength: 254}}
                    InputProps={{
                        endAdornment: isDirtyEmail ? (emailIsValid(emailLength) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setEmailLength(e.target.value)
                    }}
                    error={isDirtyEmail ? (emailIsValid(emailLength) ? true : false) : false}
                    helperText={<HelperText error={emailIsValid(emailLength) ? true : false}
                                            errorMessage={emailIsValid(emailLength)}
                                            counter={`${emailLength.length}/${254}`}
                                            isDirty={isDirtyEmail}
                                            description={'Enter your email'}/>}
                    onBlur={e => setIsDirtyEmail(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*//EmailRFC field*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Email RFC"
                    inputProps={{maxLength: 254}}
                    InputProps={{
                        endAdornment: isDirtyEmailRFC ? (emailIsValidRFC(emailLengthRFC) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setEmailLengthRFC(e.target.value)
                    }}
                    error={isDirtyEmailRFC ? (emailIsValidRFC(emailLengthRFC) ? true : false) : false}
                    helperText={<HelperText error={emailIsValidRFC(emailLengthRFC) ? true : false}
                                            errorMessage={emailIsValidRFC(emailLengthRFC)}
                                            counter={`${emailLengthRFC.length}/${254}`}
                                            isDirty={isDirtyEmailRFC}
                                            description={'Enter your email'}/>}
                    onBlur={e => setIsDirtyEmailRFC(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*ID field*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="ID"
                    InputProps={{
                        endAdornment: isDirtyID ? (IDIsValid(ID) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setID(e.target.value)
                    }}
                    error={isDirtyID ? (IDIsValid(ID) ? true : false) : false}
                    helperText={<HelperText error={IDIsValid(ID) ? true : false}
                                            errorMessage={IDIsValid(ID)}
                                            isDirty={isDirtyID}
                                            description={'Use only latin lowercase letters, numbers and "_"'}/>}
                    onBlur={e => setIsDirtyID(true)}
                    FormHelperTextProps={{style: style.helperText}}/>
                {/*id_ field*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="id_"
                    inputProps={{maxLength: 128}}
                    InputProps={{
                        endAdornment: isDirtyId_ ? (IDIsValid(id_) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setId_(e.target.value)
                    }}
                    error={isDirtyId_ ? (IDIsValid(id_) ? true : false) : false}
                    helperText={<HelperText error={IDIsValid(id_) ? true : false}
                                            errorMessage={IDIsValid(id_)}
                                            counter={`${id_.length}/${128}`}
                                            isDirty={isDirtyId_}
                                            description={'Use only latin lowercase letters, numbers and "_"'}/>}
                    onBlur={e => setIsDirtyId_(true)}
                    FormHelperTextProps={{style: style.helperText}}/>
                {/*Phone**/}
                <InputMask
                    mask="+38 (099) 999 99 99"
                    value={PhoneMark}
                    disable={false}
                    maskChar=" "
                    onBlur={e => setIsDirtyPhoneMark(true)}
                    onChange={(e) => {setPhoneMark(e.target.value)}}
                >{ () =>
                    <TextField
                        sx={{...style}}
                        id="outlined-basic"
                        label="Phone*"
                        InputProps={{
                            endAdornment: isDirtyPhoneMark ? (PhoneIsValid(PhoneMark) ? <ErrorOutlineIcon/> :
                                <CheckCircleOutlineOutlinedIcon/>) : false
                        }}
                        // onChange={e => {
                        //     setPhoneMark(e.target.value)
                        // }}
                        error={isDirtyPhoneMark ? (PhoneIsValid(PhoneMark) ? true : false) : false}
                        helperText={<HelperText error={PhoneIsValid(PhoneMark) ? true : false}
                                                errorMessage={PhoneIsValid(PhoneMark)}
                                                isDirty={isDirtyPhoneMark}
                                                description={'+38 (xxx) xxx-xx-xx'}/>}
                        // onBlur={e => setIsDirtyPhoneMark(true)}
                        FormHelperTextProps={{style: style.helperText}}/>
                }</InputMask>
                {/*Phone*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Phone"
                    inputProps={{maxLength: 256}}
                    InputProps={{
                        endAdornment: isDirtyPhone ? (PhoneIsValid(Phone) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setPhone(e.target.value)
                    }}
                    error={isDirtyPhone ? (PhoneIsValid(Phone) ? true : false) : false}
                    helperText={<HelperText error={PhoneIsValid(Phone) ? true : false}
                                            errorMessage={PhoneIsValid(Phone)}
                                            counter={`${emailLengthRFC.length}/${256}`}
                                            isDirty={isDirtyPhone}
                                            description={'Several numbers can be entered separated by commas'}/>}
                    onBlur={e => setIsDirtyPhone(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*Pin code1*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Pin code"
                    inputProps={{maxLength: 8}}
                    InputProps={{
                        endAdornment: isDirtyPinCode1 ? (PinIsValid(PinCode1) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setPinCode1(e.target.value)
                    }}
                    error={isDirtyPinCode1 ? (PinIsValid(PinCode1) ? true : false) : false}
                    helperText={<HelperText error={PinIsValid(PinCode1) ? true : false}
                                            errorMessage={PinIsValid(PinCode1)}
                                            counter={`${PinCode1.length}/${8}`}
                                            isDirty={isDirtyPinCode1}
                                            description={'Enter your pin code in the format xxxx-xxxx. Use only numbers'}/>}
                    onBlur={e => setIsDirtyPinCode1(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*Pin code2*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Pin code"
                    inputProps={{maxLength: 8}}
                    InputProps={{
                        endAdornment: isDirtyPinCode2 ? (PinIsValid(PinCode2) ? <ErrorOutlineIcon/> :
                            <CheckCircleOutlineOutlinedIcon/>) : false
                    }}
                    onChange={e => {
                        setPinCode2(e.target.value)
                    }}
                    error={isDirtyPinCode2 ? (PinIsValid(PinCode2) ? true : false) : false}
                    helperText={<HelperText error={PinIsValid(PinCode2) ? true : false}
                                            errorMessage={PinIsValid(PinCode2)}
                                            counter={`${PinCode2.length}/${8}`}
                                            isDirty={isDirtyPinCode2}
                                            description={'Enter your pin code. Use only numbers'}/>}
                    onBlur={e => setIsDirtyPinCode2(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*Description*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Description"
                    rows={3}
                    multiline
                    inputProps={{maxLength: 500}}
                    onChange={e => {
                        setDescription(e.target.value)
                    }}
                    helperText={<HelperText isDirty={false}
                                            counter={`${description.length}/${500}`}
                                            description={'Add a short comment'}/>}
                    FormHelperTextProps={{style: style.helperText}}
                >
                </TextField>
                <Button sx={{...style.button}} type="submit" variant="contained">Send</Button>
            </form>
        </Container>
    );
}

export default Form;
