import { Footer } from '@/components/elements/footer/Footer'
import { Header } from '@/components/elements/landing/Header'
import React from 'react'

const SiteLayout = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className='overflow-x-hidden'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default SiteLayout
