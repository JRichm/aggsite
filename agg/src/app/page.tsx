import Image from 'next/image'
import MainHeader from './components/mainHeader'

export default function Home() {

  const CollectionsComponent = () => {

    const numItems = 4
    let elements = []

    for (let i = 0; i < numItems; i++) {
      elements.push(
        <div className='bg-black w-[456px] h-[456px] border-4 border-black rounded-2xl flex hover:cursor-pointer'>
          <p className='bg-black text-white text-3xl absolute self-end w-fit pl-6 pr-8 pb-2 py-3 rounded-tr-xl rounded-bl-md'>this could be anything</p>
          <div className='bg-white w-full h-full rounded-xl'></div>
        </div>
      )
    }

    return (
      <div className='flex flex-row gap-4'>
        {elements}
      </div>
    )
  }
  
  const NewItemsComponent = () => {

    const numItems = 4
    let elements = []

    for (let i = 0; i < numItems; i++) {
      elements.push(
        <div className='bg-black w-[456px] h-[456px] border-4 border-black rounded-2xl flex hover:cursor-pointer'>
          <p className='bg-black text-white text-3xl absolute self-end w-fit pl-6 pr-8 pb-2 py-3 rounded-tr-xl rounded-bl-md'>this could be anything</p>
          <div className='bg-white w-full h-full rounded-xl'></div>
        </div>
      )
    }

    return (
      <div className='flex flex-row gap-4'>
        {elements}
      </div>
    )
  }

  return (
    <main className='w-full'>
      <hr />
      <MainHeader />
      <div className='min-h-screen w-full'>
        <hr />
        <div className='flex flex-row w-full'>
          <div className='max-h-fit relative w-full h-[750px] z-10'>
            <div className='m-40 mt-60 flex flex-col gap-2'>
              <h1 className='text-[60px] font-bold'>Epoch Edge</h1>
              <p>Unveiling the Essence of Unseen Futures in Fashion.</p>
              <input type="button" value="Shop Now" className='bg-black text-white px-6 py-3 rounded-md cursor-pointer hover:bg-transparent hover:text-black hover:outline hover:outline-black hover:outline-2 w-fit'></input>
            </div>
            <div className='absolute bottom-0 top-0 right-0 left-0 overflow-hidden z-[-10] bg-gray-100'>
              <img src="images/hero_glasses.png" className='float-right mt-[-25px] mr-40'></img>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex flex-col mx-40 my-20'>
          <h1 className='text-5xl font-bold mb-12'>Featured Collections</h1>
          <div className='flex flex-row gap-24 justify-center'>
            <CollectionsComponent />
          </div>
        </div>
        <div className='flex flex-col mx-40 my-32'>
          <h1 className='text-5xl font-bold mb-12'>What's New</h1>
          <div className='flex flex-row gap-24 justify-center'>
            <NewItemsComponent />
          </div>
        </div>
        <div className='bg-gray-800 flex flex-row text-white px-32 py-12 w-full'>
          <div className=' w-full'>
            <p className='font-bold'>Designer Fashion</p>
            <p>© Designer Fashion. All rights reserved.</p>
          </div>
          <div className='flex flex-row gap-12 w-full'>
            <div className='flex flex-col w-52'>
              <h6 className='font-bold'>Company</h6>
              <a href="">About</a>
              <a href="">Investor Relations</a>
              <a href="">Corporate Responsibility</a>
              <a href="">Partner with us</a>
              <a href="">Contact Us</a>
              <a href="">Customer Research</a>
            </div>
            <div className='flex flex-col w-52'>
              <h6 className='font-bold'>For Individuals</h6>
              <a href="">TurboTax</a>
              <a href="">QuickBooks Self-Employed</a>
              <a href="">Credit Karma</a>
              <a href="">TurboTax Live</a>
            </div>
            <div className='flex flex-col w-52'>
              <h6 className='font-bold'>For Small Business</h6>
              <a href="">QuickBooks</a>
              <a href="">Accounting Software</a>
              <a href="">Payroll</a>
              <a href="">Online Payments</a>
              <a href="">Time Tracking</a>
              <a href="">Term Loans</a>
              <a href="">Mailchimp</a>
              <a href="">TurboTax Live for Business</a>
              <a href="">Live Bookkeeping</a>
            </div>
            <div className='flex flex-col w-52'>
              <h6 className='font-bold'>For Accountants</h6>
              <a href="">Lacerte Tax</a>
              <a href="">ProConnect Tax</a>
              <a href="">ProSeries Tax</a>
              <a href="">QuickBooks Online Accountant</a>
              <a href="">ProAdvisor Program</a>
            </div>
          </div>
          <div className='flex flex-row justify-end w-full'>
            <p>f</p>
            <p>i</p>
            <p>x</p>
          </div>
        </div>
      </div>
    </main>
  )
}
