const remoteURL = "http://localhost:5002"

export default {
  get(id, category) {
    return fetch(`${remoteURL}/${category}/${id}`).then(result => result.json())
  },
  getAll(category) {
    return fetch(`${remoteURL}/${category}`).then(result => result.json())
  },

  delete(id, category) {
    return fetch(`http://localhost:5002/${category}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  }
}