import Link from "next/link";
import Wrapper from "../wrapper/Wrapper";
import DashbordMain from "./DashbordMain";

const DashMeeting = ({ data }) => {
    const formatCreatedAt = (createdAt) => {
        if (!createdAt) {
            return 'Invalid Date';
        }

        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };

        try {
            return new Intl.DateTimeFormat('en-US', options).format(new Date(createdAt));
        } catch (error) {
            console.error('Error formatting createdAt:', error);
            return 'Invalid Date';
        }
    };

    return (
        <div className="mt-10  text-black-500">
            <div className="md:flex-row mt-10 flex-col flex">
                <div className="xl:block hidden w-1/4">
                    <DashbordMain />
                </div>
                <div className="mx-10 xl:mr-10 xl:w-3/4">
                    <div className="font-bold text-xl mb-5 uppercase md:text-2xl">All Meeting Information</div>
                    <div className="">
                        <div >
                            <div className="">
                                {data?.map((item) => (
                                    <div className="flex overflow-x-scroll bg-primary-200 px-5 mt-2 flex-row py-5" key={item.id}>
                                        <div className="my-1 mr-5 w-full">{`Name: ${item.attributes.name}`}</div>
                                        <div className="my-1 mr-5 w-full">{`Email: ${item.attributes.email}`}</div>
                                        <div className="my-1 mr-5 w-full">{`Phone: ${item.attributes.phone}`}</div>
                                        <div className="my-1 pr-5 w-full">{`Date: ${formatCreatedAt(item.attributes.createdAt)}`}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DashMeeting;
