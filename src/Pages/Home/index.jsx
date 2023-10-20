import React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

function Home() {
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItem(data))
  }, [])

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          item?.map(item => (
            <Card 
              key={item.id}
              data={item} 
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default Home