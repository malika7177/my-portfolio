import styles from './ProjectsStyles.module.css';
import cake from '../../assets/cake.png';
import coaching from '../../assets/coaching.png';
import hotel from '../../assets/hotel.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coaching}
          link="https://github.com/malika7177/coaching"
          h3="Coaching"
          p="Teaching App"
        />
        <ProjectCard
          src={cake}
          link="https://github.com/malika7177/cake-web"
          h3="Cakes"
          p="Restaurant"
        />
        <ProjectCard
          src={hotel}
          link="https://github.com/malika7177/hotel-website"
          h3="Hotel"
          p="Hotel website"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/malika7177/fitnes-website"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
