
# makes sure bongo instance is injected into actions.
module.exports = bongoMiddleware = (bongoController) -> (store) -> (next) -> (action) ->

  return next action  unless action.bongo

  console.log {bongoController}

  remote = bongoController.getInstance()

  return next action  unless remote

  normalized =
    type: action.type
    payload: action.bongo(remote)

  return next(normalized)

