import { Button, Card, Chip, Separator } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'

const PhotoCard = ({ photo }) => {
  console.log(photo)
  return (
    <div>
      <Card className='border'>
        <div className='relative w-full aspect-square'>
          <Image src={photo.imageUrl} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={photo.title} className='rounded-xl object-cover'/>
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
            <Separator orientation='vertical'/>
          <p className='flex items-center gap-2'><FiDownload />
            {photo.downloads}</p>
        </div>
        <Button className={"w-full"}>View</Button>
      </Card>
    </div>
  )
}

export default PhotoCard
