import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// first match go there - ordering is important -> ** at the end 
export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    // dodajemy guarda to tego urla
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },

    {path: '**', redirectTo: '', pathMatch: 'full'}
];
