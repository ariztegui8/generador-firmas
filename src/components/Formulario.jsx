import { Button, TextField } from "@mui/material"
import { useState } from "react"
import Error from "./Error"


const Formulario = ({setMostrarFirm, setDatosFirma, setError, error}) => {

    const [formulario, setFormulario] = useState({
        nombre: '',
        email: '',
        cargo: '',
        tel: ''
    })

    const {nombre, email, cargo, tel} = formulario

    const handleChangeForm = e =>{
        setFormulario({
            ...formulario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmitForm = e =>{
        e.preventDefault()

        if(Object.values(formulario).includes('')) {
            setError('Todos los campos son obligatorios')
        } else {
            setMostrarFirm(true)
        }

        setTimeout(()=>{
            setError('')
        },3000)

        

        setDatosFirma(formulario)
        
    }

  return (
    <div>
        <h3 className="title-formulario">Formulario</h3>

        <form className="formulario" onSubmit={handleSubmitForm}>
            <TextField
                type="text"
                label='Nombre'
                onChange={handleChangeForm}
                value={nombre}
                name='nombre'
                size="small"
            />

            <TextField
                type="email"
                label='Email'
                onChange={handleChangeForm}
                value={email}
                name='email'
                size="small"
            />

            <TextField
                type="text"
                label='Cargo'
                onChange={handleChangeForm}
                value={cargo}
                name='cargo'
                size="small"
            />

            <TextField
                type="tel"
                label='Telefono'
                onChange={handleChangeForm}
                value={tel}
                name='tel'
                size="small"
            />

            {error && <Error error={error} />}

            <Button
                type="submit"
                variant="contained"
            >
                Generar firma
            </Button>

        </form>
    </div>
  )
}

export default Formulario