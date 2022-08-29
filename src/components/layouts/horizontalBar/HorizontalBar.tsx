import React from 'react';
import logo from "../../../assets/img/logo.png";
import "../../../assets/font/Roboto.css"
import "./HorizontalBar.css";
import { Link, NavLink, } from 'react-router-dom';
//classname not required atm to handle the future changes about active icon in the horizontal bar, we can add another things in the future
interface NavItem {
  name: string,
  to: string,
  className?: string,
}
const navItems: NavItem[] = [{ name: "Accueil", to: "/" }, { name: "Profil", to: "/profile/18" }, { name: "Réglage", to: "/" }, { name: "Communauté", to: "/" }];
/**
 * 
 * @returns a component that displays the horizontal bar
 */
export function HorizontalBar() {
  return (
    <nav>
      <h1><Link className='logo' to={"/"}><img src={logo} alt="Logo SportSee" /></Link></h1>
      <ul className='navList'>
        {navItems.map((item: NavItem, index: number) => {
          return (
            <li key={"navItem" + index}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}

export default HorizontalBar;
