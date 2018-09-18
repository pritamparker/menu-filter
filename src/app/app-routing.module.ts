import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui/ui.component';
const appRoutes: Routes = [
    { path: '', component: UiComponent, pathMatch: 'full' },
    { path: 'home', component: UiComponent, pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
