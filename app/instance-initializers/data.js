export function initialize(appInstance) {
  let store = appInstance.lookup('service:store');
  let serializer = store.serializerFor('user');
  let modelClass = store.modelFor('user');
  let usersPayload = [
    {
      id: 1,
      name: 'Bruce Wayne',
      username: 'Batman',
      email: 'batman@gotham.com'
    },
    {
      id: 2,
      name: 'Clark Kent',
      username: 'Superman',
      email: 'superman@metropolis.com'
    }
  ];
  usersPayload.forEach((userPayload)=> {
    let user = serializer.normalize(modelClass, userPayload);
    store.push(user);
  });
}

export default {
  initialize
};
