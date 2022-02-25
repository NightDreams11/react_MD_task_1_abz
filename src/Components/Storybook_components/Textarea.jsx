import {TextField} from "@mui/material";
import {style} from "../Form/FormCss";
import HelperText from "../HelperText/HelperText";
import React, {useState} from "react";


const NewTextarea = () => {

    const [description, setDescription] = useState('');
    const [lengthForCounter, setLengthForCounter] = useState('')

    return (<div>
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
    </div>)
}

export default NewTextarea;