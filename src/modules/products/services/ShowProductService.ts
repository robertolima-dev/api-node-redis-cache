import AppError from '../../../middlewares/errors/AppError';
import { Product } from "../model/Product";
import ProductRepository from '../repositories/sequelize/ProductRepository';
import redisCache from '../../../config/redis/RedisCache'

interface IRequest {
    id: string;
}

class ShowProductService {
    public async execute({ id }: IRequest): Promise<Product | any> {

        const repo = new ProductRepository()

        const product = await repo.findById(id)

        if (!product) {
            throw new AppError('Ops... não encontramos esse produto!', 404)
        }

        return product

    }
}

export default ShowProductService;
