import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="flex bg-blue-400 text-white justify-between p-4 px-16">
      <p>
        &copy; {new Date().getFullYear()} «Қазақстан темір жолы» Ұлттық
        компаниясы» АҚ
      </p>
      <Link to="https://t.me/+ol5EGlNZep43MjA6">
        <FaTelegramPlane />
      </Link>
    </footer>
  );
};

export default Footer;
