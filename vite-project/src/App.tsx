import en from './lang/en_v1.json';
import en_nested from './lang/en_v2.json';
import { IntlProvider } from 'react-intl';
import { Counter } from './Counter';
import { flattenMessage } from './lang/flattenMessages';

const messages = {
  en,
  en_nested
}
console.log(flattenMessage(messages.en_nested));

function App() {
  return (
    <IntlProvider messages={messages.en} locale='en' defaultLocale='en'>
    <div className="w-screen h-screen flex bg-black text-white items-center justify-center">
      <Counter/>
    </div>
    </IntlProvider>
  )
}

export default App
