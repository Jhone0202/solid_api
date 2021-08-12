import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { LocalUsersRepository } from "../../repositories/implementations/LocalUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const localUsersRepository = new LocalUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    localUsersRepository,
    mailtrapMailProvider,
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }