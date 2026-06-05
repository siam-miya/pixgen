import PhotoCard from '@/components/PhotoCard'


const PhotoPage = async () => {
    const res = await fetch("https://pixgen-alpha-ten.vercel.app/data.json")
    const photos = await res.json()
    console.log(photos)
  return (
    <div className='container'>
      <h1 className='font-bold text-2xl my-4'>All Photos</h1>
      <div className='grid grid-cols-4 gap-4'>
        {
            photos.map((photo) => <PhotoCard key={photo} photo={photo}/>)
        }
      </div>
    </div>
  )
}

export default PhotoPage
