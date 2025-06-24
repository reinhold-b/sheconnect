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
        <svg clipRule="evenodd" fill="#e60076" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" width="80" height="90" viewBox="0 0 24 24"><path d="M13 3.056v-1.056c0-.552-.448-1-1-1s-1 .448-1 1v1.052c-6.916.522-10.372 5.594-11 9.906 1.864-2.677 6.136-2.677 8 0 1.839-2.641 6.047-2.685 7.917 0 1.864-2.677 6.219-2.677 8.083 0-.625-4.291-4.125-9.333-11-9.902zm0 10.101v6.843c0 1.657-1.343 3-3 3s-3-1.343-3-3v-1h2v1c0 .551.449 1 1 1s1-.449 1-1v-6.866c.68-.226 1.27-.242 2 .023z"/></svg>
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