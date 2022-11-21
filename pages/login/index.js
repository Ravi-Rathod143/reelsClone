import React, { useContext } from 'react'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Carousel } from 'react-responsive-carousel'
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';
import bg3 from '../../assets/bg3.jpg';
import bg4 from '../../assets/bg4.jpg';
import bg5 from '../../assets/bg5.jpg';
import { AuthContext } from '../../context/auth';
// import { async } from '@firebase/util';



function index() {

    const [email, setEmail] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const { login } = useContext(AuthContext)

    let handleClick = async() => {
        try{
            console.log(email);
            console.log(password);
            setLoading(true)
            setError('')
            await login(email,password);
            console.log("logged in");
            // routing to the feed

        }
        catch(err){
            console.log("erroe",err);
            setError(err.message)
            // use the setTimeout to remove the error msg after the 2 sec
            setTimeout(() => {
                setError('')
            }, 2000);

        }

        setLoading(false)
    }





    return (
        <div className='login-container'>
            <div className='insta-mob-bg'>
                <div className="carousel">
                    {/* autoplay hoto mobile vr ch img */}
                    <Carousel
                        autoPlay interval={2000}
                        infiniteLoop

                        showArrows={false}
                        showThumbs={false}
                        showIndicators={false}
                        stopOnHover
                        showStatus={false}
                    >
                        <Image src={bg1} />
                        <Image src={bg2} />
                        <Image src={bg3} />
                        <Image src={bg4} />
                        <Image src={bg5} />
                    </Carousel>
                </div>
            </div>
            <div>
                <div className='login-card'>
                    {/* email,password, forgot password */}

                    <Image src={logo} />
                    <TextField id="outlined-basic" size="small" label="Email" variant="outlined" fullWidth margin='dense'

                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField id="outlined-basic" size="small" label="Password" variant="outlined" fullWidth margin='dense' type='password'

                        value={password}
                        onChange={(e) => setpassword(e.target.value)}

                    />
                    {/* // if error is hten show error */}
                    {
                        error != "" &&
                        <div style={{ color: "red" }}>{error}</div>
                    }
                    <div style={{ color: "blue", marginTop: "1rem" }}>forget password ?</div>

                    {/* login button */}

                    <Button style={{ marginTop: "1rem" }}
                        variant="contained"
                        component="label"
                        fullWidth
                        onClick={handleClick}
                        disabled={loading}

                    >
                        Login
                        
                    </Button>


                </div>
                <div className='bottom1-card'>
                    don't have an account ? {" "}<span style={{ color: "blue" }}>SignUp</span>
                </div>
            </div>

        </div>
    )
}

export default index