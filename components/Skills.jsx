import React from 'react';
import SkillItem from './SkillItem';

const SkillsData = [
  {
    skillName: 'C++',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'Python',
    percentage: 65,
    skillStrength: 'before:w-[65%]',
  },
  {
    skillName: 'Java',
    percentage: 35,
    skillStrength: 'before:w-[35%]',
  },
  {
    skillName: 'Javascript',
    skillStrength: 'before:w-[75%]',
    percentage: 75,
  },
  {
    skillName: 'React Js',
    percentage: 65,
    skillStrength: 'before:w-[65%]',
  },
  {
    skillName: 'React Native',
    percentage: 35,
    skillStrength: 'before:w-[35%]',
  },
  {
    skillName: 'Next Js',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'Flutter',
    percentage: 75,
    skillStrength: 'before:w-[75%]',
  },
  {
    skillName: 'Express Js',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'Node Js',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'MongoDB',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  },
  {
    skillName: 'SQL',
    percentage: 55,
    skillStrength: 'before:w-[55%]',
  }
];

const Skills = () => {
  return (
    <div id="skills-section" className="py-[7rem] max-w-5xl mx-auto">
      <div
        data-aos="fade-up"
        data-aos-duration="1150"
        data-aos-once="true"
        data-aos-delay="200">
        <h1 className="uppercase text-HeadingGray text-xl text-center mb-10  duration-200 transition-all  hover:text-gray-200  ">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-8">
          {SkillsData &&
            SkillsData.map((skill, index) => (
              <SkillItem
                key={index}
                skillName={skill.skillName}
                percentage={skill.percentage}
                skillStrength={skill.skillStrength}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
