import type { RepositoryItemDefinition } from "./repository.types";

export abstract class Repository {
  protected items: Record<string, RepositoryItemDefinition[]> = {};
  abstract define(itemName: string): void;
  getItemDefinitions(itemName: string) {
    return this.items[itemName];
  }
}

export class TypeRepository extends Repository {
  override define(itemName: string): void {
    if (!this.items[itemName]) {
      this.items[itemName] = [];
    }
  }
}
