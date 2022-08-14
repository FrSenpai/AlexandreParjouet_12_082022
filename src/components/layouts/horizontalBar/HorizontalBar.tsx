import React from 'react';
import logo from "../../../assets/logo.png";
import "../../../assets/font/Roboto.css"
import "./HorizontalBar.css";
import { Link, NavLink, } from 'react-router-dom';
interface NavItem {
  name:string,
  to:string,
  className?:string,
}
const navItems: NavItem[]= [{name:"Accueil", to:"/" }, {name:"Profil", to:"/profile/18" }, {name:"Réglage", to:"/" }, {name:"Communauté", to:"/" }];
export function HorizontalBar() {
  return (
    <nav>
      <Link className='logo' to={"/"}><img src={logo} alt="Logo SportSee" /></Link>
      <ul className='navList'>
        {navItems.map((item: NavItem, index:number) => {
          return (
            <li key={"navItem"+index}>
          <NavLink to={item.to}>{item.name}</NavLink>
        </li>
          )
        })}
       
      </ul>
    </nav>
  );
}

export default HorizontalBar;
