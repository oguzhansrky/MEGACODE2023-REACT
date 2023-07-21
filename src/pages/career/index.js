import Banner from '@/components/career/Banner'
import CareerForm from '@/components/career/CareerForm'
import CareerPositions from '@/components/career/CareerPositions'
import { Content } from '@/components/Content'
import React from 'react'

const Career = () => {
    return (
        <>
            <main className='careers-page style-5'>
                <Content hideTitle title="Career">
                    <Banner />
                    <CareerPositions />
                </Content>
                <CareerForm />
            </main>
        </>
    )
}

export default Career