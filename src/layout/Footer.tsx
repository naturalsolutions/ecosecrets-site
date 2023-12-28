import React from "react";
import logo from "./static/logo.png";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-light ">
    <div className="row container  items-center align-items-center">
      <div className="col">
        <Image src={logo} height={80} className="me-1" alt="" />
      </div>
      <div className="col">
        <p>
          <a
            style={{ color: "black" }}
            href="https://www.natural-solutions.eu/"
            target="_blank"
          >
            Natural Solutions
          </a>{" "}
          <br />
          English :{" "}
          <a
            style={{ color: "black" }}
            href="https://www.natural-solutions.world/"
            target="_blank"
          >
            natural-solutions.world
          </a>
          <br />
          <a href="https://geocam.natural-solutions.eu/contact/">
            Nous contacter
          </a>
        </p>
      </div>
      <div className="col">
        <ul>
          <li>Comment installer l&apos;application ?</li>
          <li>Documentation utilisateur</li>
          &rarr; Toutes les informations sont sur{" "}
          <a href="https://github.com/naturalsolutions/geocam" target="_blank">
            GitHub
          </a>
        </ul>
      </div>
    </div>
    <div className="container text-center">
      <p>
        Site réalisé (2023) par{" "}
        <a style={{ color: "black" }} href="https://github.com/MathildeNS">
          Mathilde Leclerc
        </a>{" "}
        et{" "}
        <a style={{ color: "black" }} href="https://georgemoon.com/">
          George Moon
        </a>
        . Code source disponible{" "}
        <a href="https://github.com/naturalsolutions/geocam-site">ici</a>
      </p>
    </div>
  </footer>
);

export default Footer;
