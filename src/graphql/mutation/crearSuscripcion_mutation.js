import { gql } from '@apollo/client'

export const CREAR_SUSCRIPCION_MUTATION = gql`
  mutation CrearSuscripcion($input: suscripcionInput!) {
    CrearSuscripcion(input: $input) {
      suscripcionId
      email
    }
  }
`
