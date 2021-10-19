import { gql } from '@apollo/client'

export const LOGIN_MUTATION = gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
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
