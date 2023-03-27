
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


const nestedMessages = {
    'count': 'count',
    'buttons':{
        'increment': 'increment',
        'decrement':{
            'one':'one',
            'two':'two',
        }
    }
}
let a:Record<string,string> = {};
type Json = {
    [key:string]:string | Json;
}

type KeyPaths<T extends Json> = {
    [Key in keyof T] : T[Key] extends Json ?
        `${Key & string}.${KeyPaths<T[Key]> & string}`
        : Key;
}[keyof T]

type a = KeyPaths<typeof nestedMessages>;

