import AppError from '../../../middlewares/errors/AppError';
import { User } from "../model/User";
import UserRepositoy from '../repositories/sequelize/UserRepository';
import redisCache from '../../../config/redis/RedisCache'

interface IRequest {
    id: string;
}

class ShowUserService {
    public async execute({ id }: IRequest): Promise<User> {

        const userRepositoy = new UserRepositoy()

        let user = await redisCache.recover<User>(`api_redis_USER:${id}`)

        if (!user) {

            user = await userRepositoy.findById(id)

            if (!user) {
                throw new AppError("User not found!");
            }

            await redisCache.save(`api_redis_USER:${id}`, user);
            // await redisCache.expire(`api_redis_USER:${id}`, 30);
        }

        return user;
    }
}

export default ShowUserService;
