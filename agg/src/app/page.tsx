import Image from 'next/image'
import MainHeader from './components/mainHeader'

export default function Home() {
  return (
    <main className='w-full'>
      <MainHeader />
      <div className='bg-gray-100 min-h-screen w-full'>
        <div className='flex flex-row w-full'>
          <div>
            <h1 className='text-5xl font-medium'>Epoch Edge</h1>
            <p>Unveiling the Essence of Unseen Futures in Fashion.</p>
          </div>
          <div className='bg-black absolute'>
            <img className='object-cover' src='images/hero_glasses.png'></img>
          </div>
        </div>
        <p className='mt-[900px]'>Hero Section: A dark and futuristic background with a tagline that captures the essence of your dystopian fashion line. For example, "Elegance in the Shadows: Unveiling a New World of Dystopian Luxury."</p>
      </div>
    </main>
  )
}
