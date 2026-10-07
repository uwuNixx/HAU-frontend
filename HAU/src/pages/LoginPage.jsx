import { useState } from 'react';

const INITIAL_FORM = {
  login: '',
  password: '',
};

export default function LoginPage({ onLogin }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isLoggedIn = onLogin({
      login: form.login.trim(),
      password: form.password,
    });

    if (!isLoggedIn) {
      setError('Неверный логин или пароль');
      return;
    }

    setError('');
    setForm(INITIAL_FORM);
  };

  return (
    <>
      <h1>Вход в систему</h1>

      <form className="app-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="login">Логин</label>
          <input
            id="login"
            name="login"
            type="text"
            required
            placeholder="Введите логин"
            value={form.login}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Введите пароль"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn-add" type="submit">
          Войти
        </button>
      </form>

      {error && <p className="form-error">{error}</p>}
    </>
  );
}
