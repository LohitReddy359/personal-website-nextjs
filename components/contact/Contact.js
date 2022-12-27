import Link from "next/link";

import styles from "./contact.module.css";

function Contact() {
  return (
    <div className={styles.footer}>
      <section>
        <form method="get" action ="" className={styles.formf}>
          <div className={styles.fields}>
            <div className={styles.field}>
              <label for="name" className={styles.labell}>
                Name{" "}
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.field}>
              <label for="email" className={styles.labell}>
                Email
              </label>
              <input type="text" name="email" id="email" />
            </div>
            <div className={styles.field}>
              <label for="message" className={styles.labell}>
                Message
              </label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul className={styles.action}>
            <li>
              <input
                type="submit"
                value="Send Message"
                className={styles.buttonsubmit}
              />
            </li>
          </ul>
        </form>
      </section>
      <section className={styles.splitcontact}>
        <section className={styles.alt}>
          <h3>Address</h3>
          <p>
            {" "}
            525 Walnut St. #05
            <br />
            Ann Arbor, MI-48104
          </p>
        </section>
        <section>
          <h3>Phone</h3>
          <p>(734) 510-0789</p>
        </section>
        <section>
          <h3>Email</h3>
          <p>
            <Link href="mailto:kamatham.lohit@gmail.com">
              <a>kamatham.lohit@gmail.com</a>
            </Link>
          </p>
        </section>
        <section>
          <h3>Social</h3>
          <ul className={styles.iconsalt}>
            <li>
              <a
                href="https://www.linkedin.com/in/lohitk"
                className={styles.icon}
              >
                <span className={styles.label}>Linkedin</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/lohitk1" className={styles.icon}>
                <span className={styles.label}>Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lohit_reddyk/"
                className={styles.icon}
              >
                <span className={styles.label}>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.snapchat.com/add/lohitreddy359?share_id=59_YEeLu2BM&locale=en-US"
                className={styles.icon}
              >
                <span className={styles.label}>Snapchat</span>
              </a>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Contact;
