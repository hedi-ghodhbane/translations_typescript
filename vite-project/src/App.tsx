import en from './lang/en.json';
import { IntlProvider } from 'react-intl';
import { Counter } from './Counter';
import { flattenMessage } from './lang/flattenMessages';

const messages = {
  en
}

console.log(flattenMessage(messages.en));

function App() {
  return (
    <IntlProvider messages={flattenMessage(messages.en)} locale='en' defaultLocale='en'>
    <div className="w-screen h-screen flex bg-black text-white items-center justify-center">
      <Counter/>
    </div>
    </IntlProvider>
  )
}

export default App
