'use client'; // This directive is typically used in Next.js 13+ App Router for client components

import React, { useState, useRef, useEffect, useContext } from 'react';
import { LanguageContext } from '../bla';
import { getLangDict } from '../langDict';

const DropdownMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click was outside the dropdown and outside the button
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent default button behavior if any
    setIsOpen((prev) => !prev);
  };

  function selectLang(arg0: string): void {
    setLang(arg0);
    // Optionally close the dropdown after selecting a language
    setIsOpen(false);
  }

  return (
    <div className="inline-block text-left">
      <div className='p-0'>
        <button
          type="button"
          className="p-2 inline-flex w-full justify-center rounded-xl bg-violet-700 text-sm font-semibold text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-violet-500"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
          ref={buttonRef}
        >
          Language
          <svg
            className="-mr-1 size-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fillRule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          // Adjusted width for responsiveness
          className="absolute right-4 z-10 mt-2 w-56 sm:w-full md:w-auto lg:w-[40rem] origin-top-right rounded-md bg-violet-700 text-white shadow-lg ring-1 ring-black/5 focus:outline-hidden"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          ref={dropdownRef}
        >
          {/* Modified this div to use responsive grid classes */}
          <div className="py-1 grid grid-cols-1 md:grid-cols-3 gap-2 p-2" role="none">
            <div
              onClick={() => selectLang('de')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              🇩🇪 Deutsch
            </div>
            <div
              onClick={() => selectLang('en')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              🇬🇧 English
            </div>
            <div
              onClick={() => selectLang('fr')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-2"
            >
              🇫🇷 Français
            </div>
            <div
              onClick={() => selectLang('pt')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-3"
            >
              🇵🇹 Português
            </div>
            <div
              onClick={() => selectLang('es')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-4"
            >
              🇪🇸 Español
            </div>
            <div
              onClick={() => selectLang('bg')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-5"
            >
              🇧🇬 Български
            </div>
            <div
              onClick={() => selectLang('ro')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-6"
            >
              🇷🇴 Română
            </div>
            <div
              onClick={() => selectLang('hu')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-7"
            >
              🇭🇺 Magyar
            </div>
            <div
              onClick={() => selectLang('ru')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-8"
            >
              🇷🇺 Русский
            </div>
            <div
              onClick={() => selectLang('pl')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-9"
            >
              🇵🇱 Polski
            </div>
            <div
              onClick={() => selectLang('bs')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-10"
            >
              🇧🇦 Bosanski
            </div>
            <div
              onClick={() => selectLang('hr')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-11"
            >
              🇭🇷 Hrvatski
            </div>
            <div
              onClick={() => selectLang('tr')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-12"
            >
              🇹🇷 Türkçe
            </div>
            <div
              onClick={() => selectLang('sq')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-13"
            >
              🇦🇱 Shqip
            </div>
            <div
              onClick={() => selectLang('zh')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-14"
            >
              🇨🇳 简体中文
            </div>
            <div
              onClick={() => selectLang('th')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-15"
            >
              🇹🇭 ไทย
            </div>
            <div
              onClick={() => selectLang('vi')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-16"
            >
              🇻🇳 Tiếng Việt
            </div>
            <div
              onClick={() => selectLang('ku')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-17"
            >
              Kurdistan (کوردی)
            </div>
            <div
              onClick={() => selectLang('ar')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-18"
            >
              🇸🇦 العربية
            </div>
            <div
              onClick={() => selectLang('fa')}
              className="block px-4 py-2 text-sm text-white hover:bg-violet-500 cursor-pointer rounded-md text-center"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-19"
            >
              🇮🇷 فارسی
            </div>
            {/* Added a dummy div to maintain grid structure for the sign out button */}
            <div className="hidden md:block"></div>
            <div className="hidden md:block"></div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;