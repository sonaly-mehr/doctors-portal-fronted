"use client"
import { formatCurrency } from "@/lib/formatter"
import { loadStripe } from "@stripe/stripe-js"
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js"
import { useState } from "react"


const stripePromise = loadStripe('pk_test_51IeF2FDWdYPFaGFdcB4l7ZnOYxuVEToaYpUgLehHupf7KUBNSlAzbuCd7Y3oaObJaE1QlOGwDS55LrNZeU2gsgW3008PyxC6sG')

export function CheckoutForm({ appoinment, clientSecret }) {
  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <div className="">
        <div>
          <div className="text-lg">
            {formatCurrency(appoinment.availableService.fees)}
          </div>
          <h1 className="text-2xl font-bold">{appoinment?.availableService?.service?.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {appoinment?.availableService?.service?.description}
          </div>
        </div>
      </div>
      <Elements options={{ clientSecret }} stripe={stripePromise}>
        <Form price={appoinment.availableService.fees} appointmentId={appoinment?.id} />
      </Elements>
    </div>
  )
}

function Form({
  price,
  appointmentId,
}) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const [email, setEmail] = useState()

  async function handleSubmit(e) {
    e.preventDefault()

    // if (stripe == null || elements == null || email == null) return

    // setIsLoading(true)
    // const orderExists = await userOrderExists(email, appointmentId)

    // if (orderExists) {
    //   setErrorMessage(
    //     "You have already purchased this product. Try downloading it from the My Orders page"
    //   )
    //   setIsLoading(false)
    //   return
    // }

    stripe
      .confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.FRONTEND_URL}/stripe/payment-success`,
        },
      })
      .then(({ error }) => {
        if (error.type === "card_error" || error.type === "validation_error") {
          setErrorMessage(error.message)
        } else {
          setErrorMessage("An unknown error occurred")
        }
      })
      .finally(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h2>Checkout</h2>
          {errorMessage && (
            <p className="text-destructive">
              {errorMessage}
            </p>
          )}
        </div>
        <div>
          <PaymentElement />
          <div className="mt-4">
            <LinkAuthenticationElement
              onChange={e => setEmail(e.value.email)}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-black text-white px-4 py-3 text-center rounded-lg font-semibold mt-8"
            size="lg"
            disabled={stripe == null || elements == null || isLoading}
          >
            {isLoading
              ? "Purchasing..."
              : `Purchase - ${formatCurrency(price)}`}
              
          </button>
        </div>
      </div>
    </form>
  )
}