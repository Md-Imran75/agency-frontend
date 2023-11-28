'use client'
import { useState, useEffect , useMemo } from 'react';
import { getBlogsForPagination } from '@/app/lib/getBlogs';
import Wrapper from '@/components/wrapper/Wrapper';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MapBlog from './MapBlog';


const AllBlogs = () => {
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const fetchBlogs = useMemo(() => async (pageNumber) => {
    try {
      const response = await getBlogsForPagination(pageNumber);
      const blogsData = await response?.data;
      setBlogs(blogsData);
      setPageCount(response.meta.pagination.pageCount);
    } catch (error) {
      toast.error('something went wrong', {
        hideProgressBar: true,
      });
    }
  }, [getBlogsForPagination]);

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  return (
    <div>
      <Wrapper>
        <div>
          <div className="py-5">
            <div className="font-bold text-center text-xl md:text-2xl mt-5 uppercase text-black-500">
              All Blogs
            </div>
            <p className="mb-8 text-center">Learn about latest technology</p>
           
           <MapBlog blogs={blogs} />
          
            <div className="mt-5">
              <button
                className={`mr-5 px-2 py-1 bg-secondary-400 text-white ${page <= 1
                  ? 'cursor-not-allowed disabled  bg-secondary-300'
                  : ''}`}
                onClick={() => {
                  if (page > 1) {
                    setPage((prevPage) => prevPage - 1);
                  }
                }}
              >
                Prev
              </button>
              <button
                className={`mt-5 px-2 py-1 bg-secondary-400 text-white ${pageCount === page
                  ? 'cursor-not-allowed disabled  bg-secondary-300'
                  : ''}`}
                onClick={() => {
                  if (page !== pageCount) {
                    setPage((prevPage) => prevPage + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default AllBlogs;
