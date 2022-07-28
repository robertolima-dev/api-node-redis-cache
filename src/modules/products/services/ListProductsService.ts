import { Product } from "../model/Product";
import ProductRepository from "../repositories/sequelize/ProductRepository";
import redisCache from '../../../config/redis/RedisCache'

class ListProductService {
    public async execute(): Promise<Product[] | any> {

        const repo = new ProductRepository()

        const products = await repo.findAll()

        return products
    }
}

export default ListProductService;
