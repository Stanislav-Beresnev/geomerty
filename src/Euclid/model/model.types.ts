import type { RepositoryKind } from "./repository/repository.types";

export interface ModelDefinitionArgs {
  repository: RepositoryKind;
  itemName: string;
}
