import { useRouter } from 'next/dist/client/router'

const useTranslate = () => {
  const { locale } = useRouter()

  return { isSpanish: locale === 'es-ES', locale }
}

export default useTranslate
