import { useState } from 'react';
import ApplicationsAPI from '../api/ApplicationsAPI';
import ApplicationForm from './ApplicationsForm';
import ApplicationTable from './ApplicationsTable';

export default function ApplicationsPage() {
  const [applications, setApplications] = useState(() => [...ApplicationsAPI.all()]);

  const handleAdd = (data) => {
    ApplicationsAPI.add(data);
    setApplications([...ApplicationsAPI.all()]);
  };

  const handleDelete = (id) => {
    ApplicationsAPI.delete(id);
    setApplications([...ApplicationsAPI.all()]);
  };

  return (
    <>
      <ApplicationForm onAdd={handleAdd} />
      <h1>Applications</h1>
      <ApplicationTable applications={applications} onDelete={handleDelete} />
    </>
  );
}
