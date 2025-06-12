import React, { useContext } from 'react';
import { LanguageContext } from '../bla';
import { getLangDict } from '../langDict';

const SupportOffersSection = () => {
    
  const [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);
  return (
        <section className="bg-transparent rounded-xl p-12"> {/* Background set to transparent */}
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-[#7008e7]"> {/* Text changed to violet */}
                {dict.supportOffersTitle}
              </h2>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              {/* Gesundheit & Gynäkologie */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12"> {/* Icon circle background remains light purple */}
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.healthGynTitle}</h3> {/* Text changed to violet */}
                <p className="text-[#7008e7]"> {/* Text changed to violet */}
                  {dict.healthGynDesc}
                </p>
              </div>
    
              {/* Recht & Aufenthalt */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.legalStayTitle}</h3>
                <p className="text-[#7008e7]">
                  {dict.legalStayDesc}
                </p>
              </div>
    
              {/* Psychische Belastung */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.mentalHealthTitle}</h3>
                <p className="text-[#7008e7]">
                  {dict.mentalHealthDesc}
                </p>
              </div>
    
              {/* Gewaltschutz & Krisenhilfe */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99l-5 4.5V6.3l5-2.21 5 2.21v9.19l-5-4.5z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.violenceCrisisTitle}</h3>
                <p className="text-[#7008e7]">
                  {dict.violenceCrisisDesc}
                </p>
              </div>
    
              {/* Soziale & finanzielle Fragen */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15H3V6h18v13zm-10-8h4v2h-4v-2zm-6 0h4v2H5v-2z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.socialFinancialTitle}</h3>
                <p className="text-[#7008e7]">
                  {dict.socialFinancialDesc}
                </p>
              </div>
    
              {/* Suchthilfe & Ausstiegsmöglichkeiten */}
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-[#EDE4FA] lg:h-12 lg:w-12">
                  <svg className="w-5 h-5 text-[#7008e7] lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-[#7008e7]">{dict.addictionExitTitle}</h3>
                <p className="text-[#7008e7]">
                  {dict.addictionExitDesc}
                </p>
              </div>
            </div>
            <p className="mt-8 text-center text-[#7008e7]"> {/* Text changed to violet */}
              {dict.referralText}
            </p>
          </div>
        </section> 
  );
};

export default SupportOffersSection;