import $api from '../http/index.js';

class TaskService{

    static async getTasks(userId, projectId){
        return await $api.get(`/${userId}/${projectId}/getAll`);
    }

    static async updateTask(userId, projectId, taskId, description, timeToPass, priority){
        return await $api.patch(`/${userId}/${projectId}/update`, {taskId, description, timeToPass, priority})
    }

}

export default TaskService;