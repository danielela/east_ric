import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: false});