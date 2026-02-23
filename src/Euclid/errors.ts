import { i18n } from "../utils/i18n";

export class DefineModelRepositoryError extends Error {
  code: string = "001";
  name: string = "DefineModelRepositoryError";
  constructor(repository: string) {
    super();
    this.message = i18n(`Репозиторий ${repository} не является допустимым`);
  }
}
