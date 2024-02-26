import React from "react";
import styled from "styled-components";
import { menuItems } from "../../Utils/menuItems";
import { signout } from "../../Utils/icons";
import avatar from "../../img/avatar.png"

function Navigation() {
    return (
        <NavStyled>
            <div className="user-con">
                <img src={avatar} alt=""></img>
                <div className="text">
                    <h2>Guilherme</h2>
                    <p>Your Balance</p>
                </div>
            </div>
            <ul className="menu-items">
                {menuItems.map((item) => {
                    return <li  key={item.id}>
                       {item.icon}
                       <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="bottom-nav">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.div`

`;


export default Navigation