// Task 3**
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
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
// Для предприятия посчитать сумму всех сотрудников во всех отделах.
const task_3_1 = () =>{
enterprises.forEach(enterprise => {
  let count = 0;   
  enterprise.departments.forEach(department => {
      count+=department.employees_count;
  })
  console.log(enterprise.name + ' (' + count + ' сотрудников)');
  enterprise.departments.forEach(department => {
    console.log(department.name + ' ' +department.employees_count);
})
})}
task_3_1();

// 2. Написать функцию, которая будет принимать 1 аргумент 
// (id отдела или название отдела и возвращать название предприятия, к которому относится).
const getEnterpriceName = (id) =>{
 enterprises.forEach(enterprise =>{
   enterprise.departments.forEach(department => {
      if (department.id===id){
        console.log(enterprise.name);
      }
   })
  })
}
getEnterpriceName(7);

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
const addEnterprise = (new_enterprise) =>{
  enterprises.push({name: new_enterprise});
  console.log(enterprises);
   }
//addEnterprise('Предприятие 4');

// 4. Написать функцию, которая будет добавлять отдел в предприятие. 
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
const addDepartment = (id, new_department) =>{
  enterprises.forEach(enterprise =>{
    if (enterprise.id===id){
      console.log(enterprise.name);
       enterprise.departments.push({name: new_department});
       console.log(enterprise.departments);
  }})
 }
addDepartment(1, 'Бухгалтерия');

// 5. Написать функцию для редактирования названия предприятия. 
// Принимает в качестве аргумента id предприятия и новое имя предприятия.
const editEnterprise = (id, new_enterpriseName) => {
  enterprises.forEach(enterprise =>{
    if (enterprise.id===id){
      console.log(enterprise.name);
      enterprise.name = new_enterpriseName;
       console.log(enterprise.name);
  }})
}
editEnterprise(5, 'Предприятие 9');

// 6. Написать функцию для редактирования названия отдела. 
// Принимает в качестве аргумента id отдела и новое имя отдела.
const editDepartment = (id, new_departmentName) =>{
  enterprises.forEach(enterprise =>{
    enterprise.departments.forEach(department => {
       if (department.id===id){
         console.log(department.name);
         department.name = new_departmentName;
         console.log(department.name);
       }
    })
   })
 }
 editDepartment(7, 'Отдел аналитики');

 // 7. Написать функцию для удаления предприятия. 
 // В качестве аргумента принимает id предприятия.
 const deleteEnterprise = (id) => { 
  enterprises.forEach((enterprise, index) =>{
     if(enterprise.id===id){
      console.log(enterprises[index]);
      enterprises.splice(index, 1);
     }
   })  
 }

 deleteEnterprise(1);

 // 8. Написать функцию для удаления отдела. 
 // В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
 const deleteDepartment = (id) => { 
  enterprises.forEach(enterprise =>{
    enterprise.departments.forEach((department, index) =>{
     if(department.id===id && department.employees_count===0){
      console.log("Удален отдел №  " + department.id);
      enterprise.departments.splice(index, 1);
     } 
    })
  })  
 }

 deleteDepartment(10);

 // 9. Написать функцию для переноса сотрудников между отделами одного предприятия. 
 // В качестве аргумента принимает два значения: 
 // id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
 const moveEmployees = (id1, id2) => { 
   let count = 0;
  enterprises.forEach(enterprise =>{
    enterprise.departments.forEach(department =>{
     if(department.id==id1){
      count = department.employees_count;
      console.log(count);
     } 
    })
    enterprise.departments.forEach(department =>{
      if(department.id==id2){
       department.employees_count+= count;
       console.log(department.employees_count);
      } 
     })
  })  
 }

 moveEmployees(7,8);

 const company = [
  {
    id: 1,
    name: "Компания",
    parent: null,
    users_count: 10,
    children: [
      {
        id: 2,
        name: "Отдел тестирования",
        parent: 1,
        users_count: 7,
        children: [
          {
            id: 2,
            name: "Тестирование Web",
            parent: 2,
            users_count: 5,
          },
          {
            id: 3,
            name: "Тестирование Mobile",
            parent: 2,
            users_count: 0,
          },
        ]
      },
      {
        id: 4,
        name: "Отдел маркетинга",
        parent: 1,
        users_count: 30,
      },
      {
        id: 5,
        name: "Администрация",
        parent: 1,
        users_count: 25,
        children: [
          {
            id: 6,
            name: "Бухгалтерия",
            parent: 5,
            users_count: 10,
          },
          {
            id: 7,
            name: "Менеджмент",
            parent: 5,
            users_count: 15,
            children: [
              {
                id: 8,
                name: "Подраздел менеджмента 1",
                parent: 7,
                users_count: 5,
              },
              {
                id: 9,
                name: "Подраздел менеджмента 2",
                parent: 7,
                users_count: 10,
              }
            ]
          },
          {
            id: 10,
           	name: "HR",
          	parent: 5,
            users_count: 1,
          }
        ]
      },
    ]
  }
]

const tree = () =>{
  company.forEach(enterprise =>{
    console.log(enterprise.name)
    enterprise.children.forEach(department =>{
      console.log('--' + department.name +' ' + department.users_count)
      department.children.forEach(minidepartment =>{
        console.log(minidepartment.name)
      })
    })
  })
}
//tree();