import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HorizontalBar from './components/layouts/horizontalBar/HorizontalBar';
import { Navigation } from './components/layouts/navigation/Navigation';
import { VerticalBar } from './components/layouts/verticalBar/VerticalBar';

function App() {

  return (
    <BrowserRouter>
      <section className="mainCtn">
        <header>
          <HorizontalBar></HorizontalBar>
        </header>
        <section className="ctnNavBody">
          <VerticalBar></VerticalBar>
          <Navigation />
        </section>

      </section>
    </BrowserRouter>
  );
}

export default App;
