
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Chatbot } from './components/Chatbot';

function App() {
  return (
    <MainLayout>
      <Home />
      <Chatbot />
    </MainLayout>
  )
}

export default App
