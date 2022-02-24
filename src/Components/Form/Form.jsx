import React, {useRef} from 'react';
import {Button, Container} from '@mui/material';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import HelperText from "../HelperText/HelperText";
import {useState} from "react";
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import './FormCss.css'
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
import {style} from './FormCss'

const styles = {
    input: {
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset"
        }
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


    // Выключаем кнопку, если не заполнены все обязательные поля
    const arr = {
        1: errorMessage(stringLength),
        2: emailIsValid(emailLength),
        3: PhoneIsValid(PhoneMark),
    }
    let isDisable = true;
    if ((arr[1] || arr[2] || arr[3]) === false) {
        isDisable = false
    }

    // Собираем Data и выводим в консоль. preventDefault не дает обновиться странице после отправки Data.
    // Object.fromEntries(formData.entries()) вытягивает данные из функции/
    const onSubmit = (data) => {
        data.preventDefault();
        //Чтобы данный метод отработал, полям нужно указать параметр name
        const formData = new FormData(data.target);
        console.log(Object.fromEntries(formData.entries()))


        setStringLength('');
        setIsDirty(false);

        setEmailLength('');
        setIsDirtyEmail(false);

        setEmailLengthRFC('');
        setIsDirtyEmailRFC(false);

        setID('');
        setIsDirtyID(false);

        setId_('');
        setIsDirtyId_(false);

        setPhoneMark('');
        setIsDirtyPhoneMark(false);

        setPhone('');
        setIsDirtyPhone(false);

        setPinCode1('');
        setPinCode1Counter('');
        setIsDirtyPinCode1(false);

        setPinCode2('');
        setIsDirtyPinCode2(false);

        setDescription('');
        setLengthForCounter('');
    }

    // Start Snackbar
    const [openSnack, setOpenSnack] = useState(false);

    const handleClickSnackbar = () => {
        setOpenSnack(true);
    };

    // Сюда приходят пропсы из Snackbar в зависимости был ли клик или истекло время. Срабатывает Callback в OnClose
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return false;
        }
        setOpenSnack(false);
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
                sx={{cursor: 'pointer'}}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );



    return (
        <div>
            <div className='header'>
                <h1>Task 1. React MD</h1>
            </div>
            <Container
                sx={{
                    textAlign: 'center',
                    height: '100vh',
                    paddingRight: '16px !important',
                    paddingLeft: '16px !important',
                    minWidth: '320px',
                }}
            >
                <form onSubmit={onSubmit} style={{...style.form}} noValidate>
                    {/*Snackbar*/}
                    <Snackbar
                        open={openSnack}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        action={action}
                        anchorOrigin={{vertical: "top", horizontal: "right"}}
                        message="Data sent successfully"
                    />
                    {/*Name field*/}
                    <TextField
                        sx={{...style}}
                        label="Name*"
                        name='name'
                        value={stringLength}
                        inputProps={{maxLength: 128, styles}}
                        InputProps={{
                            endAdornment: isDirty ? (errorMessage(stringLength) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
                        }}
                        error={isDirty ? (errorMessage(stringLength) ? true : false) : false}
                        helperText={<HelperText error={errorMessage(stringLength) ? true : false}
                                                errorMessage={errorMessage(stringLength)}
                                                counter={`${stringLength.length}/${128}`}
                                                isDirty={isDirty}/>}
                        onChange={e => {
                            setStringLength(e.target.value)
                        }}
                        onBlur={e => setIsDirty(true)}
                        FormHelperTextProps={{style: style.helperText}} // Специальный props для стилизации helperText
                    />
                    {/*Email field*/}
                    <TextField
                        sx={{...style}}
                        id="outlined-basic"
                        label="Email*"
                        name='email'
                        value={emailLength}
                        inputProps={{maxLength: 254}}
                        InputProps={{
                            endAdornment: isDirtyEmail ? (emailIsValid(emailLength) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
                        }}
                        onChange={e => {
                            setEmailLength(e.target.value.trim())
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
                        value={emailLengthRFC}
                        inputProps={{maxLength: 254}}
                        InputProps={{
                            endAdornment: isDirtyEmailRFC ? (emailIsValidRFC(emailLengthRFC) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
                        }}
                        onChange={e => {
                            setEmailLengthRFC(e.target.value.trim())
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
                        value={ID}
                        InputProps={{
                            endAdornment: isDirtyID ? (IDIsValid(ID) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
                        }}
                        onChange={e => {
                            setID(e.target.value.trim())
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
                        value={id_}
                        inputProps={{maxLength: 128}}
                        InputProps={{
                            endAdornment: isDirtyId_ ? (IDIsValid(id_) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
                        }}
                        onChange={e => {
                            setId_(e.target.value.trim())
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
                        maskChar={'x'}
                        onBlur={(e) => {
                            setIsDirtyPhoneMark(true);
                        }}
                        onChange={(e) => {
                            setPhoneMark(e.target.value)
                        }}
                        // Срабатывает при вставке в поле. Отлавливаем значение до того
                        // как оно попадет в state. Функцией обрезаем +380.
                        onPaste={function handlePaste(e) {
                            let clipboardData, pastedData;

                            // Stop data actually being pasted into div
                            e.stopPropagation();
                            e.preventDefault();

                            // Get pasted data via clipboard API
                            clipboardData = e.clipboardData || window.clipboardData;
                            pastedData = clipboardData.getData('Text');

                            // Do whatever with pasteddata
                            const replaced = pastedData.replace(/\+380/g, '')
                            setPhoneMark(replaced)
                        }}
                    >{() =>
                        <TextField
                            sx={{...style}}
                            id="outlined-basic"
                            label="Phone*"
                            name='phone'
                            // value={PhoneMark}
                            InputProps={{
                                endAdornment: isDirtyPhoneMark ? (PhoneIsValid(PhoneMark) ?
                                    <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                    <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
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
                        value={Phone}
                        inputProps={{maxLength: 256}}
                        InputProps={{
                            endAdornment: isDirtyPhone ? (extraPhoneIsValid(Phone) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
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
                    {/*PinCode1*/}
                    <InputMask
                        mask="9999-9999"
                        value={PinCode1}
                        disable={false}
                        maskChar="x"
                        onBlur={e => setIsDirtyPinCode1(true)}
                        onChange={(e) => {
                            setPinCode1(e.target.value.replace(/[\s-]/g, ''));
                            setPinCode1Counter(e.target.value.replace(/[\s\-x]/g, ''));
                        }}
                    >
                        {() =>
                            <TextField
                                sx={{...style}}
                                id="outlined-basic"
                                label="Pin code"
                                name='pin'
                                value={PinCode1}
                                // inputProps={{maxLength: 8}}
                                InputProps={{
                                    endAdornment: isDirtyPinCode1 ? (PinIsValid(PinCode1) ?
                                        <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                        <CheckCircleOutlineOutlinedIcon color={"success"}
                                                                        sx={{...style.icon}}/>) : false
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
                    {/*PinCode2*/}
                    <TextField
                        sx={{...style}}
                        id="outlined-basic"
                        label="Pin code"
                        name='secondPin'
                        value={PinCode2}
                        inputProps={{maxLength: 8}}
                        InputProps={{
                            endAdornment: isDirtyPinCode2 ? (PinIsValid(PinCode2) ?
                                <ErrorOutlineIcon color={"error"} sx={{...style.icon}}/> :
                                <CheckCircleOutlineOutlinedIcon color={"success"} sx={{...style.icon}}/>) : false
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
                        value={description}
                        rows={4}
                        rowsmax={2}
                        multiline
                        inputProps={{maxLength: 500}} //style: {height: 108}
                        onChange={e => {
                            setDescription(e.target.value.replace(/\s{2,}/g, ''));
                            setLengthForCounter(e.target.value);
                        }}
                        helperText={<HelperText isDirty={false}
                                                counter={`${lengthForCounter.length}/${500}`}
                                                description={'Add a short comment'}/>}
                        FormHelperTextProps={{style: style.helperText}}
                    >
                    </TextField>
                    <Button sx={{...style.button}} type="submit" variant="contained"
                            disabled={isDisable ? true : false}
                            onClick={handleClickSnackbar}
                    >Send</Button>
                </form>
            </Container>
        </div>
    );
}

export default Form;
