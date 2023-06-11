'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { getUserData} from '@/firebase/database'
import { onAuth } from '@/firebase/database'



export function WithAuth(Component) {
    return () => {
        const { user, userDB, setUserProfile, setUserData } = useUser()
        const router = useRouter()

        useEffect(() => {
            if(user === undefined) onAuth(setUserProfile)
            if(user === null) router.push('/')
            if(user !== undefined && userDB === undefined) getUserData( setUserData ) 
        }, [user, userDB])
        
        return (
            <>
                {user === undefined && <Loader />}
                {user && <Component {...arguments} />}
            </>
        )
    }
}