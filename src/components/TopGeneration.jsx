import PhotoCard from "./PhotoCard"

const TopGeneration = async () => {
    const res = await fetch("https://pixgen-alpha-ten.vercel.app/data.json")
    const photos = await res.json()
    console.log(photos)
    const topPhotos = photos.slice(0, 8)
    console.log(topPhotos)
  return (
    <div className="container">
     <h2 className="font-bold text-2xl my-4">Top Generation</h2>
      <div className="grid grid-cols-4 gap-5">
        {
            topPhotos.map((photo) => <PhotoCard key={photo.id} photo={photo}/>)
        }
      </div>
    </div>
  )
}

export default TopGeneration
