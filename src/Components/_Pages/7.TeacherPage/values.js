import { ReactComponent as ClassRoomI } from "./assets/boss.svg";
import { ReactComponent as NotificationI } from "./assets/notification.svg";
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
    id: "notifications",
    name: "Notifications",
    icon: <NotificationI />,
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
