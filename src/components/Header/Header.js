import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" legacyBehavior>
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech" legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/dineshsuthar123">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/dinesh-suthar-45b555287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/Dinesh12839101">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;