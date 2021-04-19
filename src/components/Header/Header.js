import {memo} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Header.css';

const Header = memo((props) => {
  const {propsmessage} = props;
  console.log(`${propsmessage} Header`);
  return (
    <header className="Header">
     <div className="Header__logo">Blog</div>
      <nav className="Header__nav">
        <Link to="/" className="Header__nav-link"> home</Link>
        <Link to="/posts" className="Header__nav-link"> posts</Link>
      </nav>
    </header>
  );
});

export default Header;

Header.propTypes = {
  propsmessage: PropTypes.string
}