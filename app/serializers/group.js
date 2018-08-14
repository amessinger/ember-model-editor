import ApplicationSerializer from './application';
import DS from 'ember-data';

const {
  EmbeddedRecordsMixin
} = DS;

export default ApplicationSerializer.extend(EmbeddedRecordsMixin, {
  attrs: {
    members: { embedded: 'always' }
  }
});
