import React from 'react'
import { useState } from "react";

function About() {
  const sections = [
  {
    title: "Mission & Vision",
    content: "We seek to make our children confident and creative builders of their future. Our focus is on the child as a whole entity. We work towards an integrated curriculum that reaches across disciplines and age levels. The students will be encouraged to meet academics challenges with openness, enthusiasm and willingness to solve problems. We strive to inspire our students to achieve the highest standards of intellectual and personal development through a satisfactory and stimulating and comprehensive programme. We aim for an atmosphere of cooperation and endeavour to create compassionate, responsible and innovative global citizens, committed to the development of India and the world.To prepare dynamic and caring citizens of tomorrow, to meet the challenges of a global society, while retaining their traditional values.To develop our school into a vibrant and an exemplary educational institution where students are nurtured, encouraged and motivated to achieve their ultimate potential by exploring limitless possibilities with utmost confidence, dedication and excellence.",
    image: null,
    list: []
   
  },
  {
    title: "Philosophy",
    content: "The essense and philosophy of our school centres around ....Empowering knowledge & Excellence-Inspiring Values & PatriotismBesides this, our school is committed to application-oriented learning. We believe that shaping the overall personality of the student is of paramount importance and will offer total personality development as part of the curriculum transaction. We provide individual attention to our students, thus enhancing their ability to acquire and synthesize knowledge in their chosen fields of study. The objective is to inculcate a self-sustaining innovative and self renewing system that always operates on a learning mode..",
    image: "",
    list: []
  },
  {
    title: "Chairman's Desk",
    content: "SHRI. HANUMAN BHONDAWE PATIL",
    image: "./images/about/chairman.jpg",
    list: []
  },
  {
    title: "Principal's Desk",
    content: "Mr. Manoj Asha Ashok Savale",
    image: "./images/about/Principal-01.png",
    list: ["Quality Education", "Discipline", "Technology Integration"]
  },
  {
    title: "Our Aim",
    content: "Our aim is to provide holistic education that nurtures both intellect and character...",
    image: "/images/aim.jpg",
    list: [
           "To accept and respect all individuals without any bias or prejudice irrespective of differences in origin, religion, ethnicity or otherwise and create an inclusive learning community.",
           "To help learners exploit their potential to the fullest and help them improve and grow both academically and personally.",
           "To provide a dynamic and broad spectrum learning environment that will faster critical thinking skills in a students and help them become life long learners.",
           "To create and awareness among the learners of the social responsibilities and equip them with the skills to adapt to the changing needs of a global environment."
    ]
  },
  {
    title: "Our Distinction",
    content: "",
    image: "",
    list: [
            "Celebrate of culture of excellence in academics and the all round development of children.",
            "Individual attention to each child to cater to their diverse learning needs.",
            "Talented, experienced, and dedicated teachers with linguistic and cultural diversity.",
            "Inclusive education with a committed team of a student care professionals.",
            "Offers and integrated curriculum from LKJ to class VIII. drawing upon the best of national and international curriculum.",
            "Wide range and depth of community service for program starting from class III.",
            "Upholds Indian culture and values, whilst fostering global citizenship.",
            "A safe and secure learning environment with focus on student well being.",
            "High quality Student Leadership opportunities including exposure to leaders,Innovators and iconic personalities from all walks of life.",
            "Enrichment classes by experts beyond regular curriculum.",
    ]
  }
];

const [activeIndex, setActiveIndex] = useState(0);



  return (
    <div>
      <div >
        <img src='./images/about/about-bg.jpg' className='sm:h-[444px] sm:w-[100%]'/>
      </div>
 
    <div className="flex flex-col sm:flex-row w-full h-auto bg-gray-100 p-4 sm:p-8">
      
   
    <div className="w-full sm:w-1/4 flex flex-wrap sm:flex-col gap-2 sm:gap-4 m-[15px] p-[20px]">
  {sections.map((section, index) => (
    <button
      key={index}
      className={`w-full sm:w-auto p-3 sm:p-4 text-center rounded-lg min-w-0
        ${activeIndex === index 
          ? "bg-[#1E3A8A] text-white font-bold text-[16px] sm:text-[20px]" 
          : "bg-white text-[#1E3A8A] font-bold text-[14px] sm:text-[18px]"
        }`}
      onClick={() => setActiveIndex(index)}
    >
      {section.title}
    </button>
  ))}
</div>

    <div className="w-full sm:w-3/4 bg-white text-black p-5 sm:p-8 rounded-lg shadow-md mt-4 sm:mt-0 sm:mb-[35px]">
      <h1 className="text-2xl sm:text-[38px] font-bold mb-4 text-[#1E3A8A] flex justify-center">{sections[activeIndex].title}</h1>
      <p className="text-sm sm:text-[24px] leading-relaxed p-[20px]">{sections[activeIndex].content}</p>

      
      <img src={sections[activeIndex].image} alt={sections[activeIndex]} className="mt-4 w-full h-auto rounded-lg shadow-md" />

      
      <ul className="mt-4 list-disc pl-6">
        {sections[activeIndex].list.map((item, idx) => (
          <li key={idx} className="text-black">{item}</li>
        ))}
      </ul>
    </div>

  </div>
  </div>

  )
}

export default About
