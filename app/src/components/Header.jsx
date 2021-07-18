import * as React from "react"

import { Transition } from "@headlessui/react"
import { Link } from "gatsby"
import { InstagramIcon, TwitterIcon, MenuIcon } from "./Icons"

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="py-8 w-full relative">
      <div className="container px-5 mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold text-black">
            BlogFacilito
          </Link>
        </div>

        <div>
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon />
            </button>
            <Transition
              show={isOpen}
              enter="transition-opacity duration-150"
              enterFrom="opacity-0 invisible"
              enterTo="opacity-100 visible"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100 visible"
              leaveTo="opacity-0 invisible"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm"
            />
            <Transition
              show={isOpen}
              enter="transition-transform transform duration-150"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform transform duration-150"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
              className="min-h-screen w-80 z-20 bg-white absolute right-0 top-0"
            >
              <div className="p-8">
                <ul className="space-y-8 text-center">
                  <li>
                    <Link to="/">Inicio</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InstagramIcon className="mx-auto" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TwitterIcon className="mx-auto" />
                    </a>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden items-center space-x-8 lg:inline-flex">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
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
    </header>
  )
}

export default Header
