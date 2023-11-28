import Link from "next/link"
import Image from "next/image"

const MapBlog = ({blogs , }) => {
  return (
    <div>
 <div className="grid bg-white py-5 px-3 grid-rows-1 lg:grid-cols-4 md:grid-cols-3 h-full sm:grid-cols-2 grid-cols-1 gap-3">
              {blogs?.map((item) => (
            
                  <div key={item.id} className="border border-background-500 pb-2 shadow-sm">
                    <Link href={`/blog/${item.attributes.slug}`}>
                      <Image
                        src={item.attributes.thumbnail.data.attributes.url}
                        alt={item.attributes.title}
                        height={300}
                        width={600}
                      />
                    </Link>
                    <div className="text-center mt-2 font-medium text-black-500">
                      {`Date: ${item.attributes.date}`}
                    </div>
                    <div className="text-center font-bold mt-1  text-black-500">
                      {`${item.attributes.title}$`}
                    </div>
                  </div>
                
              ))}
            </div>
    </div>
  )
}

export default MapBlog
