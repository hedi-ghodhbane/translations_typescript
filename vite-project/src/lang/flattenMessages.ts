// import en from './en.json';

type MessageObject = {
    [key: string]: string | MessageObject;
  };
export function flattenMessage(messages: MessageObject, prefix: string = '') {
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
        'decrement': 'decrement'
    }
}

// Json Type / Index Signature / Recursion


// Mapped Object Type // type Keys = 'name' | 'age'


// Conditional Types //
// type Cond<T> = T extends number ? 'its-a-number' : 'its-not-a-number';
// type A = Cond<'2'>;



// Extends in a generic type => constraint
// type TailParams<T extends (...args:any)=>any> = T extends (arg0:any,...args:infer B) ? B : never;


