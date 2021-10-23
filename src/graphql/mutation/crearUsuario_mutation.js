import { gql } from '@apollo/client'

export const CREAR_USUARIO_MUTATION = gql`
  mutation CrearUsuario($input: UserInput!) {
    CrearUsuario(input: $input) {
      userId
      tipoUsuario
      nombre
      apellidos
      email
      celular
      pais
      ciudad
      apiToken
    }
  }
`
