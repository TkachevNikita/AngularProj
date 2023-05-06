import { NgModule } from "@angular/core";
import { CabinetLayoutComponent } from "./cabinet-layout.component";
import { routing } from "./cabinet-layout.routing";
import { MenuComponent } from "../cabinet/components/menu/menu.component";
import { EmployeeComponent } from "../cabinet/components/employee/employee.component";
import { EmployeesPageComponent } from "./pages/employees/employees.page";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        CabinetLayoutComponent,
        MenuComponent,
        EmployeeComponent,
        EmployeesPageComponent
    ],
    imports: [
        routing,
        CommonModule
    ],
    providers: [],
  })
export class CabinetLayoutModule {

}
