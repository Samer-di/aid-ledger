"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faChevronDown,
  faHandHoldingHeart,
  faHeartPulse,
  faBookOpen,
  faSeedling,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";

const programs = [
  { label: "Well-being", href: "/programs/well-being", icon: faHeartPulse },
  { label: "Knowledge", href: "/programs/knowledge", icon: faBookOpen },
  { label: "Growth", href: "/programs/growth", icon: faSeedling },
  { label: "Emergency Response", href: "/programs/emergency-response", icon: faTruckMedical },
];

// Shared style for every link and the dropdown button
const baseLink =
  "relative flex w-full md:w-auto items-center justify-between md:justify-start gap-2 rounded-md px-3 py-3 md:py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 hover:bg-[#ECF1F7] hover:text-[#1B4195] outline-none focus-visible:ring-2 focus-visible:ring-[#1B4195]/40";

// Blue text + underline bar for the page you are on
const activeLink =
  "text-[#1B4195] md:after:absolute md:after:-bottom-[17px] md:after:left-3 md:after:right-3 md:after:h-[3px] md:after:rounded-full md:after:bg-[#1B4195]";

const linkClass = (active: boolean) =>
  `${baseLink} ${active ? activeLink : "text-[#0F1126]"}`;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();

  // Close both menus when the page changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Close the dropdown when clicking outside it
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus with the Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#D5DEE7] bg-white caret-transparent">
      <div className="relative mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-[#0F1126]">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="w-6 text-[#007F80]" />
          Akkarouna
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          className="cursor-pointer p-2 text-2xl text-[#0F1126] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} className="w-6" />
        </button>

        {/* Links */}
        <ul
          className={`${mobileOpen ? "flex" : "hidden"} absolute left-0 right-0 top-[70px] flex-col border-b border-[#D5DEE7] bg-white px-5 pb-4 pt-2
          md:static md:flex md:flex-row md:items-center md:gap-2 md:border-0 md:p-0`}
        >
          <li>
            <Link href="/about" className={linkClass(pathname === "/about")}>About</Link>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              className={`${linkClass(pathname.startsWith("/programs"))} cursor-pointer`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Our Programs
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`w-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <ul className="pl-3 md:absolute md:left-0 md:top-full md:mt-1 md:min-w-[230px] md:rounded-lg md:border md:border-[#D5DEE7] md:bg-white md:p-1.5 md:shadow-lg">
                {programs.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className={`flex items-center gap-2 rounded-md px-3 py-3 md:py-2 text-[15px] font-semibold tracking-wide transition-colors duration-200 hover:bg-[#ECF1F7] hover:text-[#1B4195] outline-none focus-visible:ring-2 focus-visible:ring-[#1B4195]/40 ${
                        pathname === p.href ? "bg-[#ECF1F7] text-[#1B4195]" : "text-[#0F1126]"
                      }`}>
                      <FontAwesomeIcon icon={p.icon} className="w-4 text-[#007F80]" />
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/aidledger" className={linkClass(pathname === "/aidledger")}>AidLedger</Link>
          </li>
          <li>
            <Link href="/contact" className={linkClass(pathname === "/contact")}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}