import { IExampleRepository } from "@/lib/application/repositories/example.repository.interface";
import { Example } from "@/lib/entities/models/example";
import { CustomError } from "@/lib/entities/errors/custom-error";

export class ExampleRepository implements IExampleRepository {
  async findById(id: string) {
    throw new CustomError("Method not implemented.");
    return null;
  }

  async findAll() {
    throw new CustomError("Method not implemented.");
    return [];
  }

  async create(example: Example) {
    throw new CustomError("Method not implemented.");
    return example;
  }

  async update(id: string, example: Example) {
    throw new CustomError("Method not implemented.");
    return null;
  }

  async delete(id: string) {
    throw new CustomError("Method not implemented.");
    return false;
  }
}
