import en from './en.json';

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




// Json Type / Index Signature / Recursion

type Json = {
    [key:string]: string | Json;
}

// Mapped Object Type //
 type Keys = 'name' | 'age'

// type Example = {
//     [key in Keys] : string;
// }

// Conditional Types //
type Cond<T> = T extends number ? 'its-a-number' : 'its-not-a-number';

// type A = Cond<'2'>;


// Extends in a generic type => constraint
// export type ExampleJson<T extends Json> = {
//    [Key in keyof T]:......
//  }

// type Foo = ExampleJson<number>
// ;


// Indexed access type
// type ExampleType = {
//     'count':'count',
//     'buttons':{
//         'increment':'increment',
//         'decrement':'decrement'
//     }
// }


const nestedMessages = {
    'count': 'count',
    'buttons':{
        'increment': 'increment',
        'decrement': 'decrement'
    }
}
// count  | buttons.increment | buttons.decrement

type KeyPaths<T extends Json> = {
    [Key in keyof T]: T[Key] extends Json ? `${Key & string}.${KeyPaths<T[Key]> & string}` : Key;
}[keyof T]


export type JsonKeys= KeyPaths<typeof en> ;