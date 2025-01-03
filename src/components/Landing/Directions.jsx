import React, { useEffect, useRef, useState } from 'react';

const ResumeSteps = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);
  
  const steps = [
    {
      title: "Step1.Click ON GetStarted Button",
      description: "After Clicking You will Navigate to our ResumeBuilder Editing Process Please fill the forms with Accurate details",
      image: "/steps/1.png"  // Replace with your actual image
    },
    {
      title: "Step2.Navigate Through Next and Previous Button",
      description: "You can Navigate to Next and Previous Forms By clicking   Next and Previous Butttons as Provided at Top of Forms",
      image: "/steps/2.png"  // Replace with your actual image
    },
    {
      title: "Step3.Click ON Yes If You Want To Genterate AI Content",
      description: "If You are Focusing for a Perticular Job then  Click on Yes To Genarate AI Based OBJECTIVE and Relavent KEYWORDS based on JobDescription",
      image: "/steps/3.png"  // Replace with your actual image
    },
    {
      title: "Step4.Provide Relevent Jobdescription And Your Experience Level",
      description: "Select your Exprerience Level and Provide job Title and Description to generate AI Content",
      image: "/steps/4.png"  // Replace with your actual image
    },
    {
      title: "Step5.Click ON Download Button And Save Your Resume",
      description: "After Filling All details Now your Resume is ready to Download this can be done By clicking Download Button at top of the Page",
      image: "/steps/5.png"  // Replace with your actual image
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerOffset = viewportHeight *0.5; // 15% of viewport height

      sectionRefs.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          
          // Trigger when section is 15% into viewport
          if (rect.top <= triggerOffset && rect.bottom >= triggerOffset) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50">
      <p className='px-5 py-2.5 mb-20  text-xl mx-auto font-serif text-white bg-orange-600    w-fit  text-center'>Navigate Your Way to a Professional Resume</p>
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left side - Sticky Images */}
          <div className="hidden lg:block">
            <div className="sticky top-32 h-[calc(100vh-4rem)]"> {/* Adjusted for your header */}
              <div className="relative h-full overflow-hidden rounded-lg">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-700 transform
                      ${idx === activeIndex 
                        ? 'translate-y-0 opacity-100' 
                        : idx < activeIndex 
                          ? '-translate-y-full opacity-0' 
                          : 'translate-y-full opacity-0'
                      }`}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-fit  border h-fit object-cover  my-auto rounded-lg shadow-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Scrollable Content */}
          <div className="space-y-[40vh] pt-24 pb-96"> {/* Adjusted spacing for your layout */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                ref={el => sectionRefs.current[idx] = el}
                className={`transition-all duration-500 transform
                  ${activeIndex === idx 
                    ? 'scale-105 opacity-100' 
                    : 'opacity-5'
                  }`}
              >
                <div className="px-8">
                  <h2 className="text-4xl font-bold mb-6">{step.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSteps;