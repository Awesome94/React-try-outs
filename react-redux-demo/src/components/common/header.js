import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeCalssName="active">Home</IndexLink>
            {"|"}
            <Link to="/about" activeCalssName="active">About</Link>
            </nav>
    );
};
export default Header