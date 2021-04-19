import React, {useContext, memo} from 'react';
import PropTypes from 'prop-types';
import {DataContext} from '../../context/DataContext';
import './Search.css';

const Search = memo((props) => {
    const DataCtx = useContext(DataContext);
    const { propsmessage} = props;
    console.log(`${propsmessage} Search`);
	return (
    <div className="Search">
        <input
        type="text"
        name="search"
        placeholder="Search..."
        className="Search__input"
        onChange={(e) => DataCtx.setSearch(e.target.value)}
        /> 
    </div>
	);
});
export default Search;

Search.propTypes = {
    propsmessage: PropTypes.string
  } 