import { Product } from "../model/Product";
import ProductRepository from "../repositories/sequelize/ProductRepository";
import { v4 as uuidv4 } from 'uuid';
import redisCache from '../../../config/redis/RedisCache'
import bcrypt from 'bcrypt'
import AppError from "src/middlewares/errors/AppError";

interface IRequest {
    name: string
    description: string
    value: number
    discount: number
    status: boolean
    inventory: number
}

class CreateProductService {
    public async execute({ name, description, value, discount, status, inventory }: IRequest): Promise<Product | any> {

        const repo = new ProductRepository()

        const hasProductName = await repo.findByName(name)

        if (hasProductName) {
            throw new AppError('Produto ja existe!', 409)
        }

        const data = {
            id: uuidv4(),
            name,
            description,
            value,
            discount,
            status,
            inventory
        }

        const product = await repo.create(data)

        return product

    }
}

export default CreateProductService;
