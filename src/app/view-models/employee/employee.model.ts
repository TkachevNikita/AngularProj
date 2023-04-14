export class Employee {
  name: string
  department: string
  post: string

  constructor(userName: string, userDepartment: string, userPost: string) {
    this.name = userName;
    this.department = userDepartment;
    this.post = userPost;
  }
}

export const data = [
  {
    name: 'Иван Иванов',
    department: 'Отдел разработки',
    post: 'Junior разработчик'
  },

  {
    name: 'Василий Васильев',
    department: 'Отдел маркетинга',
    post: 'Маркетинговый менеджер',
  },

  {
    name: 'Пётр Петров',
    department: 'Отдел продаж',
    post: 'Аккаунт менеджер',
  },

  {
    name: 'Андрей Андреев',
    department: 'Отдел разработки',
    post: 'Тимлид',
  },

  {
    name: 'Соня Мирная',
    department: 'Отдел разработки',
    post: 'Дизайнер',
  },
]
