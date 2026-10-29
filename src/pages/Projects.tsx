import { Grid, Typography } from '@mui/material'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

function Projects() {
  return (
    <section>
      <Typography variant="h4" component="h1" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default Projects
