import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        rel="noreferrer"
        href="mailto:Vivekkushwah714@gmail.com.com"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="bx bxs-envelope"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://www.linkedin.com/in/vivek-kushwah-997b14211/"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/vivekkushwah16"
        className="home__social-icon"
        target={"_blank"}
      >
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
