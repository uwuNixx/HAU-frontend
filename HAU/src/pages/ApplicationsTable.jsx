export default function ApplicationsTable({ applications, onDelete }) {
  if (applications.length === 0) {
    return <p>Заявок пока нет</p>;
  }

  return (
    <table className="app-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Тип</th>
          <th>Комментарий</th>
          <th>Статус</th>
          <th>Срок</th>
          <th>Диспетчер</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => (
          <tr key={application.id}>
            <td>{application.id}</td>
            <td>{application.type}</td>
            <td>{application.comment}</td>
            <td>{application.status}</td>
            <td>{application.dueDate}</td>
            <td>{application.linkedDispatcher}</td>
            <td>
              <button
                className="btn-delete"
                type="button"
                onClick={() => onDelete(application.id)}
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

