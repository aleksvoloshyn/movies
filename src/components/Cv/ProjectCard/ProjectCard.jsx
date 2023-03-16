import './styles.scss'
const ProjectCard = ({
  frontTitle,
  backRepo,
  frontContent,
  backSite,
  imageSrc,
  role,
  techStack,
}) => {
  return (
    <div className="card">
      <div className="card-content card-front">
        <img src={imageSrc} alt={imageSrc} />
        <div className="card-body">
          <h3>{frontTitle}</h3>
          <p>{frontContent}</p>
          <b>role:</b> {role}
        </div>
      </div>

      <div className="card-content card-back">
        <div className="card-body">
          <b>Repository: </b>
          <a href={backRepo}>GITGUB</a>
          <b>Site</b>
          <a href={backSite}>{frontTitle}</a>
          <b>Tech stack:</b>
          {techStack}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
