function Bio() {
  return (
    <>
      <div className="bio">
        <span className="title">Thomas Halouva</span>
        <div className="spacer-sm"></div>
        <span>
          Property photographer, floor planner and DEA operating in the
          Midlands.
        </span>
        <div className="spacer-sm"></div>
        <span>thomas.halouva@outlook.com</span>
        <div className="spacer-sm"></div>
        <div className="contact-icon-container">
          <a href="https://www.linkedin.com/in/thomas-halouva-927201374/">
            <img className="contact-icon" src="src\assets\linkedin.svg"></img>
          </a>
          <a href="https://www.instagram.com/thomashalouvaphotography/">
            <img
              className="contact-icon"
              src="src\assets\instagram-square.svg"
            ></img>
          </a>
          <a href="https://vimeo.com/showcase/11825220?share=copy">
            <img className="contact-icon" src="src\assets\vimeo.svg"></img>
          </a>
          <a href="mailto:thomas.halouva@outlook.com">
            <img
              className="contact-icon"
              src="src\assets\envelope-square.svg"
            ></img>
          </a>
        </div>
      </div>
      <div className="spacer-md"></div>
    </>
  );
}
export default Bio;
