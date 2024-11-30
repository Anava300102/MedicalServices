import { AuthRepository } from "../../Domain/repositories/AuthRepository";
import { User } from "../../Domain/entities/User";
import { ResponseApiDelivery } from "../../Data/sources/remote/models/ResponseApiDelivery"; 
import { ApiDelivery } from "../../Data/sources/remote/api/ApiDelivery";
import { AxiosError } from "axios";
export class AuthRepositoryImplement implements AuthRepository{

    async register(user: User): Promise<ResponseApiDelivery>{

        try{

            const response = await ApiDelivery.post<ResponseApiDelivery>('/users/create', user);
            return Promise.resolve(response.data);

        }catch (error){
            let e = (error as AxiosError);
            console.log('Error: ' + JSON.stringify(e.response?.data));
            const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data);
            return Promise.resolve(apiError);
        }
    }
}