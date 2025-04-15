import { Container, ContainerInputs, Form, Input, InputLabel, Title  } from "./styles.js"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"


import { Button } from "../../components/Button/styles.js"
import TopBackground from "../../components/TopBackground/index.jsx"


function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser () {
      await api.post('/usuarios', {
      email: inputEmail.current.value, 
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
     })

  }

  return (
    <>
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastro de usuário</Title>
        <ContainerInputs>
          
            <div>
              <InputLabel>Nome <span>*</span></InputLabel>
              <Input type="text" placeholder="Nome do usuário" ref={inputName}/>
            </div>
            <div>
              
              <InputLabel>Idade <span>*</span></InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge}/>
            </div>
          </ContainerInputs>
          <div style={{width: '100%'}}>
            <InputLabel>Email <span>*</span></InputLabel>
            <Input type="email" placeholder="Email do Usuário" ref={inputEmail}/>
          </div>
        
        <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
      </Form>

      <Button type="button" onClick={() => navigate('/lista-de-usuarios')}>Ver lista de usuários</Button>

    </Container>
    </>
  )
}

export default Home

