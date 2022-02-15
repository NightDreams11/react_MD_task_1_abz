import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& .MuiTextField-root': { width: '25ch' },
            }}
        >
            <TextField id="outlined-basic" label="Name*" variant="outlined" error={false} helperText="Value" />
        </Box>
    );
}