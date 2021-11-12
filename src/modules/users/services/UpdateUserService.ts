import AppError from "../../../middlewares/errors/AppError";
import { User } from "../model/User";
import UserRepositoy from "../repositories/sequelize/UserRepository";
import redisCache from '../../../config/redis/RedisCache'

interface IRequest {
    id: string
    name: string
    email: string
    phone: string
}

class UpdateUserService {
    public async execute({ id, name, email, phone }: IRequest): Promise<User> {

        const userRepositoy = new UserRepositoy()

        const user = await userRepositoy.findById(id)

        if(!user) {
            throw new AppError("User not found!");
        }

        const data = {
            name, email, phone
        }

        await redisCache.invalidate('api_redis_USERS_LIST')

        await userRepositoy.update(id, data)

        const userResponse = await userRepositoy.findById(id)
        return userResponse;
    }
}

export default UpdateUserService;
