import { parseCommandLine, Command, ParsingResult, commandLineParser } from "yaclip";
import { ICommand } from "./commands/ICommand";
import { ProjectCommand } from "./commands/ProjectCommand";
import { IContext } from "./IContext";

const commands: ICommand[] = [
  ProjectCommand,
]

export class Controller {
  constructor(private context: IContext) { }

  processCommandLine(commandLine: string[]) {
    const parser = commandLineParser(commands.map(command => command.command), { dashesAreOptional: true })
    const parsed = parser(commandLine)

    commands.forEach(command => {
      const commandName = command.command.name
      if (parsed[commandName]) {
        command.execute(this.context, parsed)
      }
    })
  }
}