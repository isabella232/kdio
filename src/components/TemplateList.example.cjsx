import Component from './TemplateList'

export { Component }

export name = 'TemplateList'

export description = """
`<TemplateList />` is responsible for rendering overview of a stack template.
"""

export props =
	templates: {
		"582700b3da367a76404ec551": {
		  id: "582700b3da367a76404ec551"
		  title: "Stack 01"
		  accessLevel: "private"
		  provider: "gcp"
		  machineCount: 1
		  nickname: 'umut'
		  instances: {}
		  clones: {}
		},
		"582700b3da367a76404ec552": {
		  id: "582700b3da367a76404ec552"
		  title: "Stack 100"
		  accessLevel: "public"
		  provider: "digitalocean"
		  machineCount: 1
		  nickname: 'mahmut'
		  instances: {}
		  clones: {}
		}
	}


