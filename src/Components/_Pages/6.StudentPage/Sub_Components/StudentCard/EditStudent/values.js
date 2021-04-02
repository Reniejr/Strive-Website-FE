export const studentForm = [
  {
    id: "firstName",
    type: "text",
    placeholder: "First Name",
    label: "First Name",
  },
  {
    id: "lastName",
    type: "text",
    placeholder: "Last Name",
    label: "Last Name",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email",
    label: "Email",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
];

export const userForm = (user) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: "",
    profile: user.profile,
  };
};
