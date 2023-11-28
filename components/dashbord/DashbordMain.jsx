import Link from "next/link"

const DashbordMain = () => {
  return (
    <div className="absolute bg-white xl:block hidden shadow-sm  left-0  w-[250px] uppercase">
      <div className="py-10 px-5">
        <Link href={'/dashbord'}>
          <div className="my-2 px-1 py-1  bg-background-500">
            Dashbord
          </div>
        </Link>
        <Link href={'/dashbord/meeting'}>
          <div className="my-2 px-1 py-1  bg-background-500">
            Meeting
          </div>
        </Link>

        <Link href={'/dashbord/profile'}>
          <div className="my-2 px-1 py-1  bg-background-500">
            Profile
          </div>
        </Link>
      </div>
    </div>
  )
}

export default DashbordMain
