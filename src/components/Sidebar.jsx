import React, { useState } from 'react'
import {
  Stack,
  useTheme,
  useMediaQuery,
  Drawer,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <>
      {isMobile ? (
        <>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer}>
            <Stack
              direction="column"
              sx={{
                width: 250,
                padding: theme.spacing(2),
                backgroundColor: theme.palette.background.default,
              }}
            >
              {categories.map((category) => (
                <button
                  className="category-btn"
                  onClick={() => {
                    setSelectedCategory(category.name)
                    toggleDrawer()
                  }}
                  style={{
                    background:
                      category.name === selectedCategory &&
                      theme.palette.primary.main,
                    color:
                      category.name === selectedCategory
                        ? 'white'
                        : theme.palette.text.primary,
                    marginBottom: theme.spacing(1),
                  }}
                  key={category.name}
                >
                  <span
                    style={{
                      color:
                        category.name === selectedCategory
                          ? 'white'
                          : theme.palette.text.primary,
                      marginRight: '15px',
                    }}
                  >
                    {category.icon}
                  </span>
                  <span
                    style={{
                      opacity: category.name === selectedCategory ? '1' : '0.8',
                    }}
                  >
                    {category.name}
                  </span>
                </button>
              ))}
            </Stack>
          </Drawer>
        </>
      ) : (
        <Stack
          direction="row"
          sx={{
            overflowY: 'auto',
            height: { sx: 'auto', md: '95%' },
            flexDirection: { md: 'column' },
          }}
        >
          {categories.map((category) => (
            <button
              className="category-btn"
              onClick={() => setSelectedCategory(category.name)}
              style={{
                background:
                  category.name === selectedCategory &&
                  theme.palette.primary.main,
                color:
                  category.name === selectedCategory
                    ? 'white'
                    : theme.palette.text.primary,
              }}
              key={category.name}
            >
              <span
                style={{
                  color:
                    category.name === selectedCategory
                      ? 'white'
                      : theme.palette.text.primary,
                  marginRight: '15px',
                }}
              >
                {category.icon}
              </span>
              <span
                style={{
                  opacity: category.name === selectedCategory ? '1' : '0.8',
                }}
              >
                {category.name}
              </span>
            </button>
          ))}
        </Stack>
      )}
    </>
  )
}

export default Sidebar
