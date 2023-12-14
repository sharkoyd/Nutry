import './App.css'
import { PrimeReactProvider } from 'primereact/api';
import Index from './components/Index';

function App() {

  return (
    <>
      <div>
      <PrimeReactProvider>
            <Index />
        </PrimeReactProvider>
      </div>
    </>
  )
}

export default App
