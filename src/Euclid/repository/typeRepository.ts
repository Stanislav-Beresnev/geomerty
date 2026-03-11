import { Repository } from "./repository";

export class TypeRepository extends Repository {
  override define(itemName: string): void {
    if (!this.items[itemName]) {
      this.items[itemName] = [];
    }
  }
}
