import { getAppointment } from '@/services/getAppointment';
import { CheckoutForm } from './_components/CheckoutForm';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRECT_KEY)

const CheckoutPage = async({params}) => {
    const appoinment = await getAppointment(params.id);
    console.log("appointment data", appoinment)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: appoinment.availableService.fees,
        currency: "USD",
        metadata: { appointmentId: appoinment.id },
      })
      
  if (paymentIntent.client_secret == null) {
    throw Error("Stripe failed to create payment intent")
  }

      
    return (
        <CheckoutForm
        appoinment={appoinment}
        clientSecret={paymentIntent.client_secret}
      />
    );
};

export default CheckoutPage;