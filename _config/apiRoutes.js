const moduleName = 'ichat';
const moduleVersion = 'v1';
const urlBase = `/${moduleName}/${moduleVersion}`

export default {
  urlBase: urlBase,
  version: moduleVersion,
  conversations: `${urlBase}/conversations`,
  messages: `${urlBase}/messages`
}
