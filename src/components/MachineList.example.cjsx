import Component from './MachineList'

export { Component }

export name = 'MachineList'

export description = """
`<MachineList />` is responsible for rendering overview of a stack template.
"""

export props =
  machines: [
    {
      'label':'aws-instance'
      'provider':'aws'
      'image':'ami-cf35f3a4'
      'instance_type':'t2.nano'
    }
    {
      'label':'aws-instance2'
      'provider':'aws'
      'image':'ami-cf35f3a4'
      'instance_type':'t2.nano'
    }
  ]
