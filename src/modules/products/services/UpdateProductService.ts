import AppError from "../../../middlewares/errors/AppError";
import { Product } from "../model/Product";
import ProductRepository from "../repositories/sequelize/ProductRepository";
import redisCache from '../../../config/redis/RedisCache'

interface IRequest {
    id: string
    name?: string
    description?: string
    value?: number
    discount?: number
    inventory?: number
}

class UpdateProductService {
    public async execute({ id, name, description, value, discount, inventory }: IRequest): Promise<Product | any> {

        const repo = new ProductRepository()

        const hasProduct = await repo.findById(id)

        if (!hasProduct) {
            throw new AppError('Produto não encontrado!', 404)
        }

        const data = {
            status: inventory && inventory > 0 ? true : false,
            name,
            description,
            value,
            discount,
            inventory
        }

        await repo.update(id, data)

        const product = await repo.findById(id)

        return product

    }
}

export default UpdateProductService;
