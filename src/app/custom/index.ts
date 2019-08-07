import { IProjectComponent } from "../models/project.interface";
import { CheckboxComponent } from "./ant-design/checkbox/checkbox.component";
import { FormComponent } from "./ant-design/form/form.component";
import { TableComponent } from "./ant-design/table/table.component";
import { CalendarComponent } from "./ant-design/calendar/calendar.component";
import { PostsComponent } from "./posts/posts.component";


export const Components: IProjectComponent = {
    Checkbox: CheckboxComponent,
    Form: FormComponent,
    Table: TableComponent,
    Calendar: CalendarComponent,
    Posts: PostsComponent
};
