import { v4 as uuidv4 } from "uuid";

export class Task {
  HAS_DONE_BY_DEFAULT = false;

  constructor({ id, title, description, children, hasDone }) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.hasDone = this.HAS_DONE_BY_DEFAULT;
  }
}
