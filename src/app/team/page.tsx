"use client";
import Image from "next/image";
import EmployeeCard, { Employee } from "../widgets/tile";
import "../styles.css";
import Link from "next/link";
import { getLangDict } from "../langDict";
import { useContext } from "react";
import { Language, LanguageContext } from "../bla";



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
      <div className="flex justify-between items-center mx-8 py-4">
        <div className="text-4xl font-bold outfit-reg">
          She Connect
        </div>
        <div className="flex justify-center outfit-reg" id="navbar">
          <div className="mx-4">Element</div>
          <div className="mx-4"><Link href={"/bot"}>Chatbot Mila</Link></div>
          <div className="mx-4"><Link href={"/chat"}>Live Chat</Link></div>
          <div className="mx-4"><Link href={"/team"}>Team</Link></div>
        </div>
      </div>
     <div className="horizontal-list h-full">
          {employees.map((emp, index) => (
          // Add a unique 'key' prop when mapping over lists in React
          <EmployeeCard key={index} employee={emp} />
        ))}
      </div>
    </div>
  );
}