// Skills.jsx
import SkillCard from "./Components/SkillCard";
import TechIcons from './TechIcons';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: "Frontend",
      skills: [
        { name: "HTML", icon: TechIcons.HTML },
        { name: "CSS", icon: TechIcons.CSS },
        { name: "JavaScript", icon: TechIcons.JavaScript },
        { name: "ReactJs", icon: TechIcons.React },
        { name: "Bootstrap", icon: TechIcons.Bootstrap },
      ]
    },
    {
      id: 2,
      title: "Backend",
      skills: [
        { name: "Node.js", icon: TechIcons.NodeJS },
        { name: "Express.js", icon: TechIcons.ExpressJS },
        { name: "MongoDB", icon: TechIcons.MongoDB },
        { name: "SQL", icon: TechIcons.SQL },
        { name: "Python", icon: TechIcons.Python },
      ]
    },
    {
      id: 3,
      title: "Data Science",
      skills: [
        { name: "Machine Learning", icon: TechIcons.MachineLearning },
        { name: "Deep Learning", icon: TechIcons.DeepLearning },
        { name: "NumPy", icon: TechIcons.NumPy },
        { name: "Pandas", icon: TechIcons.Pandas },
        { name: "TensorFlow", icon: TechIcons.TensorFlow },
      ]
    },
    {
      id: 4,
      title: "Tools",
      skills: [
        { name: "Git", icon: TechIcons.Git },
        { name: "GitHub", icon: TechIcons.GitHub },
        { name: "VSCode", icon: TechIcons.VSCode },
        { name: "Figma", icon: TechIcons.Figma },
        { name: "Postman", icon: TechIcons.Postman },
      ]
    }
  ];

  return (
    <section id="skillsSection">
      <div className="mainBg">
        <div className="bgShape1"></div>
        <div className="bgShape2"></div>
      </div>
      <h1 className="skillsIntro">Technical Skills</h1>
      <div className="skillsContainer">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-category-card">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
