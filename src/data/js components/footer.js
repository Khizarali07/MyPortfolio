import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </h3>
            <div className="footerc__socials">
              <a
                aria-label="linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/hafiz-m-khizar-ali"
              >
                <IconBrandLinkedin width={30} height={30} />
              </a>
              <a
                aria-label="github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Khizarali07"
              >
                <IconBrandGithub width={30} height={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
