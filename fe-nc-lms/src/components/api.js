const url = 'https://nc-be-lms.herokuapp.com/api'

export const getLogin = (username, password) => {
  const url = `${url}/user/username/${username}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserNotStarted = UserId => {
  const url = `${url}/course/user/${UserId}/Not Started`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserCompleted = UserId => {
  const url = `${url}/course/completed/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCurriculaByUserId = UserId => {
  const url = `${url}/curricula/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getUserById = UserId => {
  const url = `${url}/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCourseById = courseId => {
  const url = `${url}/course/${courseId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getSessionById = sessionId => {
  const url = `${url}/session/${sessionId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllSessions = () => {
  const url = `${url}/session`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const completeSessionById = sessionId => {
  const url = `${url}/session/${sessionId}`;
    return fetch(url, { method: 'PUT' }).then(res => {
      return res.json();
  });
};

export const getCoursesByUserId = userId => {
  const url = `${url}/course/user/${userId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllUsers = () => {
  const url = `${url}/user`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};