import { Component } from "../../core/Component";
import "./Avatar.scss";

export class Avatar extends Component {
  constructor() {
    this.avatar = document.createElement("div");

    this.avatar.className = "Avatar";

    return this.avatar;
  }
}
