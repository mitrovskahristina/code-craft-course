import { Link } from 'react-router-dom';
import ErrorPicture from '../../assets/error.svg'
import Button from '../UI/Button';

import './index.css'

const NotFound = () => {
    return (
        <div className='error_page'>
            <h1>Oops! Looks like something went wrong.</h1>
            <h3>The page you're looking for couldn't be found.</h3>
            <img src={ErrorPicture} alt="404 Error" />
            <Link to='/'>
                <Button>Go back to Homepage</Button>
            </Link>
        </div>
    )
}

export default NotFound;