import { Example } from "@/lib/entities/models/example";

export interface IExampleRepository {
  findById(id: string): Promise<Example | null>;
  findAll(): Promise<Example[]>;
  create(example: Example): Promise<Example>;
  update(id: string, example: Example): Promise<Example | null>;
  delete(id: string): Promise<boolean>;
}
