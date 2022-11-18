import React from 'react'
// import '@emotion/react'
// import '@mui/material'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import logo from '../../assets/Instagram.jpeg'


function index() {
    return (
        <div className='signup-container'>
            <div className='signup-card'>

                {/* email,password,Full Name */}

                <Image src={logo} />
                <TextField id="outlined-basic" size="small" label="Email" variant="outlined" fullWidth margin='dense'   />
                <TextField id="outlined-basic" size="small" label="Password" variant="outlined" fullWidth margin='dense' type='password'  />

                <TextField id="outlined-basic" size="small" label="Full Name" variant="outlined" fullWidth margin='dense' />

                {/* uploadbutton */}
                {/* color="secondary" this take the pink color to upload button */}
                <Button size='small' color="secondary" variant="outlined" component="label" fullWidth >
                    <IconButton >
                        <CloudUploadIcon color='secondary' />
                    </IconButton>
                    Upload Profile Image
                    <input hidden accept="image/*" multiple type="file" />
                </Button>

                {/* signup button */}

                <Button  size="small" variant="contained" component="label" style={{ marginTop: "1rem" ,width:"20rem" }}>
                    Sign Up
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <div className='tnc' size="small">
                    By signing up,you agree to our terms,
                    Condition and Cookies policy.
                </div>

            </div>


            <div className='bottom-card'>
                Already have an account ? {" "} <span style={{ color: "blueviolet" }}>Login</span>
            </div>


        </div>
    )
}

export default index