import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <FaBootstrap className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap"></use>
            </FaBootstrap>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <BsTwitterX className="bi" width="24" height="24">
                <use xlinkHref="#twitter"></use>
              </BsTwitterX>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaFacebook className="bi" width="24" height="24">
                <use xlinkHref="#instagram"></use>
              </FaFacebook>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="#">
              <FaInstagramSquare className="bi lg" width="24" height="24">
                <use xlinkHref="#facebook"></use>
              </FaInstagramSquare>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
