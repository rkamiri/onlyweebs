import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {ChoiceComponent} from './choice/choice.component';
import {PlaybackComponent} from './playback/playback.component';
import {HomeComponent} from './home/home.component';
import {AnimeComponent} from './anime/anime.component';
import {HelpComponent} from './help/help.component';
import {ListsComponent} from './lists/lists.component';
import {RegisterComponent} from './register/register.component';
import {OnelistComponent} from './onelist/onelist.component';
import {AccountComponent} from './account/account.component';
import {AnimeResolver} from './anime/AnimeResolver';
import {CreateListComponent} from './create-list/create-list.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'animes/:id',
        component: AnimeComponent,
        resolve: {
            anime: AnimeResolver
        }},
    {path: 'lists', component: ListsComponent},
    {path: 'login', component: SigninComponent},
    {path: 'help', component: HelpComponent},
    {path: 'choice', component: ChoiceComponent},
    {path: 'playback', component: PlaybackComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent},
    {path: 'onelist', component: OnelistComponent},
    {path: 'create-list', component: CreateListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
