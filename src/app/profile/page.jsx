"use client"
import { UpdateUserProfileModal } from '@/components/UpdateUserProfileModal'
import { authClient } from '@/lib/auth-client'
import { Avatar, Card } from '@heroui/react'
import React from 'react'

const Profile = () => {
    const currentUser = authClient.useSession()
    const user = currentUser.data?.user
    console.log(user)
    return (
        <div>
            {!user && <div className='h-[70vh] flex items-center justify-center bg-amber-400'>
                <h1 className='font-bold text-2xl'>profile not found</h1>
            </div>}
            {user && <div className='container text-center py-10'>
                <Card className='max-w-96 mx-auto flex flex-col items-center border'>

                    <Avatar className='h-20 w-20 rounded-full'>
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
                    </Avatar>
                    <p className='font-bold text-xl'>{user?.name}</p>
                    <p className='font-semibold text-muted'>{user?.email}</p>
                    <UpdateUserProfileModal />
                </Card>
            </div>}
        </div>
    )
}

export default Profile
