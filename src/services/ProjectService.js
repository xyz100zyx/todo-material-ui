import $api from '../http';

class ProjectService{

    static async getAllProjects(userId){
        return await $api.get(`/${userId}`)
    }

    static async delete(userId, projectId){
        return await $api.delete(`/${userId}/delete`, {data: {projectId}})
    }

    static async create(userId, title){
        return await $api.post(`/${userId}/create`, {title})
    }

}

export default ProjectService;