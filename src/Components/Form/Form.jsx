import React from 'react';
import {Button, Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import HelperText from "../HelperText/HelperText";
import {useState} from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {
    errorMessage,
    emailIsValid,
    emailIsValidRFC,
    IDIsValid,
    PhoneIsValid,
    extraPhoneIsValid,
    PinIsValid
} from "../../Validators/validators";
import InputMask from "react-input-mask";


const style = {
    mt: 7,
    maxWidth: 380,
    width: '100%',
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
        mt: 17,
        mb: 17,
        width: 120,
        height: 42
    }
};


function Form() {

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
    const [PinCode1Counter, setPinCode1Counter] = useState('');
    const [isDirtyPinCode1, setIsDirtyPinCode1] = useState(false);
    //Pin code2
    const [PinCode2, setPinCode2] = useState('');
    const [isDirtyPinCode2, setIsDirtyPinCode2] = useState(false);
    //Description
    const [description, setDescription] = useState('');
    const [lengthForCounter, setLengthForCounter] = useState('')
    console.log(description)


    const arr = {
        1: errorMessage(stringLength),
        2: emailIsValid(emailLength),
        3: PhoneIsValid(PhoneMark),
    }
    let isDisable = true;
    if ((arr[1] || arr[2] || arr[3]) === false) {
        isDisable = false
    }


    const onSubmit = (data) => {
        data.preventDefault();
        //Чтобы данные метод отработал, полям нужно указать параметр name
        const formData = new FormData(data.target);
        console.log(Object.fromEntries(formData.entries()))
    }


    return (
        <Container
            sx={{
                textAlign: 'center',
                height: '100vh',
                paddingRight: '15px',
                paddingLeft: '15px !important',
                minWidth: '320px',
            }}
        >
            <form onSubmit={onSubmit} style={{...style.form}} noValidate>
                {/*Name field*/}
                <TextField
                    sx={{...style}}
                    label="Name*"
                    name='name'
                    inputProps={{maxLength: 128}}
                    InputProps={{
                        endAdornment: isDirty ? (errorMessage(stringLength) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    name='email'
                    inputProps={{maxLength: 254}}
                    InputProps={{
                        endAdornment: isDirtyEmail ? (emailIsValid(emailLength) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    name='emailRFC'
                    inputProps={{maxLength: 254}}
                    InputProps={{
                        endAdornment: isDirtyEmailRFC ? (emailIsValidRFC(emailLengthRFC) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    name='id'
                    InputProps={{
                        endAdornment: isDirtyID ? (IDIsValid(ID) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    name='id_'
                    inputProps={{maxLength: 128}}
                    InputProps={{
                        endAdornment: isDirtyId_ ? (IDIsValid(id_) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    maskChar="x"
                    onBlur={e => setIsDirtyPhoneMark(true)}
                    onChange={(e) => {
                        setPhoneMark(e.target.value.replace(/x/g, ''))
                    }}
                >{() =>
                    <TextField
                        sx={{...style}}
                        id="outlined-basic"
                        label="Phone*"
                        name='phone'
                        InputProps={{
                            endAdornment: isDirtyPhoneMark ? (PhoneIsValid(PhoneMark) ? <ErrorOutlineIcon color={"error"}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                {/*Second phone*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Phone"
                    name='secondPhone'
                    inputProps={{maxLength: 256}}
                    InputProps={{
                        endAdornment: isDirtyPhone ? (extraPhoneIsValid(Phone) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
                    }}
                    onChange={e => {
                        setPhone(e.target.value)
                    }}
                    error={isDirtyPhone ? (extraPhoneIsValid(Phone) ? true : false) : false}
                    helperText={<HelperText error={extraPhoneIsValid(Phone) ? true : false}
                                            errorMessage={extraPhoneIsValid(Phone)}
                                            counter={`${Phone.length}/${256}`}
                                            isDirty={isDirtyPhone}
                                            description={'Several numbers can be entered separated by commas'}/>}
                    onBlur={e => setIsDirtyPhone(true)}
                    FormHelperTextProps={{style: style.helperText}}
                />
                {/*Pin*/}
                <InputMask
                    mask="9999-9999"
                    value={PinCode1}
                    disable={false}
                    maskChar="x"
                    onBlur={e => setIsDirtyPinCode1(true)}
                    onChange={(e) => {
                        setPinCode1(e.target.value.replace(/[\s\-]/g, ''));
                        setPinCode1Counter(e.target.value.replace(/[\s\-x]/g, ''));
                    }}
                >
                    {() =>
                        <TextField
                            sx={{...style}}
                            id="outlined-basic"
                            label="Pin code"
                            // inputProps={{maxLength: 8}}
                            InputProps={{
                                endAdornment: isDirtyPinCode1 ? (PinIsValid(PinCode1) ? <ErrorOutlineIcon color={"error"}/> :
                                    <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
                            }}
                            // onChange={e => {
                            //     setPinCode1(e.target.value)
                            // }}
                            error={isDirtyPinCode1 ? (PinIsValid(PinCode1) ? true : false) : false}
                            helperText={<HelperText error={PinIsValid(PinCode1) ? true : false}
                                                    errorMessage={PinIsValid(PinCode1)}
                                                    counter={`${PinCode1Counter.length}/${8}`}
                                                    isDirty={isDirtyPinCode1}
                                                    description={'Enter your pin code in the format xxxx-xxxx. Use only numbers'}/>}
                            // onBlur={e => setIsDirtyPinCode1(true)}
                            FormHelperTextProps={{style: style.helperText}}
                        />
                    }
                </InputMask>
                {/*Pin code2*/}
                <TextField
                    sx={{...style}}
                    id="outlined-basic"
                    label="Pin code"
                    name='secondPin'
                    inputProps={{maxLength: 8}}
                    InputProps={{
                        endAdornment: isDirtyPinCode2 ? (PinIsValid(PinCode2) ? <ErrorOutlineIcon color={"error"}/> :
                            <CheckCircleOutlineOutlinedIcon color={"success"}/>) : false
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
                    name='description'
                    defaultValue={description}
                    rows={4}
                    rowsmax={2}
                    multiline
                    inputProps={{maxLength: 500}} //style: {height: 108}
                    onChange={e => {
                        setDescription(e.target.value.replace(/\s{2,}/g, ' ').trim());
                        setLengthForCounter(e.target.value);
                    }}
                    helperText={<HelperText isDirty={false}
                                            counter={`${lengthForCounter.length}/${500}`}
                                            description={'Add a short comment'}/>}
                    FormHelperTextProps={{style: style.helperText}}
                >
                </TextField>
                <Button sx={{...style.button}} type="submit" variant="contained"
                        disabled={isDisable ? true : false}>Send</Button>
            </form>
        </Container>
    );
}

export default Form;
