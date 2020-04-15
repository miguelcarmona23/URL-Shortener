import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Logo} />
      <div className={classes.Links}>
        <div className={classes.GENERAL_LINKS}>
          <section>
            <h4>Features</h4>
            <ul>
              <li>
                <a href="/">Link Shortening</a>
              </li>
              <li>
                <a href="/">Branded Links</a>
              </li>
              <li>
                <a href="/">Analytics</a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Developers</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
          </section>
          <section>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Our team</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </section>
        </div>
        <div className={classes.Social_Links}>
          <a href="https://www.facebook.com"  className={classes.Facebook_Icon}/>
          <a
            href="https://twitter.com"
            
            className={classes.Twitter_Icon}
          />
          <a
            href="https://pinterest.com"
            
            className={classes.Pinterest_Icon}
          />
          <a
            href="https://instagram.com"
            
            className={classes.Instagram_Icon}
          />
        </div>
      </div>
    </footer>
  );
};

export default footer;
