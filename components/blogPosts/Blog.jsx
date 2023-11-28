import getBlogs from '@/app/lib/getBlogs';
import Wrapper from '../wrapper/Wrapper';
import Image from 'next/image';
import Link from 'next/link';

const Blog = async () => {
  let content;

  try {
    const res = await getBlogs();
    const data = await res?.data;

    if (!data || data.length === 0) {
      content = <p>No blogs available at the moment.</p>;
    } else {
      content = (
        <div className='grid bg-white py-5 px-3 grid-rows-1 lg:grid-cols-4 md:grid-cols-3 h-full sm:grid-cols-2 grid-cols-1 gap-3'>
          {data?.slice(0, 4).map((item) => (
            <div className='border border-background-500 pb-2 shadow-sm' key={item.id}>
              <Link href={`/blog/${item.attributes.slug}`}>
                <Image
                  src={item.attributes.thumbnail.data.attributes.url || '/placeholder-image.jpg'}
                  alt={item.attributes.title}
                  height={300}
                  width={600}
                />
              </Link>

              <div className='text-center mt-2 font-medium text-black-500'>
                {`Date: ${item.attributes.date}`}
              </div>
              <div className='text-center font-bold mt-1  text-black-500'>
                {`${item.attributes.title}`}
              </div>
            </div>
          ))}
        </div>
      );
    }
  } catch (error) {
    content = <p>Error fetching blogs. Please try again later.</p>;
  }

  return (
    <div className='bg-primary-200'>
      <Wrapper>
        <div>
          <div className='py-5'>
            <div className='font-bold text-center text-xl md:text-2xl mt-5 uppercase text-black-500'>
              Our Latest Blogs
            </div>
            <p className='mb-8 text-center'>Learn about the latest technology</p>
            <div className='mb-[10px]'>
              <Link
                className='font-bold uppercase text-[15px] bg-secondary-400 py-1 md:py-2 rounded-sm px-1 text-white'
                href={'/blogs'}
              >
                See All Blogs
              </Link>
            </div>
            {content}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Blog;
