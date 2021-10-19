import React, { useState } from 'react'
import { useRouter } from 'next/dist/client/router'

// styles
import styles from './dudas.module.scss'
import { translate } from '@/i18n/translate'
import { useMutation } from '@apollo/client'
import { CREAR_FORMULARIO_MUTATION } from 'src/graphql/mutation/crearFormulario_mutation'
import { useFormik } from 'formik'
import { crearFormularioSchema } from 'src/validation/crearFormularioSchema'
import ErrorMessage from '@/components/ErrorMessage'
import useToast from '@/hooks/useToast'
import Loader from '@/components/Loader/Loader'

const Dudas = () => {
  const { locale } = useRouter()
  const {
    comoFunciona: { form }
  } = translate[locale]
  const { toast } = useToast()
  const [mensajeError, setMensajeError] = useState(null)

  const [crearFormularioMutation, { loading }] = useMutation(
    CREAR_FORMULARIO_MUTATION,
    {
      onError: (err) => {
        const error = err?.graphQLErrors[0].debugMessage
        if (error === 'CORREO_EXISTE') {
          setMensajeError('Este correo ya fue registrado')
        } else if (error) {
          console.log(error)
        } else {
          console.log('Error desconocido', err)
        }
      }
    }
  )

  const initialValues = {
    nombres: '',
    email: '',
    descripcion: ''
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: crearFormularioSchema,
    onSubmit: async (values, { resetForm }) => {
      setMensajeError(null)
      const response = await crearFormularioMutation({
        variables: {
          input: {
            nombres: values.nombres,
            email: values.email,
            descripcion: values.descripcion
          }
        }
      })
      const formularioId = response?.data?.CrearFormulario?.formularioId
      if (formularioId) {
        toast({
          title: 'Exitoso',
          msg: 'Consulta enviada exitosamente',
          hideProgressBar: true
        })
        resetForm()
      }
    }
  })

  return (
    <div className={styles.dudas}>
      <div className={styles.dudas_wrap}>
        <h1>{form.title}</h1>
        <form className={styles.dudas_form} onSubmit={formik.handleSubmit}>
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'nombres'
            }}
          />
          <div className="form-floating mb-1">
            <input
              type="text"
              id="nameFloat"
              name="nombres"
              onBlur={formik.handleBlur}
              value={formik.values.nombres}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Nombre"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="nameFloat">{form.placeholder.name}</label>
          </div>
          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'email'
            }}
          />
          <div className="form-floating mb-1">
            <input
              type="text"
              id="emailFloat"
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              autoComplete="off"
              placeholder="Email"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="emailFloat">{form.placeholder.email}</label>
          </div>

          <ErrorMessage
            {...{
              errors: formik?.errors,
              touched: formik?.touched,
              name: 'descripcion'
            }}
          />
          <div className="form-floating mb-4">
            <textarea
              id="commentFloat"
              name="descripcion"
              onBlur={formik.handleBlur}
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              style={{ height: '100px' }}
              placeholder="¿Cómo de podemos ayudar?"
              className={`form-control ${styles.dudas_input}`}
            />
            <label htmlFor="commentFloat">{form.placeholder.textarea}</label>
          </div>
          {mensajeError && (
            <p className="alert alert-primary">{mensajeError}</p>
          )}
          {loading && <Loader />}
          {!loading && (
            <button
              type="submit"
              className={`btn text-white btn-lg ${styles.dudas_formBtn}`}
            >
              {form.submit}
            </button>
          )}
        </form>
        <img src="/images/brown_wave.svg" alt="" className={styles.wave1} />
        <img src="/images/brown_wave.svg" alt="" className={styles.wave2} />
      </div>
    </div>
  )
}

export default Dudas
