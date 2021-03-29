//DROPDOWN
export const dropDownValues = ["Course", "Landing Page"];

//TOGGLE STYLE
export const toggleStyle = (course, state) => {
  if (course === state) {
    return {
      backgroundColor: "#00ff84",
      fontWeight: "800",
    };
  } else {
    return {
      backgroundColor: "transparent",
      fontWeight: "400",
    };
  }
};

//BATCH STATUS STYLE
export const batchStatus = (status) => {
  switch (status) {
    case "not started":
      return { borderColor: "red" };
    case "on going":
      return { borderColor: "#00ff84" };
    case "ended":
      return { borderColor: "blue" };
    default:
      return {};
  }
};

//BATCH DETAIL INFOS
export const batchInfo = (batch) => {
  if (batch) {
    return [
      {
        info: "Course Type",
        value: batch.course,
      },
      {
        info: "ID",
        value: batch._id,
      },
      {
        info: "Name",
        value: batch.name,
      },
      {
        info: "Status",
        value: batch.status,
      },
      {
        info: "Start Date",
        value: batch.startDate,
      },
      {
        info: "End Date",
        value: batch.endDate ? batch.endDate : "",
      },
      {
        info: "Students List",
        value: batch.studentList,
      },
      {
        info: "Teachers List",
        value: batch.teacherList,
      },
    ];
  }
};

//BATCH FORM
export const batchForm = [
  {
    id: "name",
    label: "Name",
    type: "text",
    placeholder: "Batch Name",
  },
  {
    id: "startDate",
    label: "Start Date",
    type: "text",
    placeholder: "Starting Date",
  },
  {
    id: "status",
    label: "Status",
    type: "text",
    placeholder: "Status",
  },
];

//NEW BATCH
export const newBatchState = {
  name: "",
  startDate: "",
  status: "",
};

//TEST STATUS
export const testStatus = (status) => {
  switch (status) {
    case "Not Completed":
      return { borderColor: "red" };
    case "Completed":
      return { borderColor: "#00ff84" };
    default:
      return {};
  }
};

//TEST DETAIL INFOS
export const testInfo = (test) => {
  if (test) {
    return [
      {
        info: "Test Type",
        value: test.roomType,
      },
      {
        info: "ID",
        value: test._id,
      },
      {
        info: "Name",
        value: test.roomName,
      },
      {
        info: "Status",
        value: test.status,
      },
      {
        info: "Time",
        value: test.time,
      },
      {
        info: "Participants List",
        value: test.membersList,
      },
      {
        info: "Questions List",
        value: test.quests,
      },
    ];
  }
};
