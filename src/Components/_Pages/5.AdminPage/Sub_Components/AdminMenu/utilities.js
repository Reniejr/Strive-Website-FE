//GET BATCH LIST
export const getBatchList = async (course) => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/batch`);
  const result = await response.json();
  //   console.log(result);
  const filter = result.filter((batch) => batch.course === course);
  // console.log(course, filter);
  return filter;
};

//GET BATCH
export const getBatch = async (batchId) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/batch/${batchId}`
  );
  const result = await response.json();
  console.log(result);
  return result;
};

//POST BATCH
export const postBatch = async (newBatch, course) => {
  let body = {
    user: {
      role: "admin",
    },
    classRoom: {
      course: course,
      ...newBatch,
    },
  };
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/batch`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
