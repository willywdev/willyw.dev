import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src="/IMG_0365.jpg" alt="logo" />
      <article>
        <h1 className="header__headline">willyw.dev</h1>
        <p>Software Developer</p>
        <p>Full Stack Developer</p>
      </article>
      <article className="header__contact-links">
        <a>Email</a>
        <a>Github</a>
        <a>LinkedIn</a>
      </article>
    </header>
  );
}
