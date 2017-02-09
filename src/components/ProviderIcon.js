import React from 'react'
import awsLogo from 'assets/aws.svg'
import azureLogo from 'assets/azure.svg'
import googleLogo from 'assets/google.svg'
import doLogo from 'assets/digitalocean.svg'

icons = {
  aws: awsLogo,
  azure: azureLogo,
  google: googleLogo,
  digitalocean: doLogo,
}

const ProviderIcon = ({ provider, size = 30 }) => {
  if (!icons[provider]) {
    return <span />
  }

  return (
    <div style={{ height: size, width: 'auto' }}>
      <img src={icons[provider]} style={{ height: '100%' }} />
    </div>
  )
}

export default ProviderIcon
