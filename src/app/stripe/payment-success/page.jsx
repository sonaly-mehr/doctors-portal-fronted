import { formatCurrency } from "@/lib/formatters"
import { notFound } from "next/navigation"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY)

export default async function SuccessPage({
  searchParams,
}) {
  const paymentIntent = await stripe.paymentIntents.retrieve(
    searchParams.payment_intent
  )
  if (paymentIntent.metadata.appointmentId == null) return notFound()

  // const appointment = await db.product.findUnique({
  //   where: { id: paymentIntent.metadata.productId },
  // })
  // if (product == null) return notFound()

  const isSuccess = paymentIntent.status === "succeeded"

  return (
    <div className="max-w-5xl w-full mx-auto space-y-8">
      <h1 className="text-4xl font-bold">
        {isSuccess ? "Success!" : "Error!"}
      </h1>
      <div className="flex gap-4 items-center">
        <div>
          <div className="text-lg">
            {formatCurrency(appoinment.availableService.fees)}
          </div>
          <h1 className="text-2xl font-bold">{appoinment?.availableService?.service?.name}</h1>
          <div className="line-clamp-3 text-muted-foreground">
            {appoinment?.availableService?.service?.description}
          </div>
          {/* <Button className="mt-4" size="lg" asChild>
            {isSuccess ? (
              <a
                href={`/products/download/${await createDownloadVerification(
                  appoinment.id
                )}`}
              >
                Download
              </a>
            ) : (
              <Link href={`/appointment/${appoinment.id}/purchase`}>Try Again</Link>
            )}
          </Button> */}
          <h2>Payment success!</h2>
        </div>
      </div>
    </div>
  )
}