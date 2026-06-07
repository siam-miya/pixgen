import { Button } from '@heroui/react'
import Link from 'next/link'

const Category = async () => {
    const res = await fetch("https://pixgen-alpha-ten.vercel.app/category.json")
    const categories = await res.json()
    return (
        <div className='space-x-5 my-5'>
            {
                categories.map((category) => <Link href={`?category=${category.name.toLowerCase()}`} key={category.id}><Button size='sm' >{category.name}</Button></Link>)
            }
        </div>
    )
}

export default Category
