import { Command, ParsingResult } from "yaclip";
import { IContext } from "../IContext";

export interface ICommand {
  command: Command,
  execute: (context: IContext, parsed: ParsingResult) => void
}