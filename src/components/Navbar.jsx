import { Stack, IconButton, useTheme, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const theme = useTheme()

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: 'sticky',
        background: 'inherit',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt="logo" style={{ height: 45 }} />
      </Link>
      <SearchBar />

      <IconButton onClick={toggleDarkMode} color="inherit">
        {darkMode ? (
          <Brightness7Icon sx={{ color: theme.palette.text.primary }} />
        ) : (
          <Brightness4Icon sx={{ color: theme.palette.text.primary }} />
        )}
      </IconButton>
    </Stack>
  )
}

export default Navbar
