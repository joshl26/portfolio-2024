// import { div, div } from "react-bootstrap";
import "./ResponsiveFooter.css";
import { FaLinkedinIn, FaGithub, FaYoutubeSquare } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <footer className="responsive-footer">
      <div className="footer-container">
        <div>
          <div>
            <div className="copyright-container">
              <a
                href={
                  "mailto:joshlehman.dev@gmail.com?subject=Portfolio%20Site%20Contact"
                }
              >
                <p className="copyright-text">©Josh Lehman</p>
              </a>
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <div></div>
              <div className="social-icon-div">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://www.linkedin.com/in/joshrlehman/"
                >
                  <FaLinkedinIn className="social-icon" />
                </a>
              </div>
              <div className="social-icon-div">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://github.com/joshl26"
                >
                  <FaGithub className="social-icon" />
                </a>
              </div>
              <div className="social-icon-div">
                <a
                  rel={"noreferrer"}
                  target={"_blank"}
                  href="https://www.youtube.com/channel/UCp73vCN8JROvOh-DrCczCew"
                >
                  <FaYoutubeSquare className="social-icon" />
                </a>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </footer>
  );
};

export default ResponsiveFooter;
