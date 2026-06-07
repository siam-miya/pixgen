import Category from '@/components/Category'
import PhotoCard from '@/components/PhotoCard'


const PhotoPage = async ({searchParams}) => {
  const {category} = await searchParams
  console.log(category)
    const res = await fetch("https://pixgen-alpha-ten.vercel.app/data.json")
    const photos = await res.json()
    console.log(photos)
    const filterPhoto = category ? photos.filter((photo) => photo?.category?.toLowerCase() == category.toLowerCase()) : photos
  return (
    <div className='container'>
      <h1 className='font-bold text-2xl my-4'>All Photos</h1>
      <Category/>
      <div className='grid grid-cols-4 gap-4'>
        {
            filterPhoto.map((photo) => <PhotoCard key={photo} photo={photo}/>)
        }
      </div>
    </div>
  )
}

export default PhotoPage
