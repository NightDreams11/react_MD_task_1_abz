import {TextField} from "@mui/material";
import {style} from "../Form/FormCss";
import {errorMessage} from "../../Validators/validators";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import HelperText from "../HelperText/HelperText";
import React, {useState} from "react";

const styles = {
    input: {
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px white inset"
        }
    }
};


const NewTextField = () => {

    const [stringLength, setStringLength] = useState('');
    const [isDirty, setIsDirty] = useState(false);


    return(<div>
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
            FormHelperTextProps={{style: style.helperText}}
        >
        </TextField>
    </div>)
}

export default  NewTextField;