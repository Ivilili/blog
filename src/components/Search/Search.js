import React, {useContext} from 'react';
import {DataContext} from '../../context/DataContext';
import './Search.css';

const  Search = (props) => {
    const DataCtx = useContext(DataContext);
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
}
export default Search;