import { CreateEventForm } from '@/components/elements/forms/CreateEvent'
import { getSessionUser } from '@/lib/actions/user/getSessionUser';
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async() => {
  const user = await getSessionUser();
  if (!user) redirect("/login")
  return <CreateEventForm />
}

export default Page
