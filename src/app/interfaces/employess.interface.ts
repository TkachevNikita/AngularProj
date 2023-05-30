export interface IEmployee {
    name: string,
    surname: string,
    age: number,
    profession: string,
    salary: number
    department: string;
    role?: string;
    id: number;
    isAuth?: boolean;
}
