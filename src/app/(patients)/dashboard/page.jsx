import { authOptions } from '@/app/api/auth/[...nextauth]/AuthOptions';
import { getServerSession } from 'next-auth';

const PatientDashboard =async () => {
  const session = await getServerSession(authOptions);
  console.log("user-session", session);
  return (
    <div className='bg-[#F1F5F9]'>
      <h4 className='font-semibold bg-white p-4 rounded-xl text-lg'>Welcome {session?.fullName}!</h4>
    </div>
  )
}

export default PatientDashboard