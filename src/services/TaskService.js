import $api from '../http/index.js';

class TaskService{

    static async getTasks(userId, projectId){
        return await $api.get(`/${userId}/${projectId}/getAll`);
    }

}

export default TaskService;