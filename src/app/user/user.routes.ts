import { Routes } from "@angular/router";
import { ProfileComponent } from "src/app/user/profile.component";
import { LoginComponent } from "src/app/user/login.component";

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent}
]