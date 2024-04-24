import { useEffect, useState } from 'react'
function App() {
  const [data, setData] = useState('');
  const [rāwī, setRāwī] = useState('bukhari');
  const [limit, setLimit] = useState(7562);
  useEffect(() => {
    fetch(`https://random-hadith-generator.vercel.app/${rāwī}/${limit}`)
      .then(res => res.json())
      .then(data => setData(data.data))
  }, [rāwī, limit])
  return (
    <div className=' max-w-screen max-h-screen gap-2'
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1527126887308-6cdf83c7d844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXwxNTUwMTM3fHxlbnwwfHx8fHw%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}>
      <div className='grid grid-cols-2 md:grid md:grid-cols-5 md:gap-2 p-4'>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => { setRāwī('bukhari'); setLimit(Math.floor(Math.random() * 7562 + 1)) }}>Sahih Al-Bhukhari</button>
        <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => { setRāwī('muslim'); setLimit(Math.floor(Math.random() * 3032 + 1)) }}>Sahih Muslim</button>
        <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => { setRāwī('abudawud'); setLimit(Math.floor(Math.random() * 3998 + 1)) }}>Abu Dawud</button>
        <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={() => { setRāwī('ibnmajah'); setLimit(Math.floor(Math.random() * 4342 + 1)) }}>Ibn Majah</button>
        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={() => { setRāwī('tirmidhi'); setLimit(Math.floor(Math.random() * 3956 + 1)) }}>Al-Tirmidhi</button>
        <button type="button" className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-900"
          onClick={() => location.reload()}>Generate Another</button>

      </div>
      <div className='flex justify-center flex-col items-center content-center '>
        <div className='bg-blue-500 max-w-lg h-fit rounded-md p-3 m-4 text-white'>Hadith Of the day</div>
        <div className='bg-cyan-800 rounded-lg max-w-80 max-h-fit shadow-2xl text-wrap p-3 m-4'>
          <h1 className='text-purple-900'>Hadith Number : {data.id}</h1>
          <h1 className='text-red-600'>Book : {data.book}</h1>
          <h1 className='text-blue text-wrap'>{data.header}</h1>
          <h1 className='text-blue'>{data.chapterName}</h1>
          <h1 className='text-blue'> Reference : {data.refno}</h1>
        </div>
        <div className=' text-wrap bg-gradient-to-r from-slate-500 to-slate-800 max-w-lg max-h-fit rounded-md p-3 m-4 shadow-lg text-white'>{data.hadith_english}</div>
      </div>
    </div>
  )
}

export default App
