
import getAnything from '@/app/lib/getAnything'
import Wrapper from '@/components/wrapper/Wrapper'
import Image from 'next/image'

const ServicesFromApi = async() => {
     const response = await getAnything('/api/services?populate=*')
     const data = await response?.data
  return (
    <div className='my-10'>
      <Wrapper>
        <div>
            <div className=''>
                <div className='font-bold text-xl md:text-2xl my-5 uppercase text-black-500'>
                  Our All Services
                </div>

                <div className='grid grid-rows-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                    {data?.map((item) => (
                      <div key={item.id}>
                          <Image

                          src={item.attributes.image.data.attributes.url}
                          alt={item.attributes.title}
                          height={500}
                          width={500}
                          
                          />

                          <div className='text-center text-[15px] mt-2 font-medium text-black-500'>
                            {item.attributes.title}
                          </div>
                          <div className='text-center font-bold mt-1  text-black-500'>
                            {`From ${item.attributes.price}$`}
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default ServicesFromApi
