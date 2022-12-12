import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import StoreIcon from '@mui/icons-material/Store'
import { useRouter } from 'next/router'

const style = {
  display: 'flex',
  justifyContent: 'end',
}

function BottomNavigationBeers() {
  const [value, setValue] = React.useState(0)
  const router = useRouter()

  const handleChangeIndex = (event: any, newValue: any) => {
    router.push({
      pathname: '/',
      query: { food: newValue || null },
    })
    setValue(newValue)
  }

  return (
    <Box sx={style}>
      <BottomNavigation showLabels value={value} onChange={handleChangeIndex}>
        <BottomNavigationAction label="Всі напої" icon={<StoreIcon />} />
        <BottomNavigationAction
          label="Напої для піци"
          value="pizza"
          icon={<LocalPizzaIcon />}
        />
        <BottomNavigationAction
          label="Напої для стейку"
          value="steak"
          icon={<FastfoodIcon />}
        />
        <BottomNavigationAction label="Реєестрація" href="/registration" />
        <BottomNavigationAction label="Авторизація" href="/login" />
      </BottomNavigation>
    </Box>
  )
}

export default BottomNavigationBeers
