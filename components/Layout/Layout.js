import React, { useState } from "react";
import { useRouter } from 'next/router'
import Button from '../Button';
import SocialMedia from '../SocialMedia';
import Drawer from '../Drawer';
import styles from './Layout.module.css'

const routes = [{
  id: "home",
  text: "HOME",
  href: "/"
}, {
  id: "about_us",
  text: "ABOUT US",
  href: "/About"
}, {
  id: "menu",
  text: "MENU",
  href: "/Menu"
}, {
  id: "locator",
  text: "LOCATOR",
  href: "/Locator"
}, {
  id: "contact",
  text: "CONTACT",
  href: "/Contact"
}]



const MobileMenu = () => {
  const router = useRouter()
  const handleOnNavButtonClick = (url) => {
    router.push(url)
    toggleMenu();
  }
  const [activateMenu, setActivateMenu] = useState(false);
  const toggleMenu = () => {
    setActivateMenu(!activateMenu);
  }
  return (
    <div className={styles.mobile_menu}>
      <a className={styles.link} onClick={toggleMenu}>
        <svg style={{ width: "32px", height: "32px" }} viewBox="0 0 24 24">
          <path fill="black" d="M22 13C22 14.11 21.11 15 20 15H4C2.9 15 2 14.11 2 13S2.9 11 4 11H13L15.5 13L18 11H20C21.11 11 22 11.9 22 13M12 3C3 3 3 9 3 9H21C21 9 21 3 12 3M3 18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V17H3V18Z" />
        </svg>
      </a>
      {activateMenu && <Drawer>
        <div className={styles.mobile_content_section}>
          <div className={styles.mobile_content_header}>
            <img className={styles.mobile_logo} src="/images/logo.png" />
            <a className={styles.link} onClick={() => {
              setActivateMenu(false);
            }}>
              <svg style={{ width: "32px", height: "32px" }} viewBox="0 0 24 24">
                <path fill="black" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" />
              </svg>
            </a>
          </div>
          <div className={styles.mobile_menu_button_section}>
            {routes.map(item => (
              <Button
                key={`btn-${item.id}`}
                id={item.id}
                showButtonBackground={false}
                onClick={() => {
                  handleOnNavButtonClick(item.href);
                }}
              >{item.text}</Button>
            ))}
          </div>
        </div>
      </Drawer>}
    </div>
  )
}

const Layout = ({ children }) => {
  const router = useRouter()
  const handleOnNavButtonClick = (url) => {
    router.push(url)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" />
        <img className={styles.logo_2} src="/images/logo_transparent.png" />
        <div className={styles.social_section}>
          <MobileMenu />
          <SocialMedia />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_wrapper}>
          <div className={styles.navigation}>
            {routes.map(item => (
              <Button
                key={item.id}
                id={item.id}
                onClick={() => {
                  handleOnNavButtonClick(item.href);
                }}
              >{item.text}</Button>
            ))}
          </div>
          <div className={styles.info_section}>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <label>© 2021 BurgerSpot. All rights reserved.</label>
      </div>
    </div>
  );
};

export default Layout;
