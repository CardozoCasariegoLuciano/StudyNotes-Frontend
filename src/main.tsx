import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StudyNoteApp from './StudyNoteApp';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudyNoteApp />
    </BrowserRouter>
  </React.StrictMode>,
);
