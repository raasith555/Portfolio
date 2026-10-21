import { Chip, Stack, Typography } from '@mui/material'
import { skills } from '../data/skills'

function Skills() {
  return (
    <section>
      <Typography variant="h4" component="h1" gutterBottom>
        Skills
      </Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {skills.map((skill) => (
          <Chip key={skill.id} label={skill.name} color="primary" variant="outlined" />
        ))}
      </Stack>
    </section>
  )
}

export default Skills
