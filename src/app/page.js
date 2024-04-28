import PublicHeader from '@/components/View/Header/PublicHeader'
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/AuthOptions';
import Landing from '@/components/View/home/Landing';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <PublicHeader />
      <Landing/>
      <div className="-[calc(100vh-64px)]"> </div>
    </main>
  )
}
