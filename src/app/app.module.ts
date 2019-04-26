import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TwoWayDataComponent} from './twowaydata.component';
import {MainComponent} from './main.component';
import {DestinationComponent} from './destination.component';
import {SourceComponent} from './source.component';

const appRoutes: Routes = [
    { path: 'twoway-data', component: TwoWayDataComponent},
    /*{ path: 'hero/:id',      component: HeroDetailComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    { path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
    },*/
    { path: '**', component: AppComponent }
];


@NgModule({
    declarations: [
        AppComponent,
        TwoWayDataComponent,
        MainComponent,
        DestinationComponent,
        SourceComponent
    ],
    imports: [
        BrowserModule, FormsModule, RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    providers: [],
    bootstrap: [MainComponent]
})
export class AppModule {
}
