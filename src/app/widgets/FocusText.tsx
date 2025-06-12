import React, { useContext } from 'react';
import { LanguageContext } from '../bla';
import { getLangDict } from '../langDict';

const FocusText = () => {
    let [lang, setLang] = useContext(LanguageContext);
  const dict = getLangDict(lang);

  return (
    <div className="flex justify-center px-8 md:px-0">
      <div className=" bg-rose-500 dark:bg-violet-700 px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 rounded-2xl">
        <figure className="max-w-screen-md">
        <div className='flex justify-center pb-4'>
        <svg clipRule="evenodd" fill="#e60076" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="80" height="90" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z" fill-rule="nonzero"/></svg>
        </div>
          <blockquote>
            <p className="text-md md:text-lg lg:text-2xl font-semibold text-white">
            {dict.focusText}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">{dict.yoursLeoLulaMarcy}</div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">SheConnect {dict.socialWorker}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default FocusText;