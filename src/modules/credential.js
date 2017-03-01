export const decorateCredential = (state, credential) => ({
  id: credential._id,
  title: credential.title,
  provider: credential.provider,
  accessLevel: credential.accessLevel,
  _data: credential
})

