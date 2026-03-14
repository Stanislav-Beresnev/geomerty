import { RepositoryKind } from "Euclid/repository/repository.types";
import { InvalidRepositoryError } from "../errors";
import type { ModelDefinitionArgs } from "./model.types";
import { TypeRepository } from "Euclid/repository/typeRepository";

export const type = (itemName: string): ModelDefinitionArgs => {
  return {
    repository: RepositoryKind.Type,
    itemName,
  };
};

export class Model {
  typeRepository = new TypeRepository();

  define({ repository, itemName }: ModelDefinitionArgs) {
    switch (repository) {
      case RepositoryKind.Type:
        this.typeRepository.define(itemName);
        break;
      default:
        throw new InvalidRepositoryError(repository);
    }
  }
}
