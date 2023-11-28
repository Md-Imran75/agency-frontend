import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Wrapper from '@/components/wrapper/Wrapper';
import Image from 'next/image';
import { getBlogWithSlug } from '@/app/lib/getBlogs';

const BlogDetailsPage = async ({ params: { slug } }) => {
  const slugData = slug;
  const res = await getBlogWithSlug(slugData);
  const data = await res?.data;
 

  return (
    <div className="mt-10  mb-15 text-black-500">
      <Wrapper>
        <div className="border border-background-500 py-5">
          <div>
            <div className="md:w-2/4 mx-auto">
              <Image
                src={data?.[0]?.attributes?.thumbnail?.data?.attributes?.url}
                alt={data?.[0]?.attributes?.title}
                height={1200}
                width={600}
                loading="lazy"
              />
            </div>
            <div className="text-center my-5">
              <div className="font-bold text-xl md:text-2xl">
                {data?.[0]?.attributes?.title}
              </div>
              <div className='mt-3'>
                <div>{`Author: ${data?.[0]?.attributes?.author}`}</div>
                <div>{data?.[0]?.attributes?.date}</div>
              </div>
            </div>
          </div>

          <div className="markdown mx-5 md:w-2/3 mt-10 text-[15px] md:mx-auto">
            <Markdown remarkPlugins={[remarkGfm]}>{data?.[0]?.attributes?.description}</Markdown>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default BlogDetailsPage;
