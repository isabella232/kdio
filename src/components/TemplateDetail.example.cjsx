import Component from './TemplateDetail'

export { Component }

export name = 'TemplateDetail'

export description = """
`<TemplateDetail />` is responsible for rendering overview of a stack template.
"""

export props =
  id: "582700b3da367a76404ec551"
  content: '''
    # Here is your stack preview
    # You can make advanced changes like modifying your VM,
    # installing packages, and running shell commands.

    provider:
      aws:
        access_key: &#39;${var.aws_access_key}&#39;
        secret_key: &#39;${var.aws_secret_key}&#39;
    resource:
      aws_instance:
        # this is the name of your VM
        aws-instance:
          # select your instance_type here: eg. c3.xlarge
          instance_type: t2.nano
          # select your ami (optional) eg. ami-xxxxx (it should be based on ubuntu 14.04)
          ami: &#39;&#39;
          # we will tag the instance here so you can identify it when you login to your AWS console
          tags:
            Name: &#39;${var.koding_user_username}-${var.koding_group_slug}&#39;
          # on user_data section we will write bash and configure our VM
          user_data: |-
            # let&#39;s create a file on your root folder:
            echo &quot;hello world!&quot; &gt;&gt; /helloworld.txt
            # please note: all commands under user_data will be run as root.
            # now add your credentials and save this stack.
            # once vm finishes building, you can see this file by typing
            # ls /
            #
            # for more information please click the link below &quot;Stack Script Docs&quot;
  '''
  description: '''

    You can write a readme for this stack template here.

    It will be displayed whenever a user attempts to build this stack.

    You can use markdown within the readme content.
  '''
