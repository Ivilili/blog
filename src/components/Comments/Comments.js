import PropTypes from 'prop-types';
import './Comments.css';

export default function Comments(props) {
    const {name, body, email, propsmessage} = props;
    console.log(`${propsmessage} Comments`);
  return (
    <div className="Comments">
      <div className="Comments__author">{email}</div>
      <h3 className="Comments__title">{name}</h3>
      <p className="Comments__text">{body}</p>
    </div>
  );
}

Comments.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  email: PropTypes.string,
  propsmessage: PropTypes.string
}