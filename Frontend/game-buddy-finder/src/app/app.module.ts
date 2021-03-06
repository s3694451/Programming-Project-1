import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { User } from './models/user';
import { UsersComponent } from './users/users.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginAttemptsComponent } from './login-attempts/login-attempts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { InboxComponent } from './inbox/inbox.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FriendRequestComponent } from './friend-request/friend-request.component';
import { FriendSearchComponent } from './friend-search/friend-search.component';
import { ClanPreviewComponent } from './clan-preview/clan-preview.component';
import { ViewClanComponent } from './view-clan/view-clan.component';
import { CreateClanComponent } from './create-clan/create-clan.component';
import { ChatComponent } from './chat/chat.component';
import { CommentComponent } from './comment/comment.component';
import { MatchmakingComponent } from './matchmaking/matchmaking.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    ForgotPasswordComponent,
    LoginPageComponent,
    LoginAttemptsComponent,
    HomePageComponent,
    RegisterProfileComponent,
    ViewProfileComponent,
    InboxComponent,
    SendMessageComponent,
    MessagePreviewComponent,
    EditProfileComponent,
    FriendRequestComponent,
    FriendSearchComponent,
    ClanPreviewComponent,
    ViewClanComponent,
    CreateClanComponent,
    ChatComponent,
    CommentComponent,
    MatchmakingComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
