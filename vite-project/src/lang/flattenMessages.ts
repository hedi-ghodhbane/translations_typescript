
type MessageObject = {
    [key: string]: string | MessageObject;
  };
  
export function flattenMessage(messages: MessageObject, prefix: string = ''): MessageObject {
    return Object.keys(messages).reduce((result:Record<string,string>, key) => {
      const value = messages[key];
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'string') {
        result[fullKey] = value;
      } else {
        const nestedMessages = flattenMessage(value, fullKey);
        Object.assign(result, nestedMessages);
      }
      return result;
    }, {});
}