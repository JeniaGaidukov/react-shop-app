export function Footer() {
  return (
    <footer className="page-footer teal lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/JeniaGaidukov/react-movies-app"
          >
            My Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
