import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useStateContext } from './context';
import { HomePage } from './routes/routes.js';
import { useEffect } from 'react';
function App() {
  const value = useStateContext();

  const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('[data-section]');
    console.log(window.innerHeight / 1.5);
    const scrollReveal = function () {
      for (let i = 0; i < sections.length; i++) {
        if (
          sections[i].getBoundingClientRect().top <
          window.innerHeight / 1.5
        ) {
          sections[i].classList.add('active');
        } else {
          sections[i].classList.remove('active');
        }
      }
    };
    scrollReveal();

    addEventOnElem(window, 'scroll', scrollReveal);
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
