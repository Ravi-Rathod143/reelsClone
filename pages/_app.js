import '../styles/globals.css'
import './signup/signup.css'
import './login/login.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../component/Feed.css'
import AuthWrapper from '../context/auth'

// import './signup/signup.css'

function MyApp({ Component, pageProps }) {
  return(
  <AuthWrapper>
    <Component{...pageProps} />
  </AuthWrapper>
  )
}

export default MyApp
