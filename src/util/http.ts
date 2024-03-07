import axios from 'axios';

const BACKEND_URL = 'https://taskapp-62f3f-default-rtdb.firebaseio.com';

export async function storeTask(taskData) {
  const response = await axios.post(BACKEND_URL + '/tasks.json', taskData);
  const id = response.data.name;
  return id;
}

export async function fetchTasks() {
  const response = await axios.get(BACKEND_URL + '/tasks.json');

  const tasks = [];

  for (const key in response.data) {
    const taskObj = {
      id: key,
      taskName: response.data[key].taskName,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    tasks.push(taskObj);
  }

  return tasks;
}

export function updateTask(id, taskData) {
  return axios.put(BACKEND_URL + `/tasks/${id}.json`, taskData);
}

export function deleteTask(id) {
  return axios.delete(BACKEND_URL + `/tasks/${id}.json`);
}
