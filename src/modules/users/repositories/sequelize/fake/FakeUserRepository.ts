// const { User } = require('../../../../sequelize/app/models')

const users = [
    {
        id: 'teste',
        name: 'Teste',
        email: 'teste@teste.com',
        password: '123456',
        phone: '(11) 98877-6655',
        status: true
    }
]
class FakeUserRepositoy {

    async findAll() {
        return users
    }

    async findById(id: any) {
        return users.find(user => user.id === id)
    }

    async create(data: any) {
        users.push(data)
        return data
    }

    async update(id: any, data: any) {

    }

    async delete(id: any) {

    }

    async findByEmail(email: any) {
        return users.find(user => user.email === email)
    }
}

export default FakeUserRepositoy;
