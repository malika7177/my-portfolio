import styles from './ProjectsStyles.module.css';
import cake from '../../assets/cake.png';
import coaching from '../../assets/coaching.png';
import hotel from '../../assets/hotel.png';
import netflix from '../../assets/netflix.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={coaching}
          link="https://coaching-pearl.vercel.app/"
          h3="Coaching"
          p="Teaching App"
        />
        <ProjectCard
          src={cake}
          link="https://cake-web-psi.vercel.app/"
          h3="Cakes"
          p="Restaurant"
        />
        <ProjectCard
          src={hotel}
          link="https://hotel-website-zeta-five.vercel.app/"
          h3="Hotel"
          p="Hotel website"
        />
        <ProjectCard
          src={netflix}
          link="https://netflix-clone-website-mu.vercel.app/"
          h3="Netflix"
          p="Netflix Clone App"
        />
      </div>
    </section>
  );
}

export default Projects;
