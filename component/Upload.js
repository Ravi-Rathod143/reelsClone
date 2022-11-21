import React from 'react';
import {Button,IconButton} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import MovieIcon from '@mui/icons-material/Movie';
function Upload() {
    return (
        <div className='upload-button'>
            <Button size='small' color="secondary" variant="outlined" component="label" fullWidth 
            
            startIcon={<MovieIcon/>}

            >
                Upload Videos
                <input hidden accept="*" multiple type="file" />
            </Button>
        </div>
    )
}

export default Upload