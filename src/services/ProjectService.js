import $api from '../http';

class ProjectService{

    static async getAllProjects(userId){
        return await $api.get(`/${userId}`)
    }

}

export default ProjectService;