import crypto from "crypto";

export default class Blog {
  constructor(title, content, author) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateBlog(content, title) {
    if (title && content) {
      this.content = content;
      this.title = title;
      this.updatedAt = new Date();
    } else if (title) {
      this.title = title;
      this.updatedAt = new Date();
    } else {
      this.content = content;
      this.updatedAt = new Date();
    }
  }
}
