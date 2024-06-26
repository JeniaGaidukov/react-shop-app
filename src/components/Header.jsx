export function Header() {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/JeniaGaidukov/react-shop-app"
            >
              My Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
