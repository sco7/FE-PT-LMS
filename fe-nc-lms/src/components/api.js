export const getLogin = (username, password) => {
  const url = `https://nc-be-lms.herokuapp.com/api/user/username/${username}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserNotStarted = UserId => {
  const url = `https://nc-be-lms.herokuapp.com/api/course/user/${UserId}/Not Started`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCoursesByUserCompleted = UserId => {
  const url = `https://nc-be-lms.herokuapp.com/api/course/completed/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCurriculaByUserId = UserId => {
  const url = `https://nc-be-lms.herokuapp.com/api/curricula/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getUserById = UserId => {
  const url = `https://nc-be-lms.herokuapp.com/api/user/${UserId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getCourseById = courseId => {
  const url = `https://nc-be-lms.herokuapp.com/api/course/${courseId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getSessionById = sessionId => {
  const url = `https://nc-be-lms.herokuapp.com/api/session/${sessionId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllSessions = () => {
  const url = `https://nc-be-lms.herokuapp.com/api/session`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const completeSessionById = sessionId => {
  const url = `https://nc-be-lms.herokuapp.com/api/session/${sessionId}`;
    return fetch(url, { method: 'PUT' }).then(res => {
      return res.json();
  });
};

export const getCoursesByUserId = userId => {
  const url = `https://nc-be-lms.herokuapp.com/api/course/user/${userId}`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllUsers = () => {
  const url = `https://nc-be-lms.herokuapp.com/api/user`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const getAllCourses = () => {
  const url = `https://nc-be-lms.herokuapp.com/api/course`;
  return fetch(url).then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  });
};

export const addCourse = (title, description, curricula_id) => {
  const url = `https://nc-be-lms.herokuapp.com/api/course`;
  return fetch(`${url}`, {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: JSON.stringify({title, description, curricula_id})})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}
