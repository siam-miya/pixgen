import { Button, Card, Chip, Separator } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const PhotoDetails = async ({ params }) => {
  const res = await fetch("https://pixgen-alpha-ten.vercel.app/data.json")
  const photos = await res.json()
  console.log(photos)
  const { id } = await params
  console.log(id)
  const photo = photos.find(p => p.id == id)
  return (
    <div className='container'>
      <Card className='border'>
        <div className='relative'>
          <Image src={photo.imageUrl} height={20} width={1400} alt={photo.title} className='rounded-xl object-cover h-[500px]' />
          <Chip className='absolute right-2 top-3'>
            {photo.category}
          </Chip>
        </div>
        <div>
          <h2 className='font-bold '>{photo.title}</h2>
        </div>
        <div className='flex items-center gap-4'>
          <p className='flex items-center gap-2'><FaHeart />
            {photo.likes}</p>
          <Separator orientation='vertical' />
          <p className='flex items-center gap-2'><FiDownload />
            {photo.downloads}</p>
        </div>
        <div>
          <p className='font-semibold'>{photo.prompt}</p>
          <p>Model: {photo.model}</p>
          <p>Resolution: {photo.resolution}</p>
        </div>
      </Card>
    </div>
  )
}

export default PhotoDetails
