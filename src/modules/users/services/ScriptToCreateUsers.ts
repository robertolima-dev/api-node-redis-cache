import CreateUserService from './CreateUserService'

interface IRequest {
    name: string
    email: string
    password: string
}

class ScriptToCreateUsers {
    public async execute(): Promise<any> {

        const service = new CreateUserService()

        for (let i = 0; i < 500; i++) {

            const data = {
                name: `Roberto ${i}`,
                email: `robertolima.izphera+index-${i}@gmail.com`,
                password: '123456'
            }

            setTimeout(async () => {

                await service.execute(data)

            }, 200)
        }
    }
}

export default ScriptToCreateUsers;
