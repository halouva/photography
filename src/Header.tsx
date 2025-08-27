import "./App.css";

function Header() {
  return (
    <header id="header">
      <h1>Thomas Halouva</h1>
      <p>
        Property photographer, floor planner and DEA operating in the Midlands.
      </p>
      <p>thomas.halouva@outlook.com</p>
      <ul className="icons">
        <li>
          <a
            href="https://www.linkedin.com/in/thomas-halouva-927201374/"
            className="icon brands fa-linkedin"
          >
            <span className="label">Linked-In</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/thomashalouvaphotography/"
            className="icon brands fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://vimeo.com/showcase/11825220?share=copy"
            className="icon brands fa-vimeo"
          >
            <span className="label">Vimeo</span>
          </a>
        </li>
        <li>
          <a
            href="mailto:thomas.halouva@outlook.com"
            className="icon fa-envelope"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
