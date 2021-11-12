import { User } from "../model/User";
import UserRepositoy from "../repositories/sequelize/UserRepository";
import redisCache from '../../../config/redis/RedisCache'

class ListUserService {
    public async execute(): Promise<User[] | null> {

        const userRepositoy = new UserRepositoy()

        let users = await redisCache.recover<User[]>('api_redis_USERS_LIST')

        if (!users) {
            users = await userRepositoy.findAll()

            await redisCache.save('api_redis_USERS_LIST', users);

            await redisCache.expire('api_redis_USERS_LIST', 30);
        }

        return users;
    }
}

export default ListUserService;
