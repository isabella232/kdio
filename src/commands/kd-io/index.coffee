import chalk from 'chalk'
chalk.enabled = true

import { Command } from 'hterm-command'
import { createPrompt } from 'hterm-inquirer'

import Login from './login'

export default class KdIo extends Command

  @name_ = 'kd-io'

  run_: (stdin, stdout) ->
    [subcommand] = @argv_._ # UGLY!

    switch subcommand
      when 'login' then @runLogin stdin, stdout
      else stdout.write "unknown kd-io command: #{subcommand}"


  runLogin: (stdin, stdout) ->

    prompt = createPrompt { term: @io_.terminal_ }

    prompt([
      type: 'input'
      name: 'username'
      message: 'Username or email'
    ,
      type: 'password'
      name: 'password'
      message: 'Password'
    ]).then (answers) =>
      console.log {answers}
      stdout.write chalk.bold.green 'answers: '
      stdout.write JSON.stringify(answers, null, 2)
      stdout.write '\n\n'
      # @io_.pop()
