export const getLogin = (username, password) => {
  const url = `http://localhost:3000/api/user/username/${username}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserNotStarted = UserId => {
  const url = `http://localhost:3000/api/course/user/${UserId}/Not Started`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserCompleted = UserId => {
  const url = `http://localhost:3000/api/course/completed/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCurriculaByUserId = UserId => {
  const url = `http://localhost:3000/api/curricula/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getUserById = UserId => {
  const url = `http://localhost:3000/api/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};


