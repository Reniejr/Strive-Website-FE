export const editProfileForm = [
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
    placeholder: "E-mail",
    label: "E-mail",
  },
  {
    id: "password",
    type: "password",
    placeholder: "Password",
    label: "Password",
  },
];

export const initialInfo = (user) => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    occupation: user.occupation,
    profile: user.profile,
  };
};
