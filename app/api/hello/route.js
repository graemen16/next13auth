import {nextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { AuthOptions } from '../../api/auth/[...nextauth]/route'

export async function GET() {
    const session = await getServerSession(authOptions)

    if (!session) {
        return NextResponse.json({message: 'Your are not logged in.'})
    }

    return NextResponse.json({name: session.user.name})
}