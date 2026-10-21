import {
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
  Stack,
  Typography,
} from '@mui/material'

function ProjectCard({ project }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
          {project.tech.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          View project
        </Link>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
