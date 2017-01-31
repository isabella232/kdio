import React from 'react'
import awsLogo from 'assets/aws.svg'
import azureLogo from 'assets/azure.svg'
import googleLogo from 'assets/google.svg'
import doLogo from 'assets/digitalocean.svg'

icons =
  aws: awsLogo
  azure: azureLogo
  google: googleLogo
  digitalocean: doLogo

export default ProviderIcon = ({ provider, size = 30 }) ->

  return <span />  unless icons[provider]

  <div style={height: size, width: 'auto'}>
    <img src={icons[provider]} style={{height: '100%'}} />
  </div>
