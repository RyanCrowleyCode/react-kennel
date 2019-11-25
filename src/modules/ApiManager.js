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
  },

  post(newObject, category) {
    return fetch(`${remoteURL}/${category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then(data => data.json())
  },

  update(editedObject, category) {
    return fetch(`${remoteURL}/${category}/${editedObject.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedObject)
    }).then(data => data.json());
  },

  // currently only works from employees with animals
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
      .then(result => result.json())
  }
  
}