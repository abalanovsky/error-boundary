import './App.css';
import {ErrorBoundary} from "./components/ErrorBoundary";
import Input from "./components/Input";


function App() {
  return (
          <ErrorBoundary>
              <Input/>
          </ErrorBoundary>
  );
}

export default App;
