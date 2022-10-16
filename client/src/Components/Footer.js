import React from "react";
import { FaGithub } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <button>
            <a
              href="https://github.com/SThevenot"
              target="_blank"
              className="nameHover"
              rel="noreferrer"
            >
              <span className="nameText">Sarah Thevenot</span>
              <FaGithub />
            </a>
          </button>
        </div>
        <button>
          <a
            href="https://github.com/kamarygillespie4"
            target="_blank"
            className="nameHover"
            rel="noreferrer"
          >
            <span className="nameText">Kamary Gillespie</span>
            <FaGithub />
          </a>
        </button>
        <button>
          <a
            href="https://github.com/ZacharyFeltman"
            target="_blank"
            className="nameHover"
            rel="noreferrer"
          >
            <span className="nameText">Zachary Feltman</span>
            <FaGithub />
          </a>
        </button>
        <button>
          <a
            href="https://github.com/Tonymsanto"
            target="_blank"
            className="nameHover"
            rel="noreferrer"
          >
            <span className="nameText">Anthony Santo</span>
            <FaGithub />
          </a>
        </button>
        <button>
          <a
            href="https://github.com/halliemestas"
            target="_blank"
            className="nameHover"
            rel="noreferrer"
          >
            <span className="nameText">Hallie Mestas</span>
            <FaGithub />
          </a>
        </button>
        <button>
          <a
            href="https://github.com/ConnerMart"
            target="_blank"
            className="nameHover"
            rel="noreferrer"
          >
            <span className="nameText">Conner Martin</span>
            <FaGithub />
          </a>
        </button>
      </div>
    </footer>
  );
}
