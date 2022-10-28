import $api from '../http/index.js';

class TaskService{

    static async getTasks(userId, projectId){
        return await $api.get(`/${userId}/${projectId}/getAll`);
    }

    static async updateTask(userId, projectId, taskId, description, timeToPass, priority){
        return await $api.patch(`/${userId}/${projectId}/update`, {taskId, description, timeToPass, priority})
    }

    static async createTask(userId, projectId, description, timeToPass, priority){
        return await $api.post(`/${userId}/${projectId}/create`, {description, timeToPass, priority})
    }

    static async deleteTask(userId, projectId, taskId){
        return await $api.delete(`/${userId}/${projectId}/delete`, {data: {taskId}})
    }

}

export default TaskService;