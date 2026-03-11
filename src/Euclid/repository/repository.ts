import type { RepositoryItemDefinition } from "./repository.types";

export abstract class Repository {
  protected items: Record<string, RepositoryItemDefinition[]> = {};
  abstract define(itemName: string): void;
  getItemDefinitions(itemName: string) {
    return this.items[itemName];
  }
}
