export function initialize(appInstance) {
  generateGroups(appInstance);
}

function generateGroups(appInstance) {
  let store = appInstance.lookup('service:store');
  let serializer = store.serializerFor('group');
  let modelClass = store.modelFor('group');
  let groupsPayload = [
    {
      id: 1,
      name: 'Avengers',
      members: [
        {
          id: 3,
          name: 'Bruce Wayne',
          username: 'Batman',
          email: 'batman@gotham.com'
        },
        {
          id: 4,
          name: 'Clark Kent',
          username: 'Superman',
          email: 'superman@metropolis.com'
        }
      ]
    }
  ];
  groupsPayload.forEach((groupPayload)=> {
    let payload = serializer.normalize(modelClass, groupPayload);
    store.push(payload);
  });
}

export default {
  initialize
};
