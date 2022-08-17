import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Dropdown from "../../../UI/dropdown/Dropdown";
import SearchBar from "../../../UI/searchBar/SearchBar";
import MyProfileDropdown from "./MyProfileDropdown";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import logo from "../../../assets/images/logo-assist-tagline.png";
import HeaderStyles from "./HeaderStyles";
import { selectCategories } from "./HeaderStyles";
import { profileDropdownActions } from "store/profileDropdownSlice";

const Header = () => {
  const dispatch = useDispatch();
  const dropdownOpen = useSelector((state) => state.profileDropdown.isOpen);

  const ref = useRef();

  const toggleDropdown = () => {
    dispatch(profileDropdownActions.toggleDropdown());
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (dropdownOpen && ref.current && !ref.current.contains(e.target)) {
        toggleDropdown();
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [dropdownOpen]);

  const categories = [
    { label: "Category" },
    { label: "Big Houses" },
    { label: "Small Houses" },
    { label: "Offices" },
    { label: "Apartments" },
    { label: "Category" },
  ];

  return (
    <nav className="navbar">
      <section className="header--left">
        <NavLink to="/">
          <img src={logo} width="103px" height="31.38px" alt=""></img>
        </NavLink>
        <div className="form-group">
          <div className="header--searchbar">
            <Dropdown sx={selectCategories} items={categories} />
            <SearchBar placeholder={"Search"} />
          </div>
        </div>
      </section>
      <section className="header--right">
        <div>
          <NavLink to="/favorites" className="header--icon">
            <FavoriteBorderIcon />
            <p> Favourites </p>
          </NavLink>
        </div>
        <div className="profile" ref={ref}>
          <div>
            <ul>
              <li onClick={toggleDropdown} className="flex profile-icon">
                <PersonOutlineIcon sx={{ marginRight: "7px" }} />
                My account
                {!dropdownOpen && <KeyboardArrowDownIcon />}
                {dropdownOpen && <KeyboardArrowUpIcon />}
              </li>
            </ul>
          </div>
          <div className="dropdown-profile">
            {dropdownOpen && <MyProfileDropdown />}
          </div>
        </div>
      </section>
      <style jsx global>
        {HeaderStyles}
      </style>
    </nav>
  );
};

export default Header;
