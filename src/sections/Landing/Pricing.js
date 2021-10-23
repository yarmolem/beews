import React from 'react'
import { useRouter } from 'next/dist/client/router'

// Components
import CardPricing from '@/components/CardPricing'

// utils
import useToast from '@/hooks/useToast'
import { translate } from '@/i18n/translate'
import useCheckout from '@/hooks/useCheckout'
import { Premium, Xperience } from '@/data/pricing'

// styles
import styles from './pricing.module.scss'

const PricingPage = () => {
  const { toast } = useToast()
  const { loadPlan } = useCheckout()
  const { locale, push } = useRouter()

  const handlePlan = ({ id, title, price }) => {
    loadPlan({ id, title, price })
    toast({
      title: 'Éxito',
      msg: `Plan ${id} seleccionado`,
      hideProgressBar: true
    })
    push({
      pathname: '/check-out',
      query: { step: 1, plan: id }
    })
  }

  const {
    index: { Pricing }
  } = translate[locale]

  return (
    <section className={styles.pricing}>
      <h3>{Pricing.title}</h3>
      <h4>{Pricing.subtitle}</h4>

      <div className={styles.pricing_grid}>
        <CardPricing {...Xperience} onChoose={(item) => handlePlan(item)} />
        <CardPricing {...Premium} onChoose={(item) => handlePlan(item)} />
      </div>
    </section>
  )
}

export default PricingPage
