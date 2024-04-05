import { get } from './helpers/ApiRequestsHelper'
function getAll () {
  return get('/users/myrestaurants')
}

function getDetail (id) {
  let uri = '/restaurants/'
  uri = uri.concat(id)
  return get(uri)
}

export { getAll, getDetail }
