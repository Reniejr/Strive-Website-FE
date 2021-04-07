export const testForm = [
  {
    id: "roomName",
    type: "text",
    label: "Test Name",
    placeholder: "Insert Test Name",
  },
  {
    id: "time",
    type: "number",
    label: "Duration Time",
    min: 1,
  },
  {
    id: "batchId",
    label: "Select Batch",
  },
];

export const testFormState = {
  roomName: "",
  roomType: "admission test",
  course: "",
  batchId: "",
  batch: "",
  time: "",
  status: "Not Completed",
};
