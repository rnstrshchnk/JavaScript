const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
        {
          id: 11,
          name: "Отдел маркетинга",
          employees_count: 0,
        },
        {
          id: 12,
          name: "Отдел разработки",
          employees_count: 0,
        }
      ]
    }
  ]
const tree = function (enterprise, counter = "") {
    company.forEach(enterprise =>{
      console.log(`${counter}${counter === "" ? "" : " "}${enterprise.name} (${enterprise.users_count})`);
      if (enterprise.children){
        counter+= "--";
        tree(enterprise.children, counter);
        counter = counter.slice(0, -2);
      }
    })
  }
  tree(enterprises);