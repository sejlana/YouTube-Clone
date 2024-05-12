import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, InputBase, IconButton, useTheme } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const theme = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid ' + theme.palette.divider,
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{ p: '10px', color: theme.palette.primary.main }}
      >
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
