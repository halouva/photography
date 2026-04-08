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
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}/icons/linkedin.svg`}
            ></img>
          </a>
          <a href="https://www.instagram.com/thomashalouvaphotography/">
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}/icons/instagram-square.svg`}
            ></img>
          </a>
          <a href="https://vimeo.com/showcase/11825220?share=copy">
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}/icons/vimeo.svg`}
            ></img>
          </a>
          <a href="https://www.redbubble.com/people/thomashalouva/shop">
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}/icons/redbubble.svg`}
            ></img>
          </a>
          <a href="mailto:thomas.halouva@outlook.com">
            <img
              className="contact-icon"
              src={`${import.meta.env.BASE_URL}/icons/envelope-square.svg`}
            ></img>
          </a>
        </div>
      </div>
      <div className="spacer-md"></div>
    </>
  );
}
export default Bio;
