import { Component, OnDestroy, OnInit, AfterViewChecked } from '@angular/core';
import * as SignalR from '@aspnet/signalr';
import { env } from 'process';
import { ChatMessage } from '../models/chatmessage';
import { environment } from '../../environments/environment';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { ClanService } from '../services/clan.service';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked  {

  connection: SignalR.HubConnection;
  connectionUrl = environment.baseUrl + "chatHub";

  public chatGroup: FormGroup;

  public Messages: Array<ChatMessage>;
  public OnlineUsers: Array<string>;

  constructor(public usersService: UsersService, private profilesService: ProfilesService, public clansService: ClanService, private formBuilder: FormBuilder) {
    this.chatGroup = new FormGroup({
      message: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.connection = new SignalR.HubConnectionBuilder()
      .withUrl(this.connectionUrl)
      .build();

    this.Messages = new Array<ChatMessage>();
    this.OnlineUsers = new Array<string>();

    this.connection.on('ReceiveMessage', this.receiveMessage.bind(this));
    this.connection.on('Init', () => {
      var user = this.usersService.CurrentUser;
      this.connection.invoke("JoinChat", this.clansService.currentClan.clanId, user.userName);
    });

    this.connection.start();
  }

  ngOnDestroy(): void {
    this.connection.stop();
  }

  ngAfterViewChecked() {         
    var container = document.getElementById("chatLog");           
    container.scrollTop = container.scrollHeight;
  } 

  public addConnection(username) {
    this.OnlineUsers.push(username);
  }

  public removeConnection(username) {
    var index = this.OnlineUsers.findIndex(x => x == username);
    if (index != -1) {
      this.OnlineUsers.splice(index,1);
    }
  }

  public receiveMessage(message, sender) {
    var msg = new ChatMessage(sender, message);
    this.Messages = [...this.Messages, msg];
  }

  public sendMessage() {
    var message = this.chatGroup.get('message').value;
    if (message == null || message.length == 0) {
      return;
    }
    this.connection.invoke('SendMessage', message);
    this.chatGroup.reset();
  }
}
