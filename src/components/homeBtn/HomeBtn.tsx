import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import "./HomeBtn.scss";

interface Props {
  children: ReactNode;
}

const HomeBtn = ({ children }: Props) => {
  return (
    <div className="homebtn">
      <NavLink to={"/"} className="homebtn__link">
        {children}
      </NavLink>
    </div>
  );
};

export default HomeBtn;
