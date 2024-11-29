import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { User } from "../../Domain/entities/User";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery"; 
import { ApiDelivery } from "../../Data/sources/remote/api/ApiDelivery";
export class AuthRepositoryImplement implements AuthRepository{

    async register(user: User){

        try{

            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            return Promise.resolve({ error: undefined, result: response.data});

        }catch (error){
            let e = (error as Error).message;
            console.log('Error: ' + e);
            return Promise.resolve({error: e, result: undefined })
        }
    }
}