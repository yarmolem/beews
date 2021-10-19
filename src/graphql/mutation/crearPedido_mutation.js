import { gql } from '@apollo/client'

export const CREAR_PEDIDO_MUTATION = gql`
  mutation CrearPedido($input: PedidosInput!) {
    CrearPedido(input: $input) {
      pedidoId
      total
      plan
      estado
      visto
      idPaypal
      User {
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
      DetallePedidos {
        detallePedidoId
        precio
        cantidad
        subtotal
        productoId
        pedidoId
      }
      FichaDestino {
        fichaDestinoId
        nombres
        apellidos
        pais
        ciudad
        distrito
        direccion
        referencia
        vinculo
        fechaSugerida
        horarioSugerido
        pedidoId
      }
    }
  }
`
