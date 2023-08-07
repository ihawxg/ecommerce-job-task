import React from 'react'
import styled from 'styled-components';
import logo from '../sources/logo.jpg';

import { Link } from 'react-router-dom';
import styles from "../Styles/Header.module.css";


const Container = styled.div`
height: 10vh;
width: 1280px;
background-color: #03DAC6;
display: flex; 
align-items: center; 
justify-content : center;
`

const Nav = styled.ul`
display: flex;
flex-direction: row;
gap: 40px;
font-weight: bold;
font-size: 20px;
`

const NavItem = styled.li`
text-decoration: none;
 list-style-type: none;
`
const Logo = styled.img`
    position: absolute;
    display: inline;
    width: 80px;
    height: 80px;
    border-radius: 50%;
`


export default function Header() {



    return (
        <div className={styles.container}>
            <Container>
                <Nav>
                    <NavItem> <Link className={styles.textDecoration} to='/shoes'>Shoes</Link> </NavItem>
                    <NavItem> <Link className={styles.textDecoration} to='/bags'>Bags</Link></NavItem>
                    <NavItem> <Link className={styles.textDecoration} to='/t-shirts'>T-shirts</Link></NavItem>
                    <NavItem> <Link className={styles.textDecoration} to='/jeans'>Jeans</Link></NavItem>
                    <NavItem> <Link className={styles.textDecoration} to='/watches'>Watches</Link></NavItem>
                </Nav>
                <Link className={styles.logo} to='./home'><Logo src={logo} alt="" /></Link>
            </Container>
        </div>
    )
}
