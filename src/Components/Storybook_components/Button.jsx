import {style} from "../Form/FormCss";
import {Button} from "@mui/material";
import React, {useState} from "react";
import {emailIsValid, errorMessage, PhoneIsValid} from "../../Validators/validators";

const ButtonStory = ({isDisable}) => {

    return (<div>
        <Button sx={{...style.button}} type="submit" variant="contained"
                disabled={isDisable}
        >Send</Button>
    </div>)
}

export default ButtonStory;

