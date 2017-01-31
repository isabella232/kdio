export default contents = [
    title: 'The one-liner'
    text: '
      Paste that at a Terminal prompt. The script explains what it will do and
      then prompts before it does it.
    '
    lines: [
      ':❯ brew install kd'
      ':❯ sudo kd daemon start'
    ]
  ,
    title: 'kd init'
    text: '
      kd init will assist you by asking simple questions about your stack. Your
      kd.yml file will be ready for you with some sensible defaults once you are
      done with questions.
    '
    lines: [
      ':❯ kd init'
      'This utility will walk you through creating a package.json file.'
      'It only covers the most common items, and tries to guess sensible defaults.'
      ''
      'See `npm help json` for definitive documentation on these fields and '
      'exactly what they do.'
      ''
      'Use `npm install —save` afterwards to install a package and save it as a '
      'dependency in the package.json file.'
      ''
      'Press ^C at any time to quit.'
    ]
  ,
    title: 'Creating a stack template'
    text: [
      "To start developing with kd you first need a stack script aka kd.yml."
      '''
      That’s how kd will know how it will provision a development environment for
      you. This includes the VM(s) you need, the installed packages & tools on
      each VM and the network configuration you wish to setup (ex: Virtual Private
      Cloud).
      '''
      '''
      Stack script is where you describe your dev environment using Terraform. kd
      supports everything Terraform supports. Your Stack can be a simple single VM
      where all your code is, it can be more than a VM, or it can be a one or more
      VMs with ready setup packages and integration with third parties.
      '''
      '''
      Stack Scripts are written in YAML format, here is how to convert Terraform
      script to YAML. It is very easy.
      '''
    ]
    lines: [
      "name: 'my-first-stack'"
      "provider:"
      "  aws:"
      "    access_key: ‘${var.aws_access_key}’"
      "    secret_key: ‘${var.aws_secret_key}’"
      "resource:"
      "  aws_instance:"
      "    example-instance:"
      "      instance_type: t2.nano"
      "      tags:"
      "        Name: ‘my-first-stack/example-instance’"
      "      # on user_data section we will write bash"
      "      # and configure our VM"
      "      user_data: |-"
      "        echo “hello world!” >> /helloworld.txt"
    ]
  ,
    title: 'Creating a credential'
    text: [
      '''
      In order to deploy your environment to a cloud provider, kd requires a
      credential for a particular cloud provider.
      '''
      '''
      Once you are done writing your stack script, next thing you need to do is to
      create a credential. This is how kd communicates with a cloud provider to
      get your environment ready using your Stack Script. This is where kd shines.
      Changing a cloud provider for your environment is just creating a new
      credential and building a new stack with your already existing stack script.
      '''
      '''
      kd credential create is used to create a credential for a provider.
      '''
    ]
  ]
