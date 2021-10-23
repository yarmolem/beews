import { gql } from '@apollo/client'

export const UPDATE_USUARIO_MUTATION = gql`
  mutation UpdateUsuario($input: UserInput!) {
    UpdateUsuario(input: $input) {
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
