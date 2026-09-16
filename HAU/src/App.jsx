import { useState } from 'react';
import ApplicationsAPI from './api/ApplicationsAPI';
import ApplicationForm from './pages/ApplicationsForm';
import ApplicationTable from './pages/ApplicationsTable';
import './App.css';

export default function App() {
  const [applications, setApplications] = useState(() => [...ApplicationsAPI.all()]);

  const handleAdd = (data) => {
    ApplicationsAPI.add(data);
    setApplications([...ApplicationsAPI.all()]);   // новая ссылка → ререндер
  };

  const handleDelete = (id) => {
    ApplicationsAPI.delete(id);
    setApplications([...ApplicationsAPI.all()]);
  };

  return (
    <div className="app">
      <ApplicationForm onAdd={handleAdd} />
      <h1>Applications</h1>
      <ApplicationTable applications={applications} onDelete={handleDelete} />
    </div>
  );
}