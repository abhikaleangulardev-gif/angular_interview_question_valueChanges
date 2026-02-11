import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'',redirectTo:'',pathMatch:'full'},
    {path:'',loadComponent:()=> import('./component/valuechanges-reactive-form/valuechanges-reactive-form').then((c)=>c.ValuechangesReactiveForm)}
];
