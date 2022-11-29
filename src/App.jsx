import { useState } from "react"
import Firma from "./components/Firma"
import Formulario from "./components/Formulario"
import Login from "./components/Login"



const App = () => {

  const [mostrarForm, setMostrarForm] =  useState(false)
  const [mostrarFirm, setMostrarFirm] =  useState(false)
  const [datosFirma, setDatosFirma] = useState({})
  const [error, setError] = useState('')

  console.log(datosFirma);

  return (
    <>
      <div className="container">
        {mostrarForm ? 
          <>
            {mostrarFirm ? 
              <Firma
                datosFirma={datosFirma}
              />
              : 
              <Formulario
                setMostrarForm={setMostrarForm}
                setMostrarFirm={setMostrarFirm}
                setDatosFirma={setDatosFirma}
                setError={setError}
                error={error}
              />
            }
          </>
          :
          <Login
            setMostrarForm={setMostrarForm}
            setError={setError}
            error={error}
          />
        }
      </div>
    </>
  )
}

export default App
