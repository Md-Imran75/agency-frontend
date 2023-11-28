import Wrapper from '@/components/wrapper/Wrapper';


const ServiceSection = () => {
  return (
    <section className="bg-white py-10 text-black-500 ">
     <Wrapper>
     <div className="container px-5 py-10 bg-primary-200  mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-xl uppercase font-bold text-center title-font text-black-500 mb-4">Let's Build Something Extraordinary Together </h1>
          <h4 className='uppercase text-sm mb-1 md:text-xl font-bold'>Full Stack WebSites</h4>
          <p className="text-black-500 text-[15px]   font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Ready to take your online presence to the next level? At Web Lagbe, we don't just build websites; we build relationships. Let's embark on a journey to transform your digital presence and leave a lasting impression on your audience.</p>
        </div>
        <div className="flex flex-wrap text-white lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {/* Item 1 */}
          <div className="p-2 sm:w-1/2 text-white w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Business Website - <span className='text-primary-500 font-bold'>From 400$</span></span>
            </div>
          </div>
          {/* Item 2 */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Corporate Website - <span className='text-primary-500 font-bold'>From 1000$</span></span>
            </div>
          </div>
          {/* Item 3 */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">E-commerce Solution - <span className='text-primary-500 font-bold'>From 1000$</span></span>
            </div>
          </div>
          {/* Item 4 */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Educational Website - <span className='text-primary-500 font-bold'>From 1000$</span></span>
            </div>
          </div>
          {/* Item 5 */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Personal Protfolio - <span className='text-primary-500 font-bold'>From 250$</span></span>
            </div>
          </div>
          {/* Item 6 */}
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-black-500 rounded flex p-4 h-full items-center">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className=" w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font  font-medium">News Portal -  <span className='text-primary-500 font-bold '>From 1000$</span> </span>
            </div>
          </div>
        </div>
        
      </div>
     </Wrapper>
    </section>
  );
};

export default ServiceSection;
