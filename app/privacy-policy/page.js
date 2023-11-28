import getAnything from '@/app/lib/getAnything'
import Image from 'next/image'
import Wrapper from '@/components/wrapper/Wrapper';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AboutUs = async() => {
  const res = await getAnything('/api/privacy-policy?populate=*')
  const data = await res?.data
 
  return (
    <div>
      <Wrapper>
      <div>
        <div className='w-full'>
          <Image
          src={data?.attributes?.image?.data?.attributes?.url}
          alt='about-us'
          height={400}
          width={1200}
          loading='lazy'
          />
        </div>
        <div className='markdown mx-5 md:w-2/3 mt-10 text-[15px] md:mx-auto'>
        <Markdown remarkPlugins={[remarkGfm]}>{data?.attributes?.content}</Markdown>
        </div>
      </div>
      </Wrapper>
    </div>
  )
}

export default AboutUs
