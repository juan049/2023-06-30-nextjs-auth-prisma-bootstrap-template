import { env } from "process";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import DarkModeButton from "./darkModeButton";

interface page {
  name: String;
  link: String;
}

let pages: page[] = [
  {
    name: "Acerca de nosotros",
    link: "/about",
  },
  {
    name: "Contacto",
    link: "/contact",
  },
  {
    name: "Precios",
    link: "/pricing",
  },
];

export default async function NavComponent() {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    pages.push({
      name: "Dashboard",
      link: "/dashboard",
    });
    pages.push({
      name: "Cerrar Sesión",
      link: "/api/auth/signout",
    });
  } else {
    pages.push({
      name: "Inicia sesión",
      link: "/api/auth/signin",
    });
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="/assets/images/tree.png"
            alt="Logo"
            width={40}
            height={40}
          />
          {env.APP_NAME}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {pages.map((page) => {
              return (
                <li className="nav-item">
                  <Link
                    key={pages.indexOf(page)}
                    href={page.link}
                    className="nav-link active"
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <DarkModeButton />
          <button
            className="btn btn-outline-secondary d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
