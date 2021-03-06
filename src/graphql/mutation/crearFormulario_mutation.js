import { gql } from '@apollo/client'

export const CREAR_FORMULARIO_MUTATION = gql`
  mutation CrearFormulario($input: FormularioInput!) {
    CrearFormulario(input: $input) {
      email
      nombres
      descripcion
      formularioId
    }
  }
`
