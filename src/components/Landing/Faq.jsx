import { useState } from "react";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{width:'70vw',margin:'4rem auto'}} id="accordion-collapse" data-accordion="collapse">
      <h2 style={{textAlign:'center',margin:'15px'}}>Frequently Asked Questions</h2>
      {/* Accordion Item 1 */}
      <div>

     
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-3  font-medium rtl:text-right text-lg border border-b-0 border-gray-200 rounded-t-sm   gap-3"
          onClick={() => toggleAccordion(1)}
          aria-expanded={activeIndex === 1}
          aria-controls="accordion-collapse-body-1"
        >
          <span>What is an AI Resume Builder, and how does it work?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 1 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
     
      {activeIndex === 1 && (
        <div id="accordion-collapse-body-1" aria-labelledby="accordion-collapse-heading-1">
          <div className="p-3 border border-b-0 border-gray-200 ">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            An AI Resume Builder is an intelligent tool that helps you create a professional resume by analyzing your experience, skills, and job role. With AI-driven features like skill suggestions, job-specific keywords, and automatic formatting, it simplifies the resume creation process, saving you time and effort.
            </p>
          </div>
        </div>
      )}
     </div>
      {/* Accordion Item 2 */}
      <h2 id="accordion-collapse-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-3  font-medium rtl:text-right text-lg border border-b-0 border-gray-200 rounded-t-sm   gap-3"
          onClick={() => toggleAccordion(2)}
          aria-expanded={activeIndex === 2}
          aria-controls="accordion-collapse-body-2"
        >
          <span>How does AI help improve my resume?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 2 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {activeIndex === 2 && (
        <div id="accordion-collapse-body-2" aria-labelledby="accordion-collapse-heading-2">
          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            AI enhances your resume by identifying relevant skills and keywords tailored to your target job. It can optimize your profile summary, suggest projects, and ensure your resume matches what hiring managers look for, giving you a competitive edge in your job search.
            </p>
          </div>
        </div>
      )}

      {/* Accordion Item 3 */}
      <h2 id="accordion-collapse-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-3  font-medium rtl:text-right text-lg border border-b-0 border-gray-200 rounded-t-sm   gap-3"
          onClick={() => toggleAccordion(3)}
          aria-expanded={activeIndex === 3}
          aria-controls="accordion-collapse-body-3"
        >
          <span>Can I download or print my resume after building it?</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === 3 ? "rotate-180" : ""} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {activeIndex === 3 && (
        <div id="accordion-collapse-body-3" aria-labelledby="accordion-collapse-heading-3">
          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
            yes, once your resume is complete, you can download it in  PDF Format, which is easy to share or print. Our builder also ensures the document is optimized for both digital and print formats, so it looks professional in any setting.
            </p>           
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
