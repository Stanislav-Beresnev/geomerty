import { i18n } from "src/utils/i18n";

export class InvalidRepositoryError extends Error {
  code: string = "001";
  name: string = "InvalidRepositoryError";
  constructor(repository: string) {
    super();
    this.message = i18n(`Репозиторий ${repository} не является допустимым`);
  }
}
