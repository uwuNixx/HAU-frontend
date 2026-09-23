const ApplicationsAPI = {
    applications: [
      { id: 1, type: "Сантехника", comment: "Капает кран", status: "Не рассмотрено", dueDate: "27.09.2026", linkedDispatcher: "-"},
      { id: 2, type: "Электрика", comment: "Освещение между этажами 4 и 5 мигает", status: "Не рассмотрено", dueDate: "31.09.2026", linkedDispatcher: "-"},
      { id: 3, type: "Обслуживание лифтов", comment: "Не работают кнопки ручного открывания и закрывания дверей", status: "Выполнено", dueDate: "17.09.2026", linkedDispatcher: "147209"},
      { id: 4, type: "Сантехника", comment: "Нужно заменить гармошку под раковиной", status: "Выполнено", dueDate: "13.09.2026", linkedDispatcher: "147244"},
      { id: 5, type: "Сантехника", comment: "Не придумала", status: "Рассмотрено", dueDate: "23.09.2026", linkedDispatcher: "147337"},
      { id: 6, type: "Электрика", comment: "Не горит лампочка у подъезда номер 3", status: "Рассмотрено", dueDate: "28.09.2026", linkedDispatcher: "147613"},
    ],
    all: function () {
      return this.applications;
    },
    get: function (id) {
      const isApplication = (p) => p.id === id;
      return this.applications.find(isApplication);
    },
    delete: function (id) {
      const isNotDelApplication = (p) => p.id !== id;
      this.applications = this.applications.filter(isNotDelApplication);
      return true;
    },
    add: function (application) {
      if (!application.id)
      application = {
          ...application,
          id:
            this.applications.reduce((prev, current) => {
              return prev.id > current.id ? prev : current;
            }, 0).id + 1,
        };
      this.applications = [...this.applications, application];
      return application;
    },
    update: function (application) {
      this.get();
      this.applications.shift(application);
      return application;
    },
  };
  export default ApplicationsAPI;