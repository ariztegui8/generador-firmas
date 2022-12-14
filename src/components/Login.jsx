import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import Error from './Error'
import Formulario from './Formulario'

const Login = ({setMostrarForm, setError, error}) => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const {email, password} = login

    const handleChangeLogin = e =>{
        setLogin({
            ...login,
            [e.target.name] : e.target.value
        })
    }

    const pass = password

    const handleSubmitLogin = e =>{
        e.preventDefault()


        if(Object.values(login).includes('')) {
            setError('Todos los campos son obligatorios')
        } else if(pass !== '123'){
            setError('Password incorrecto')
        }else{
            if(pass === '123'){
                setMostrarForm(true)
            }
            
        }

        setTimeout(()=>{
            setError('')
        },3000)

    }

  return (
    <div className='container-login'>
        <h3 className='title-login'>Login</h3>

        <form className='login' onSubmit={handleSubmitLogin}>
            <TextField
                type="email"
                label='Email'
                onChange={handleChangeLogin}
                value={email}
                name='email'
                size="small"
                required
            />

             <TextField
                type="password"
                label='Contraseña'
                onChange={handleChangeLogin}
                value={password}
                name='password'
                size="small"
                required
            />

            {error && <Error error={error} />}

            <Button
                type="submit"
                variant="contained"
            >
                Open
            </Button>
        </form>

       
    </div>
  )
}

export default Login