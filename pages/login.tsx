import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import router from 'next/router'
import { User } from '../types/globals'
import { CreateActionSetUser } from '../redux/actions/actions'

const theme = createTheme()

export default function SignIn() {
  const dispatch = useDispatch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    function cleanInputs(): void {
      ;(document.getElementById('formLogin') as HTMLFormElement).reset()
    }

    const data = new FormData(event.currentTarget)
    const email = data.get('email')
    const password = data.get('password')

    //вот массив с обьектами юзеров из локалСтораджа
    let usersFromStorage: Array<User> = []
    usersFromStorage = JSON.parse(localStorage.getItem('users') || '{ }')
    // console.log(usersFromStorage)

    if (usersFromStorage) {
      const bebra: any = usersFromStorage.find((item) => {
        return item.email === email && item.password === password
      })
      dispatch(CreateActionSetUser(bebra))

      // console.log('bebra 2022', bebra)
    }

    cleanInputs()

    router.push('/')
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box component="form" id="formLogin" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Войти
            </Button>

            <Link href="/registration">
              <a>Нет ещё аккаунта?</a>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}
