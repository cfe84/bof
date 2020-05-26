import { Controller } from "./Controller";
import { IContext } from "./IContext";
import * as fs from "fs";

const context: IContext = {
  fs,
  projectPath: "20 - Current"
}
const controller = new Controller(context);
const args = process.argv.slice(2);
controller.processCommandLine(args)