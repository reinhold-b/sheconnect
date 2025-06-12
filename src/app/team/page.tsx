"use client";
import Image from "next/image";
import EmployeeCard, { Employee } from "../widgets/tile";
import "../styles.css";
import Link from "next/link";
import { getLangDict } from "../langDict";
import { useContext } from "react";
import { Language, LanguageContext } from "../bla";
import DropdownMenu from "../widgets/Droptdown";
import { Dancing_Script } from "next/font/google";

const ds = Dancing_Script({
    subsets: ['latin'],
  })
   

export default function Home() {
  let [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);

  const employees: Employee[] = [
      new Employee("Leoni", dict.descLeo, "/images/leo_profile.jpeg", "test"),
      new Employee("Marcella", dict.descMarcy, "/images/marci_profile.jpeg", "test"),
      new Employee("Lula", dict.descLula, "/images/lula_profile.jpeg", "test"),
  ]
 
  return (
    <div id="app" className="">
      <div className="flex justify-between align-center items-center mx-2 py-4 md:mx-8">
        <div className="hidden sm:block text-4xl font-bold outfit-reg">
          <div className={ds.className}>

          She Connect
          </div>
        </div>
        <div className="flex justify-center align-center outfit-reg" id="navbar">
          <div className="mx-4">Element</div>
          <div className="mx-4"><Link href={"/bot"}>{dict.chatbotMilaMenu}</Link></div>
          <div className="mx-4"><Link href={"/chat"}>{dict.liveChatMenu}</Link></div>
          <div className="mx-4"><Link href={"/team"}>{dict.teamMenu}</Link></div>
          <DropdownMenu/> 
        </div>
     </div>
     <div className="flex flex-col md:flex-row items-center md:justify-evenly">
          {employees.map((emp, index) => (
          // Add a unique 'key' prop when mapping over lists in React
          <EmployeeCard key={index} employee={emp} />
        ))}
      </div>
      <div className="fixed bottom-4 left-4">
        <Link className="bg-violet-900 rounded-xl w-12 h-12 flex flex-row justify-center items-center" href={"/"}>
        <Image
        className="p-2"
                  src={"/images/home.png"} alt={""} width={32} height={32}       />
        </Link>
      </div>
    </div>
  );
}