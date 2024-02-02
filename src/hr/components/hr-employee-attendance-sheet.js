import { FaCheck, FaHourglass, FaClock } from "react-icons/fa";
import { Table, Button } from "flowbite-react";

function HRAttendanceTracker() {
  const attendanceData = [
    {
      id: 1, // Leave ID
      name: "Mr. Sachintha Dilshan",
      date: "2024-01-25",
      status: "Present",
      timeIn: "09:00",
      timeOut: "17:30",
    },
    {
      id: 2, // Leave ID
      name: "Ms. Chani Ekanayake",
      date: "2024-01-25",
      status: "Absent",
      remarks: "Sick leave",
    },
    {
      id: 3, // Leave ID
      name: "Ms. Praveen Sathsara",
      date: "2024-01-25",
      status: "Late",
      timeIn: "10:15",
      timeOut: "17:45",
      remarks: "Meeting delay",
    },
  ];

  return (
    <div className="overflow-auto">
      <div className="flex justify-center">
        <div className="grid md:grid-cols-6 md:gap-10 grid-cols-2 gap-5 mb-10">
          <span className="flex items-center justify-center text-slate-600">
            Present Today
          </span>
          <Button pill className="inline-block">
            <span className="flex justify-center flex-grow">105</span>
          </Button>
          <span className="flex items-center text-slate-600">
            Absent Today
          </span>
          <Button pill className="inline-block">
            <span className="flex justify-center flex-grow">12</span>
          </Button>
          <span className="flex items-center text-slate-600">
            Late Today
          </span>
          <Button pill className="inline-block">
            <span className="flex justify-center flex-grow">5</span>
          </Button>
        </div>
      </div>

      <Table striped hoverable>
        <Table.Head>
          <Table.HeadCell>Leave ID</Table.HeadCell>
          <Table.HeadCell>Employee Name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Time In</Table.HeadCell>
          <Table.HeadCell>Time Out</Table.HeadCell>
          <Table.HeadCell>Remarks</Table.HeadCell>
        </Table.Head>

        <Table.Body className="divide-y">
          {attendanceData.map((data) => (
            <Table.Row
              key={data.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.id}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {data.name}
              </Table.Cell>
              <Table.Cell>{data.date}</Table.Cell>
              <Table.Cell>
                {data.status === "Present" && (
                  <span className="text-green-500 uppercase flex gap-5 items-center">
                    <FaCheck /> Present
                  </span>
                )}
                {data.status === "Absent" && (
                  <span className="text-orange-400 uppercase flex gap-5 items-center">
                    {" "}
                    <FaHourglass /> Absent
                  </span>
                )}
                {data.status === "Late" && (
                  <span className="text-orange-400 uppercase flex gap-5 items-center">
                    {" "}
                    <FaClock /> Late
                  </span>
                )}
              </Table.Cell>
              <Table.Cell>{data.timeIn}</Table.Cell>
              <Table.Cell>{data.timeOut}</Table.Cell>
              <Table.Cell>{data.remarks}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default HRAttendanceTracker;
