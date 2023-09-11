import "./Navbar.css";

export default function Navbar() {
  /* const [slug, setSlug] = useState("/");
  const url = Astro.request.url;
  const urlArray = url.split("/");
  const currentSlug = urlArray[urlArray.length - 1];
  setSlug(currentSlug); */
  console.log(window.location);

  return (
    <nav>
      {/* <ul class="pager">
        <a href="/">
          {!currentSlug ? (
            <span class="current">
              <li>Home</li>
            </span>
          ) : (
            <li>Home</li>
          )}
        </a>
        <span class="bar">|</span>
        <a href="/blog">
          {currentSlug === "blog" ? (
            <span class="current">
              <li>Blog</li>
            </span>
          ) : (
            <li>Blog</li>
          )}
        </a>
        <span class="bar">|</span>
        <a href="/more">
          {currentSlug === "more" ? (
            <span class="current">
              <li>More</li>
            </span>
          ) : (
            <li>More</li>
          )}
        </a>
      </ul> */}
    </nav>
  );
}
