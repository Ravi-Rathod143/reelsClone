import React from 'react'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton';


function index() {
    return (
        <div className='login-container'>
            <div className='login-card'>
                {/* email,password, forgot password */}

                <Image src={logo} />
                <TextField id="outlined-basic" size="small" label="Email" variant="outlined" fullWidth margin='dense' />
                <TextField id="outlined-basic" size="small" label="Password" variant="outlined" fullWidth margin='dense' type='password' />

                <span style={{color:"blue" ,marginTop:"0.5rem"}}>forget password ?</span>

                {/* login button */}

                <Button size="small" variant="contained" component="label" style={{ marginTop: "1rem", width: "19rem" }}>
                    Login
                    <input hidden accept="image/*" multiple type="file" />
                </Button>


            </div>
            <div className='bottom1-card'>
                don't have an account ? {" "}<span style={{ color: "blue" }}>SignUp</span>
            </div>

        </div>
    )
}

export default index