import { Fs } from "./SystemInterfaces";

export interface IContext {
  projectPath: string,
  fs: Fs
}