import React, { FormEvent, useRef } from "react";
import "./SearchInput.scss";
import group from "../../assets/icons/Group.png";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className="form" onSubmit={handleSearch}>
      <div className="search">
        <div className="search__input">
          <input
            ref={ref}
            type="text"
            placeholder="Enter address, neighbourhood, city or Zip code"
          />
        </div>
        <button type="submit" className="search__btn">
          <img src={group} alt="searchbar" />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
