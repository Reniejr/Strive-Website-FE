import { ReactComponent as ClassRoomI } from "./assets/boss.svg";
import { ReactComponent as StudentsI } from "./assets/student-with-graduation-cap.svg";
import { ReactComponent as ExamI } from "./assets/test.svg";
import { ReactComponent as ToDoI } from "./assets/to-do-list.svg";
import { ReactComponent as UserI } from "./assets/user.svg";
import { ReactComponent as LogoutI } from "Components/_Main/Assets/logout.svg";

export const sideBarValues = [
  {
    id: "edit-user",
    name: "Edit User",
    icon: <UserI />,
  },
  {
    id: "to-do-list",
    name: "ToDo List",
    icon: <ToDoI />,
  },
  {
    id: "classroom",
    name: "Classrooms",
    icon: <ClassRoomI />,
  },
  {
    id: "students-list",
    name: "Students List",
    icon: <StudentsI />,
  },
  {
    id: "exam",
    name: "Exam",
    icon: <ExamI />,
  },
  {
    id: "logout",
    name: "Logout",
    icon: <LogoutI />,
  },
];

export const activeBatchKeys = {
  _id: "",
  name: "",
  studentList: [],
  status: "",
  lessons: [],
};

export const activeDayKeys = {
  module: "",
  day: "",
  topic: "",
  liveLink: "",
  recordedLink: "",
  codeLink: "",
  homework: null,
  hwLink: "",
};

export const lessonForm = [
  {
    id: "module",
    type: "number",
    label: "Module",
    placeholder: "Module",
    min: 1,
  },
  {
    id: "day",
    type: "number",
    label: "Day",
    placeholder: "Day",
    min: 1,
    max: 5,
  },
  {
    id: "topic",
    type: "text",
    label: "Topic",
    placeholder: "Insert a topic",
  },
  {
    id: "liveLink",
    type: "text",
    label: "Lesson Link (Live)",
    placeholder: "Insert Zoom Link",
  },
  {
    id: "recordedLink",
    type: "text",
    label: "Lesson Link (Recorded)",
    placeholder: "Insert Zoom Link",
  },
  {
    id: "codeLink",
    type: "text",
    label: "Link of lesson code",
    placeholder: "Insert a GitHub Link",
  },
  {
    id: "hwLink",
    type: "text",
    label: "Link of homeworks",
    placeholder: "Insert Github Link",
  },
];
