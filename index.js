import { HelloWorldComponent } from "./components/hello-world.js";
import { HelloWorldUtil } from "./services/hello-world-util.js";

document.addEventListener('DOMContentLoaded', () => {
  const util = new HelloWorldUtil();
  util.hello();
});