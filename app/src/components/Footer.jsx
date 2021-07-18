import * as React from "react"

import { InstagramIcon, TwitterIcon } from "./Icons"

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-4 border-t border-gray-200 bg-footer-bg bg-opacity-30">
      <div className="container flex flex-col items-center px-5 mx-auto space-y-4 lg:flex-row lg:justify-between lg:space-y-0">
        <div>
          <p>
            <strong>blogfacilito</strong> 2021 - Hecho con mucho amor
          </p>
        </div>
        <div>
          <ul className="inline-flex items-center space-x-8">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
