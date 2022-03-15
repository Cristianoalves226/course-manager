import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Erro404Component } from "./component/erro404/erro404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent
    ],
    exports: [
        NavBarComponent
    ],
    imports: [
        RouterModule.forChild([{
            path: '**', component: Erro404Component
        }
    ]),
    ]
})

export class CoreModule {

}