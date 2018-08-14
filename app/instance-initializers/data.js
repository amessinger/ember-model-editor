import User from '../models/user';
export function initialize(appInstance) {
  let store = appInstance.lookup('service:store');
  let serializer = store.serializerFor('user');
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
    // store.createRecord('user', userPayload);
    let user = serializer.normalize(User, userPayload);
    user.data.type = 'user'; // FIXME: this info should be in the modelClass "User"
    store.push(user);
  });
}

export default {
  initialize
};
