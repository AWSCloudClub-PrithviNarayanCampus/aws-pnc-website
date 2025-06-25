import DisplayContacts from '@/components/elements/contact/DisplayContacts';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getContacts } from '@/lib/actions/contact/getContacts'
import React from 'react'

const Page = async () => {
    const response = await getContacts();
    if (!response.success) return <div>Something went wrong {response.message}</div>
    const contactData = response.data as Contact[];
    return (
        <ScrollArea className='w-full h-[calc(100vh-5rem)]'>
            <div className='grid grid-cols-4'>
                {
                    contactData && contactData.length > 0 ? (
                        contactData.map(contact => (
                            <DisplayContacts key={contact._id} contact={contact} />
                        ))
                    ) : (
                        <div>No Contact Data to show!</div>
                    )
                }
            </div>
        </ScrollArea>
    )
}

export default Page
