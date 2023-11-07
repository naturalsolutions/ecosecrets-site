import React, { useState } from "react";
import logo from "./static/logo.png";
import Image from "next/image";
import Modal from "@/components/presentation/Modal";

const Footer = () => (
  <div className="constrainer">
    <footer className="bg-light py-5">
      <div className="container navbar-text">
        <Image src={logo} height={80} className="me-1" alt="" />
        <p>
          <a href="https://www.natural-solutions.eu/" target="_blank">
            Natural Solutions
          </a>{" "}
          2023 <br />
          English :{" "}
          <a href="https://www.natural-solutions.world/" target="_blank">
            natural-solutions.world
          </a>
        </p>
        {/* <a
          role="button"
          className={`${<Modal title="test" children="test" />} ${isOpen && "is-active"}`}
          aria-label="modal"
          aria-expanded="false"
          onClick={()=><Modal title="test" children="test" />}
        >
          Launch demo modal
        </a>
          <Modal title="test" children="test" /> */}
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={<Modal />}
        >
          Launch demo modal
        </button>
      </div>
    </footer>
  </div>
);

export default Footer;
