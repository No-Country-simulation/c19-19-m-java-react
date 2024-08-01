"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Linknav from "./Linknav";
import ButtonLogin from "../buttons/ButtonLogin";
import Bttlogins from "./Bttlogins";
import Menunav from "./Menunav";
import Title from "../texts/Title";
import ButtonNav from "../buttons/ButtonNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="relative">
<<<<<<< HEAD
      <div
        className={`w-full fixed mx-auto px-4 py-2 sm:px-6 lg:px-8 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-customGrayDark" : "bg-transparent"
        } animate-fade-down animate-ease-in-out`}
      >
=======
      <div className={`w-full fixed mx-auto px-4 py-2 sm:px-6 lg:px-8 top-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-customGrayDark' : ' bg-gradient-to-b from-black/60 to-transparent'} animate-fade-down animate-ease-in-out`}>
>>>>>>> 89b4619493a349c7a5d697b05651e87d0acf8641
        <div className="flex items-center justify-between px-2 sm:p-0">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Rincones de Guatapé" width={50} height={50} />
              <Title styleAdd="text-xl">
                Rincones de <br />
                Guatapé
              </Title>
            </Link>
          </div>

          {/* Botón de Menú */}
          <div className="lg:hidden">
            <label className="flex flex-col gap-2 w-8">
              <input
                className="peer hidden"
                type="checkbox"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />
              <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
              <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45"></div>
              <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
            </label>
          </div>

          {/* Enlaces y Botones */}
          <div className="lg:flex space-x-4 pr-10 hidden">
            <ButtonNav to={"/"} active={true}>
              Inicio
            </ButtonNav>
            <ButtonNav to={"/wheretoeat"}>Donde Comer</ButtonNav>
            <ButtonNav to={"/wheretogo"}>Donde ir</ButtonNav>
            <ButtonNav to={"/whattodo"}>Que hacer</ButtonNav>
            <ButtonNav to={"/contact"}>Contacto</ButtonNav>
          </div>

          {/* Botones de Inicio de Sesión y Registro */}
          <div className="lg:flex items-center gap-4 hidden">
            <Bttlogins />
          </div>
        </div>
      </div>
      {menuOpen && <Menunav />}
    </nav>
  );
};

export default Navbar;
