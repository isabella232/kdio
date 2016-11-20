import React from 'react'
import awsLogo from 'assets/aws.svg'
import azureLogo from 'assets/azure.svg'
import gcpLogo from 'assets/gcp.svg'
import doLogo from 'assets/digitalocean.svg'

icons =
  aws: awsLogo
  azure: azureLogo
  gcp: gcpLogo
  digitalocean: doLogo

export default ProviderIcon = ({ provider }) ->

  return <span />  unless icons[provider]

  <div style={{height: 'auto', width: '36px'}}>
    <img src={icons[provider]} style={{width: '100%'}} />
  </div>


