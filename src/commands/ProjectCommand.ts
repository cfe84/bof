import { Command, ParsingResult, commandLineParser, OptionValue } from "yaclip";
import { IContext } from "../IContext";

const listProjectCommand: Command = { name: "list", alias: "l", type: Boolean }

const projectCommand: Command = {
  name: "project", alias: "p", type: Boolean,
  subcommands: [listProjectCommand]
}

const listProjects = (context: IContext) => {
  const projects = context.fs.readdirSync(context.projectPath)
  console.log(projects)
}

const execute = (context: IContext, parsed: ParsingResult) => {
  const command = parsed[projectCommand.name] as OptionValue
  if (command[listProjectCommand.name]) {
    listProjects(context)
  } else {
    throw Error("Command not found")
  }
}

export const ProjectCommand = {
  command: projectCommand,
  execute
}