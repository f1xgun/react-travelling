import React from "react";
import SortList from "./../SortList/SortList";

const MarketControls = ({
    searchValue,
    setSearchValue,
    sortType,
    setSortType,
}) => {
    const onSearchInput = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "105px",
            }}
        >
            <input type="text" value={searchValue} onChange={onSearchInput} />
            <SortList sortType={sortType} setSortType={setSortType} />
        </div>
    );
};

export default MarketControls;
