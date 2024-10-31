// SkillCard.jsx
const SkillCard = ({ name, icon }) => {
    return (
      <div className="skill-card">
        <div className="skill-icon">
          {icon}
        </div>
        <span className="skill-name">{name}</span>
      </div>
    );
  };
  
  export default SkillCard;
  