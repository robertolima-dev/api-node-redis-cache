const { User } = require('../../../../sequelize/app/models')

class UserRepositoy {

    async findAll() {
        return await User.findAll({
            attributes: ['id', 'name', 'email'],
        })
    }

    async findById(id: any) {
        return await User.findOne({
            where: { id: id },
            attributes: ['id', 'name', 'email'],
        })
    }

    async create(data: any) {
        return await User.create(data)
    }

    async update(id: any, data: any) {
        return await User.update(
            data,
            { where: { id: id }}
        )
    }

    async delete(id: any) {
        return await User.destroy(
            { where: { id: id } }
        )
    }

    async findByEmail(email: any) {
        return await User.findOne(
            { where: { email } }
        )
    }
}

export default UserRepositoy;
