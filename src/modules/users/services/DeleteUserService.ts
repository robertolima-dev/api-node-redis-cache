import AppError from '../../../middlewares/errors/AppError';
import { User } from "../model/User";
import UserRepositoy from '../repositories/sequelize/UserRepository';
import redisCache from '../../../config/redis/RedisCache'

interface IRequest {
    id: string;
}

class DeleteUserService {
    public async execute({ id }: IRequest): Promise<void> {

        const userRepositoy = new UserRepositoy()

        const user = await userRepositoy.findById(id)

        if (!user) {
            throw new AppError("User not found!");
        }

        await redisCache.invalidate('api_redis_USERS_LIST')

        await userRepositoy.delete(id)

        return
    }
}

export default DeleteUserService;
