'use client'
// Remember you must use an AuthProvider for 
// client components to useSession                   // NO use session nao é asyn nos primeiros segundos vai ter uma session null pq o usesession é uma promise e voce te de esperar terminar de carregar, para receber a session
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <UserCard user={session?.user} pagetype={"Client"} />
        </section>
    )
}


