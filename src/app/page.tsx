"use client";
import Image from "next/image";
import EmployeeCard, { Employee } from "./widgets/tile";
import "./styles.css";
import "./globals.css";
import Link from "next/link";
import { getLangDict } from "./langDict";
import { useContext } from "react";
import { Language, LanguageContext } from "./bla";
import GridList from "./widgets/GridList";
import FocusText from "./widgets/FocusText";
import SupportOffersSection from "./widgets/GridList";

import { Dancing_Script } from "next/font/google";
import DropdownMenu from "./widgets/Droptdown";

const ds = Dancing_Script({
  subsets: ['latin'],
})
 



export default function Home() {
  let [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);

  const employees: Employee[] = [
    new Employee("Leoni", dict.descLeo, "/images/leo_profile.jpeg", "German, English", dict.availabilityLeo,),
    new Employee("Marcella", dict.descMarcy, "/images/marci_profile.jpeg", "German, English", dict.availabilityMarcy,),
    new Employee("Lula", dict.descLula, "/images/lula_profile.jpeg", "German, English", dict.availabilityLula,),
]

  return (
    <div id="app" className="">
    <div className="flex flex-col align-center">
      <div className="flex justify-between align-center items-center mx-2 py-4 md:mx-8">
        <div className="hidden sm:block text-4xl font-bold outfit-reg">
          <div className={ds.className}>

          She Connect
          </div>
        </div>
        <div className="flex justify-center align-center outfit-reg" id="navbar">
          <a href="https://app.element.io/#/room/#SheConnect:home.zendit.digital">
<div className="mx-4">Element</div>
          </a>
          <div className="mx-4"><Link href={"/bot"}>{dict.chatbotMilaMenu}</Link></div>
          <div className="mx-4"><Link href={"/chat"}>{dict.liveChatMenu}</Link></div>
          <div className="mx-4"><Link href={"/team"}>{dict.teamMenu}</Link></div>
          <DropdownMenu/> 
        </div>
     </div>
      <div className="text-4xl md:text-5xl lg:text-7xl text-center p-30 font-bold">
        {dict.welcome} <span className={ds.className}>SheConnect</span>
      </div>
      <FocusText />
      <SupportOffersSection />
      <div className="text-sm md:text-md lg:text-2xl p-10 font-bold bg-violet-700 text-white">
      {dict.footText1} 
<br />
<br />
      {dict.footText2} 
      </div>
    </div>
 
    </div>
 );
}
