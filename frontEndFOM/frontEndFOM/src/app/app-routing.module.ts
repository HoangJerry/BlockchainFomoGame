import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitizensComponent } from './citizens/citizens.component';
import { GameDiceComponent } from './game/game-dice/game-dice.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { SiteLayoutComponent } from './site-layout/site-layout.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
    {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full',
    },
    {
        path:'',
        component: BaseLayoutComponent,
        children: [
            {
                path:'data',
                component: CitizensComponent,
            },
            {
                path:'faq',
                component: FaqComponent,
            }
        ]
    },
    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            {
                path:'home',
                component: HomeComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path:'dice',
                component: GameDiceComponent,
            },

            {
                path:':ref',
                component: HomeComponent,
            },
        ]
    },
    {
        path: '**',
        redirectTo:'/',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
