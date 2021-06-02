import { Route, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserComponent } from './components/user/user.component';
import { ToLookMyItemComponent } from './components/to-look-my-item/to-look-my-item.component';
import { HomeComponent } from './components/home/home.component';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { RequestComponent } from './components/request/request.component';
import { UserCorrectComponent } from './components/user-correct/user-correct.component';
import { ToListingComponent } from './components/to-listing/to-listing.component';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
import { ILearnComponent } from './components/ilearn/ilearn.component';
import { INotLearnComponent } from './components/inot-learn/inot-learn.component';
import { AboutComponent } from './components/about/about.component';
import { ByMinComponent } from './components/by-min/by-min.component';
import { ForgetComponent } from './components/forget/forget.component';
import { SaveLessonComponent } from './components/save-lesson/save-lesson.component';
import { ClalimComponent } from './components/clalim/clalim.component';
import { ConfirmForWaitingComponent } from './components/confirm-for-waiting/confirm-for-waiting.component';
// import { AddLimitComponent } from './components/add-limit/add-limit.component';

export const route: Routes = [
    { path: "AddUser", component: AddUserComponent },
    //  children: [{path:"AddLimit",component:AddLimitComponent}]},

    { path: "home", component: HomeComponent, children: [{ path: "User", component: UserComponent }, { path: "AddUser", component: AddUserComponent }] },
    { path: '', redirectTo: 'home', pathMatch: "full" },
    {
        path: "User", component: UserComponent, children: [
            { path: "getUsers", component: GetUsersComponent },
            { path: "ToLookMyItem", component: ToLookMyItemComponent }
        ]
    },
    // { path: "getUsers", component: GetUsersComponent },
    { path: "Request", component: RequestComponent },
    { path: "MyItem", component: ToLookMyItemComponent },
    { path: "userCorrect", component: UserCorrectComponent },
    { path: "toListing", component: ToListingComponent },
    { path: "ILearn", component: ILearnComponent },
    { path: "INotLearn", component: INotLearnComponent },
    // {path:"AddLimit",component:AddLimitComponent},
    { path: "AddRequest", component: RequestComponent },
    { path: "about", component: AboutComponent },
    { path: "byMin", component: ByMinComponent },
    { path: "forget", component: ForgetComponent },
    { path: "getUsers", component: SaveLessonComponent },
    { path: 'clalim', component: ClalimComponent },



    { path: 'ConfirmForm/:tId/:sId/:cl/:wi', component: ConfirmFormComponent },
    { path: 'ConfirmForWaiting/:tId/:sId/:cl/:wi', component: ConfirmForWaitingComponent },





]