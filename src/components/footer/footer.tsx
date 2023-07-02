import { env } from "process";
import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

interface SocialNetworkLink {
  name: String;
  icon: String;
  link: String;
}

const socialNetworkLinks: SocialNetworkLink[] = [
  {
    name: "Twitter",
    icon: "bi bi-twitter",
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Des",
  },
  {
    name: "Facebook",
    icon: "bi bi-facebook",
    link: "https://es-la.facebook.com/",
  },
  {
    name: "Instagram",
    icon: "bi bi-instagram",
    link: "https://www.instagram.com/",
  },
];

export default function FooterComponent() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 m-4 border-top">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <Image
            src="/assets/images/tree.png"
            alt="Logo"
            width={40}
            height={40}
          />

          <span className="mb-3 mb-md-0 text-muted">
            © {year} {env.APP_NAME}
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          {socialNetworkLinks.map((socialNetworkLink) => {
            return (
              <li className="ms-3">
                <Link className="text-muted" href={socialNetworkLink.link}>
                  <i
                    className={`${socialNetworkLink.icon} fs-2`}
                    width="24"
                    height="24"
                  ></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </footer>
    </>
  );
}
