import clsx from "clsx";
import React, { FC, PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import logo from "./static/ecoSecrets_Full_light.svg";

interface NavLiLinkProps extends LinkProps {
  href: string;
  exact?: boolean;
  isDropdown?: boolean;
}

const NavLiLink: FC<PropsWithChildren<NavLiLinkProps>> = ({
  children,
  href,
  exact = false,
  ...others
}) => {
  const router = useRouter();
  const isActive = exact
    ? !!(router.asPath === href)
    : !!router.asPath.startsWith(href);

  return (
    <li className="nav-item">
      <Link
        href={href}
        className={clsx("nav-link", isActive && "active")}
        {...others}
      >
        {children}
      </Link>
    </li>
  );
};

const Header: FC = () => (
  <nav className="navbar navbar-expand-lg bg-white shadow-sm">
    <div className="container">
      <Link href="/" className="navbar-brand">
        <Image src={logo} height={30} className="me-1" alt="" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle Navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <NavLiLink href="/" exact>
            Accueil
          </NavLiLink>
          <NavLiLink href="/produit">Découvrir ecoSecrets</NavLiLink>
          <NavLiLink href="/techno">Technologies</NavLiLink>
          <NavLiLink href="/ressources">Ressources</NavLiLink>
          <NavLiLink href="/contact">Contact</NavLiLink>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
