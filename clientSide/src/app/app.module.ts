import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ToListingComponent } from './components/to-listing/to-listing.component';
// import { AddLimitComponent } from './components/add-limit/add-limit.component';
import { ToLookMyItemComponent } from './components/to-look-my-item/to-look-my-item.component';
import { AddHouersComponent } from './components/add-houers/add-houers.component';
import { RequestComponent } from './components/request/request.component';
import { ToolbarModule } from 'primeng/toolbar';
import { RouterModule } from '@angular/router';
import { route } from './routing';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { GetUsersComponent } from './components/get-users/get-users.component';
import { CitiesService } from './service/cities.service';
import { StreetsService } from './service/streets.service';
import { LimitService } from './service/limit.service';
import { UserCorrectComponent } from './components/user-correct/user-correct.component';
import { AgmCoreModule, AgmRectangle } from '@agm/core';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GMapModule } from 'primeng/gmap';
import { ConfirmFormComponent } from './components/confirm-form/confirm-form.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TabMenuModule } from 'primeng/tabmenu';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { InputSwitchModule } from 'primeng/inputswitch';
import { LessonsComponent } from './components/lessons/lessons.component';
import { ILearnComponent } from './components/ilearn/ilearn.component';
import { INotLearnComponent } from './components/inot-learn/inot-learn.component';
import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FieldsetModule } from 'primeng/fieldset';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { InputTextModule } from 'primeng/inputtext';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressBarModule } from 'primeng/progressbar';
import { RequestService } from './service/request.service'
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { from } from 'rxjs';
import { AboutComponent } from './components/about/about.component';
// import {ChartModule} from 'primeng/chart'
import { ChartModule } from 'primeng/chart';
import { SidebarModule } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { KeyFilterModule } from 'primeng/keyfilter';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ByMinComponent } from './components/by-min/by-min.component';
import { ByYearComponent } from './components/by-year/by-year.component';
import { ByLimitComponent } from './components/by-limit/by-limit.component';

import { AgmDirectionModule } from 'agm-direction'   // agm-direction


import { CheckboxModule } from 'primeng/checkbox';
import { AgmDrawingModule } from '@agm/drawing';
import { EventService } from './service/event.service';
import { CardModule } from 'primeng/card';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { DataViewModule } from 'primeng/dataview';

import { CommonModule } from '@angular/common';
import { ForgetComponent } from './components/forget/forget.component';
import { ByAreaComponent } from './components/by-area/by-area.component';
import { SaveLessonComponent } from './components/save-lesson/save-lesson.component';
import { StepsModule } from 'primeng/steps';
import { MenuItem } from 'primeng/api';
import { ConfirmForWaitingComponent } from './components/confirm-for-waiting/confirm-for-waiting.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { ListboxModule } from 'primeng/listbox';



// import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AddUserComponent,
    ToListingComponent,
    // AddLimitComponent,
    ToLookMyItemComponent,
    AddHouersComponent,
    RequestComponent,
    GetUsersComponent,
    UserCorrectComponent,
    ConfirmFormComponent,
    LessonsComponent,
    ILearnComponent,
    INotLearnComponent,
    AboutComponent,
    ByMinComponent,
    ByYearComponent,
    ByLimitComponent,
    ForgetComponent,
    ByAreaComponent,
    SaveLessonComponent,
    ConfirmForWaitingComponent,

    // TreeModule
  ],
  imports: [
    BrowserModule, InputTextModule, FullCalendarModule, RadioButtonModule, ProgressBarModule, ChartModule, SidebarModule, KeyFilterModule,
    CalendarModule, OverlayPanelModule, TooltipModule, SplitButtonModule, AgmDirectionModule, AgmDrawingModule, CardModule,
    FormsModule, CheckboxModule, TieredMenuModule, DropdownModule, TableModule, FieldsetModule,
    EditorModule, ButtonModule, CommonModule, StepsModule,
    DialogModule, ProgressSpinnerModule, DataViewModule,
    TabMenuModule, MessagesModule, MessageModule,
    BrowserAnimationsModule, ListboxModule,
    RouterModule, TriStateCheckboxModule,
    HttpClientModule, GooglePlaceModule, GMapModule, TabViewModule, ToastModule, InputSwitchModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAj13gY0dRy3LKgxfbOkCPaqq_twe8eR3k',
    //   libraries: ['places', 'geometry', 'drawing']
    // }),

    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'your key',
      libraries: ['drawing']

    }),
    RouterModule.forRoot(route)
  ],

  providers: [UserService, CitiesService, StreetsService, LimitService, RequestService, EventService],
  bootstrap: [AppComponent]

})
export class AppModule { }
