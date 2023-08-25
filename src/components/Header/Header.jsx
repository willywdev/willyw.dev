import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <section className="header__main-content">
        <img className="header__logo" src="/IMG_0365.jpg" alt="logo" />
        <article>
          <h1 className="header__headline">willyw.dev</h1>
          <p>Software Developer</p>
          <p>Full Stack Developer</p>
          <ul className="header__contact-links">
            <li>Github</li>
            <li>Mail</li>
            <li>LinkedIn</li>
          </ul>
        </article>
      </section>
    </header>
  );
}
