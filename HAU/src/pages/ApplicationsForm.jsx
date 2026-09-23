import { useState } from 'react';

const INITIAL_FORM = {
  type: 'Сантехника',
  comment: '',
  dueDate: '',
};

const toDisplayDate = (isoDate) => {
  const [year, month, day] = isoDate.split('-');
  return `${day}.${month}.${year}`;
};

export default function ApplicationsForm({ onAdd }) {
  const [form, setForm] = useState(INITIAL_FORM);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAdd({
      type: form.type,
      comment: form.comment.trim(),
      status: 'Не рассмотрено',
      dueDate: toDisplayDate(form.dueDate),
      linkedDispatcher: '-',
    });

    setForm(INITIAL_FORM);
  };

  return (
    <form className="app-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="type">Тип заявки</label>
        <select id="type" name="type" value={form.type} onChange={handleChange}>
          <option value="Сантехника">Сантехника</option>
          <option value="Электрика">Электрика</option>
          <option value="Обслуживание лифтов">Обслуживание лифтов</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="comment">Комментарий</label>
        <input
          id="comment"
          name="comment"
          type="text"
          required
          placeholder="Что случилось?"
          value={form.comment}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label htmlFor="dueDate">Срок</label>
        <input
          id="dueDate"
          name="dueDate"
          type="date"
          required
          value={form.dueDate}
          onChange={handleChange}
        />
      </div>

      <button className="btn-add" type="submit">
        Добавить
      </button>
    </form>
  );
}

