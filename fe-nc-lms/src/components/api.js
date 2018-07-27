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

export const getAllCurricula = () => {
  const url = `https://nc-be-lms.herokuapp.com/api/curricula`;
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

export const removeCourse = course_id => {
  const url = `https://nc-be-lms.herokuapp.com/api/course/${course_id}`;
  return fetch(`${url}`, {method: 'DELETE'})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const addSession = (start_date, start_time, duration_hours, location, completed_status, course_id, user_id) => {
  const url = `https://nc-be-lms.herokuapp.com/api/session`;
  return fetch(`${url}`, {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: JSON.stringify({start_date, start_time, duration_hours, location, completed_status, course_id, user_id})})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const removeSession = session_id => {
  const url = `https://nc-be-lms.herokuapp.com/api/session/${session_id}`;
  return fetch(`${url}`, {method: 'DELETE'})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const addUser = (account_type, first_name, last_name, job_title, gender, username, curricula_id) => {
  const url = `https://nc-be-lms.herokuapp.com/api/user`;
  return fetch(`${url}`, {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: JSON.stringify({account_type, first_name, last_name, job_title, gender, username, curricula_id})})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const removeUser = user_id => {
  const url = `https://nc-be-lms.herokuapp.com/api/user/${user_id}`;
  return fetch(`${url}`, {method: 'DELETE'})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const addCurricula = (title, description) => {
  const url = `https://nc-be-lms.herokuapp.com/api/curricula`;
  return fetch(`${url}`, {method: 'POST', headers: new Headers({'Content-Type': 'application/json'}), body: JSON.stringify({title, description})})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

export const removeCurricula = curricula_id => {
  const url = `https://nc-be-lms.herokuapp.com/api/curricula/${curricula_id}`;
  return fetch(`${url}`, {method: 'DELETE'})
  .then(res => {
    if (res.status === 404) throw new Error(res.statusText);
    return res.json();
  })
}

