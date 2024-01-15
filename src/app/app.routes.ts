import { Routes } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

export const routes: Routes = [
    {
        path:"login",
        component: TemplateDrivenComponent
    },
    {
        path:"register",
        component: ReactiveComponent
    }
];
