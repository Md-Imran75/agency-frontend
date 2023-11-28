import { anton } from "./fonts"

const Loading = () => {
  return (
    <div className="w-full absolute  h-full bg-primary-100">
      <div className="md:w-1/3 mx-auto">
       <div className={`text-center mt-20 text-2xl ${anton.className}`}>
       ...WEB LAGBE...
       </div>
      </div>
    </div>
  )
}

export default Loading
