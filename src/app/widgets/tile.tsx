import React from 'react';
import Image from 'next/image';

export interface IEmployee {
    name: string,
    imageUri: string,
    description: string,
    language: string,
}

export class Employee implements IEmployee{

    public name: string;
    public description: string;
    public imageUri: string;
    public language: string;

    public constructor(name: string, description: string, imageUri: string, language: string) {
        this.name = name;
        this.description = description;
        this.imageUri = imageUri;
        this.language = language;
    }
}
interface EmployeeCardProps {
    employee: IEmployee; // This says EmployeeCard expects a prop named 'employee' which is of type IEmployee
  }

export const EmployeeCard = ({employee}: EmployeeCardProps) => {
  return (
    <div className="bg-gradient-to-br from-violet-800 to-violet-500 w-full h-3/4 m-6 max-w rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300 blue">
        <div className='flex flex-col justify-between h-full'>
    <div className="relative w-48 h-48 rounded-xl mb-4 overflow-hidden mx-auto">
    <Image
        src={employee.imageUri} // Pass the variable directly, no backticks needed if it's already a string
        alt={`${employee.name}'s portrait`}
        layout='fill'
        objectFit='cover' // <--- Provide the actual height of your images in pixels
 />
    </div>
     <div className="space-y-10">
        <h2 className="text-4xl text-white font-semibold">{employee.name}</h2>
        <p className="text-white text-sm font-bold opacity-85 h-40">{employee.description}</p>
        <p className="text-sm text-white mt-2">Language: {employee.language}</p>
      </div>
 
        </div>
   </div>
  );
};

export default EmployeeCard;
