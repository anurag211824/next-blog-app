import React from "react";

const SubsTableItem = ({ email,mongoId,date, deleteEmail  }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No email provided"}
      </th>
      <td className="px-6 py-4 hidden sm:block">
        {emailDate.toDateString()}{" "}
      </td>
      <td>
        <button onClick={()=>deleteEmail(mongoId)} className="px-4 py-2 bg-red-500 text-white cursor-pointer rounded hover:bg-red-600">
          X
        </button>
      </td>
    </tr>
  );
};

export default SubsTableItem;
