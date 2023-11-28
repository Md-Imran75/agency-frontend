'use client'
import { useState, useEffect } from 'react'
import DashMeeting from '@/components/dashbord/DashMeeting'
import { userData } from '@/utils/Helper'
import getAnything from '@/app/lib/getAnything'
import ProtectRoute from '@/utils/ProtectRoute'

const Meeting = () => {
  const [meetingInfo, setMeetingInfo] = useState([]);
  const [userName, setUsername] = useState();

  useEffect(() => {
    const { username } = userData();
    setUsername(username);

    const fetchMeetingInformation = async () => {
      try {
        const res = await getAnything(`/api/orders?filters[userName][$eq]=${username}`);
        const data = await res?.data;
        ;
        setMeetingInfo(data);
      } catch (error) {
        console.error('Error fetching meeting information:', error);
      }
    };

    fetchMeetingInformation();
  }, [userName]); // Add userName as a dependency

  return (
    <div>
      <ProtectRoute>
      <DashMeeting data={meetingInfo} />
      </ProtectRoute>
    </div>
  );
};

export default Meeting;
