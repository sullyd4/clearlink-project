import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faVideoCamera, faDesktop, faSmile, faMessage, faGear, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import Accordion from './Accordion/accordion';

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className='w-[90%] mx-auto flex flex-col md:flex-row items-center pt-20 md:pt-32'>

        {/* Column 1: Text Content */}
        <div className="text-start w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl">
            Uniting the world, <br /> one video call at a time
          </h1>
          <p className="pt-7">
            Experience the future of communication by ClearLink - <br />
            where Crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="flex flex-row gap-5 pt-10">
            <button className="px-5 py-3 bg-blue-500 rounded-3xl text-white">
              Start your free trial
            </button>
            <div className="flex flex-row gap-3 justify-center items-center">
              <img src="images/Frame 10.svg" alt="AI assistant icon" className="w-5 h-5" />
              <p className="text-blue-500 cursor-pointer">
                Discover AI assistant
              </p>
            </div>
          </div>
          <div className="flex gap-4 pt-10">
            <img src="images/Avatars.svg" alt="User avatars" />
            <div>
              <div className="flex flex-row items-center gap-2">
                <img src="images/Stars.svg" alt="5 stars rating" />
                <span>5.0</span>
              </div>
              <p> from 3,000+ reviews </p>
            </div>
          </div>
        </div>

        {/* Column 2: Image Grid */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="bg-blue-50 p-5 rounded-xl shadow-lg border-2 border-blue-100">
            <div className="grid grid-rows-2 grid-flow-col gap-5">
              <div className="bg-orange-400 p-2 rounded-lg"><img src="images/image 21.svg" alt="gallery image 1" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
              <div className="bg-blue-300 p-2 rounded-lg"><img src="images/image 72.svg" alt="gallery image 2" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
              <div className="bg-purple-400 p-2 rounded-lg"><img src="images/image 100.svg" alt="gallery image 3" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
              <div className="bg-yellow-200 p-2 rounded-lg"><img src="images/image 108.svg" alt="gallery image 4" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
              <div className="bg-green-400 p-2 rounded-lg"><img src="images/image 8.svg" alt="gallery image 5" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
              <div className="bg-orange-200 p-2 rounded-lg"><img src="images/image 103.svg" alt="gallery image 6" className="w-24 h-24 sm:w-28 sm:h-28" /></div>
            </div>
            <div className="flex flex-row gap-4 pt-5 justify-center items-center text-blue-500">
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faMicrophone} /></div>
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faVideoCamera} /></div>
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faDesktop} /></div>
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faSmile} /></div>
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faMessage} /></div>
              <div className="px-2 py-1 bg-white rounded-full border-2 border-blue-100"><FontAwesomeIcon icon={faGear} /></div>
            </div>
          </div>
        </div>
      </section>

    <section className="w-[90%] mx-auto">
        <div className="pt-32 text-center">
          <p>
            Join 1,500+ companies already video conferencing the ClearLink way
          </p>
          <div className="flex flex-wrap gap-5 justify-center items-center w-[88%] mx-auto pt-10">
            <img src="images/Shopify.com svg.svg" alt="shopify" className=" w-28" />
            <img src="images/Coinbase svg.svg" alt="coinbase" className=" w-28" />
            <img src="images/Dropbox svg.svg" alt="dropbox" className=" w-28" />
            <img src="images/Intercom svg.svg" alt="intercom" className=" w-28" />
            <img src="images/Marvel svg.svg" alt="marvel" className=" w-28" />
            <img src="images/Automattic svg.svg" alt="automattic" className=" w-28" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE CLEARLINK SECTION */}
      <section className="w-[90%] mx-auto ">
        <div className="text-start pt-28 flex flex-col md:flex-row w-full md:w-[90%] justify-between items-start md:items-center">
            <div className='md:w-1/2'>
                <span className="text-semibold text-blue-700">
                The ClearLink Advantage
                </span>
                <h1 className="text-5xl pt-5 pb-5 font-semibold">
                Why Choose ClearLink
                </h1>
                <p className="text-xl">
                In a world where connection is everything, ClearLink takes the
                lead. Our <br /> cutting-edge video conferencing app offers:
                </p>
            </div>
            <img
                src="images/Hand-drawn arrow.svg"
                alt="arrow"
                className="translate-y-5 self-end hidden md:block"
            />
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-around w-full mx-auto mt-12">
          {/* Re-structured features into a responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 lg:w-3/5">
              <div className="text-start ">
                <div className="p-3 w-10 bg-slate-50 rounded-full">
                  <img src="images/Icon (1).svg" alt="video-icon" />
                </div>
                <h2 className="text-2xl font-medium pt-3 pb-3">
                  Crystal-clear HD Video
                </h2>
                <p>
                  No more pixalation or blurriness- just
                  stunning, lifelike clarity that brings your team
                  closer in meetings
                </p>
              </div>

              <div className="text-start">
                <div className="p-3 w-10 bg-slate-50 rounded-full">
                  <img src="images/recording-01.svg" alt="video-icon" />
                </div>
                <h2 className="text-2xl font-medium pt-3 pb-3">
                  Noise cancelling audio
                </h2>
                <p>
                  Say goodbye to distractions with our
                  advanced audio tech for crisp,
                  interruption-free conversations.
                </p>
              </div>
          
              <div className="text-start">
                <div className="p-3 w-10 bg-slate-50 rounded-full">
                  <img src="images/calendar.svg" alt="video-icon" />
                </div>
                <h2 className="text-2xl font-medium pt-3 pb-3">
                  Scheduling Made Easy
                </h2>
                <p>
                  Streamline your agenda with ClearLink's
                  intuitive scheduling. Set up meetings,
                  send invitations, and receive reminders in
                  one place.
                </p>
              </div>

              <div className="text-start">
                <div className="p-3 w-10 bg-slate-50 rounded-full">
                  <img src="images/lock-unlocked-04.svg" alt="video-icon" />
                </div>
                <h2 className="text-2xl font-medium pt-3 pb-3 ">
                  Bank-grade security
                </h2>
                <p>
                  Your privacy is our priority with bank-
                  grade security protocols safeguarding
                  your meetings and data from unwanted
                  intruders.
                </p>
              </div>
          </div>
          <div className='flex justify-center items-center mt-10 lg:mt-0'>
            <img
              src="images/Rectangle 1.svg"
              alt="people-image"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* SHOPIFY TESTIMONIAL SECTION - CORRECTED */}
      <section className="bg-slate-100 flex flex-col lg:flex-row justify-around items-center pt-20 pb-20 px-4 sm:px-10 gap-16 mt-24">
        <div className='lg:w-1/2'>
          <div>
            <img src="images/Shopify.com svg.svg" alt="shopify-image" />
            <img src="images/Stars.svg" alt="ratings" className="pt-10" />
            <h1 className="text-3xl md:text-4xl text-start pt-10 font-medium">
              ClearLink has upgraded our
              remote meetings. High-quality
              video, screen sharing, and top-notch security make it
              essential for our team.
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-10 sm:pt-20 gap-6">
            <div className="flex gap-4 items-center">
              <img src="images/Avatar.svg" alt="Sarah Thompson's avatar" />
              <div className="text-start">
                <p className='font-semibold'>Sarah Thompson</p>
                <span>Product Manager, Shopify</span>
              </div>
            </div>
            <div className="flex gap-5">
              <FontAwesomeIcon
                icon={faArrowCircleLeft}
                className="text-3xl text-white bg-blue-500 rounded-full cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faArrowCircleRight}
                className="text-3xl text-white bg-blue-500 rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>
        {/* Images section - RESTORED */}
        <div className="flex flex-col gap-3 justify-center items-center mt-10 lg:mt-0">
          <div className="flex flex-row gap-3 items-center justify-center">
            <img src="images/Image.svg" alt="image" className="translate-y-10" />
            <img src="images/Image (4).svg" alt="image" />
          </div>
          <div className="flex flex-row gap-3">
            <img src="images/Image (2).svg" alt="image" className="-translate-y-14" />
            <img src="images/Image (1).svg" alt="image" />
            <img src="images/Image (3).svg" alt="image" className="-translate-y-14" />
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="flex flex-col xl:flex-row gap-10 w-[90%] mx-auto justify-around py-24">
        <div className="text-start xl:w-2/5">
          <span className="text-semibold text-blue-700">Support</span>
          <h1 className="text-4xl md:text-5xl pt-5 pb-5 font-semibold uppercase">Faqs</h1>
          <p className="text-xl">
            Everything you need to know about the product and billing. Can't
            find the answer you are looking for? Please
            <a href="#" className="decoration-solid underline pl-1">
              chat to our friendly team.
            </a>
          </p>
        </div>
        <div className='xl:w-3/5'>
             <Accordion />
        </div>
      </section>

      <section className="py-20 px-4 sm:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className='lg:w-1/2 text-start'>
            <h1 className="text-4xl md:text-5xl pb-5 font-semibold">
              Ready to clear the path to perfect communication?
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-8 mb-8'>
                <div className="flex gap-3 items-center">
                    <img src="images/Check icon.svg" alt="Check mark"/>
                    <p className="text-xl">30 days free trial</p>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="images/Check icon.svg" alt="Check mark"/>
                    <p className="text-xl">Cancel at any time</p>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="images/Check icon.svg" alt="Check mark"/>
                    <p className="text-xl">Access to all features</p>
                </div>
                <div className="flex gap-3 items-center">
                    <img src="images/Check icon.svg" alt="Check mark"/>
                    <p className="text-xl">Personalized onboading</p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 pt-5">
              <button className="px-5 py-3 bg-white rounded-3xl border-2 border-slate-300">
                Talk to sales
              </button>
              <button className="px-5 py-3 bg-blue-500 rounded-3xl border text-white">
                Start your free trial
              </button>
            </div>
          </div>
          <div className='lg:w-1/2 flex justify-center mt-10 lg:mt-0'>
            <img
              src="images/Screen mockup (REPLACE FILL).svg"
              alt="screen-image"
              className="w-full max-w-xl border-4 border-black rounded-tl-2xl"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;