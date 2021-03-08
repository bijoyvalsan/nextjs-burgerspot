const Menu = () => {
  return <div>
    <div style={{marginBottom:"10px", width:"200px", marginLeft: "auto"}}>
      <a title="download menu" className="download_link" target="_blank" href="/pdf/burgerspot_menu.pdf" tabIndex="0">
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
        <path fill="currentColor" d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
        </svg>
        <span>
          Download Menu
        </span>
      </a>
    </div>
    <img src="/images/menu-1.jpg" alt="BurgerSpot Menu" width="100%" height="100%" />
    <img src="/images/menu-2.jpg" alt="BurgerSpot Menu" width="100%" height="100%" />
  </div>
}

export default Menu;
