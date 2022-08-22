import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { UserMessageComponent } from './user-message/user-message.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversationThreadComponent,
    UserMessageComponent,
    SenderMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
