import {memo} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './HomeIntro.css';

const HomeIntro = memo((props) => {
  const {title, text, linkTo, linkName, propsmessage} = props;
  console.log(`${propsmessage} HomeIntro`);
  return (
    <div className="HomeIntro">
      <h1 className="HomeIntro__title">{title}</h1>
      <p className="HomeIntro__text">{text}</p>
      <Link to={`/${linkTo}`} className="HomeIntro__button"> {linkName} &#10142; </Link>
    </div>
  );
});

export default HomeIntro;

HomeIntro.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string,
    linkName: PropTypes.string,
    propsmessage: PropTypes.string
}