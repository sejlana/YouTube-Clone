import { useState, useEffect } from 'react'
import { Box, Stack, Typography, useTheme } from '@mui/material'
import { Sidebar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])
  const theme = useTheme()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items),
    )
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid ' + theme.palette.divider,
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: theme.palette.text.secondary, pl:3 }}
        >
          Disclaimer: <br />
          This website is created <br />
          solely for learning <br />
          and portfolio purposes.
        </Typography>
      </Box>

      <Box p={2} sx={{ px: { xs: 2, md: 10 }, flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: theme.palette.text.primary }}
        >
          {selectedCategory}{' '}
          <span style={{ color: theme.palette.primary.main }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed
