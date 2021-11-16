import React from "react";
import "./index.scss";
import FilterContainer from "containers/Filter";
import Search from "components/Search";
const Filters = () => {
    return (
        <div className="filter-wrapper">
            <div className="search-wrapper">
                <Search />
            </div>
            {/* <div className="filter-menu">
                <FilterContainer />
            </div> */}
        </div>
    );
};

export default Filters;
