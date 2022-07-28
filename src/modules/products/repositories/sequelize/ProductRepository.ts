const { Product } = require('../../../../sequelize/app/models')

class ProductRepository {

    async findAll() {
        return await Product.findAll()
    }

    async findById(id: any) {
        return await Product.findOne({
            where: { id },
        })
    }

    async findByName(name: any) {
        return await Product.findOne({
            where: { name },
        })
    }

    async create(data: any) {
        return await Product.create(data)
    }

    async update(id: any, data: any) {
        return await Product.update(
            data,
            { where: { id } }
        )
    }

    async delete(id: any) {
        return await Product.destroy(
            { where: { id } }
        )
    }
}

export default ProductRepository;
