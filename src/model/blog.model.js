import crypto from "crypto";
import { TIMEOUT } from "dns";

export default class Blog {
  constructor(title, content) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.content = content;
    this.createdAt = new Date(); // store Date object
    this.updatedAt = new Date();
  }

  updateBlog(content, title) {
    this.content = content;
    this.title = title;
    this.updatedAt = new Date();
  }
}
