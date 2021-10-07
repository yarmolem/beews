import React from 'react'
import { useRouter } from 'next/dist/client/router'

// Components
import CardPricing from '@/components/CardPricing'

// data
import { translate } from '@/i18n/translate'
import { plansData } from '@/data/pricing'

// Styles
import styles from './plan.module.scss'
import useCheckout from '@/hooks/useCheckout'
import useToast from '@/hooks/useToast'

const Plan = ({ next }) => {
  const router = useRouter()
  const { toast } = useToast()
  const { loadPlan, plan } = useCheckout()
  const { checkout } = translate[router.locale]

  const handleNext = () => {
    if (!plan) return
    router.push({ query: { plan: plan.id } })
    next()
  }

  const handleChosenPlan = (values) => {
    loadPlan(values)
    toast({
      title: 'Éxito',
      msg: `Plan ${values.id} seleccionado`,
      hideProgressBar: true
    })
  }

  return (
    <div className={styles.plan}>
      <div className={styles.plan_num}>
        <h1>1</h1>
      </div>

      <h2>{checkout.plan.title}</h2>

      <div className={styles.plan_grid}>
        {plansData.map((item) => (
          <CardPricing
            {...item}
            key={`plan-${item.id}`}
            isChosen={plan.id === item.id}
            onChoose={(values) => handleChosenPlan(values)}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className={`btn btn-danger text-white btn-lg ${styles.submit}`}
      >
        {checkout.plan.btn}
      </button>
    </div>
  )
}

export default Plan
