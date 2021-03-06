import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ProfilesService } from '../services/profiles.service';
import { FriendService } from '../services/friend.service'
import { InterestService } from '../services/interest.service';
import { ClanService } from '../services/clan.service';
import { MessagesService } from '../services/message.service';
import { User } from '../models/user'
import { Message } from '../models/message'
import { Profile } from '../models/profile'
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.scss']
})
export class ViewProfileComponent implements OnInit {

  public user;
  public profile;
  public friends;
  public interests;
  public clanView;

  public users = Array<User>();
  public messages = Array<Message>();

  constructor(private router: Router, public usersService: UsersService, private clansService: ClanService, private messageService: MessagesService, private profilesService: ProfilesService, private friendService: FriendService, private interestService: InterestService) { }

  ngOnInit(): void {
    document.body.classList.add('bg');
    if (this.user == null) {
      this.user = this.usersService.UserView;
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {
        this.user = data;
      })
      this.profilesService.getProfileOfUser(this.usersService.UserId).subscribe((data) => {
        this.profile = data;
      })

      this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
        this.friends = data;
      });
      this.interestService.getInterestsOfUser(this.usersService.UserId).subscribe((data) => {
        this.interests = data;
      })
      this.clansService.getClansOfUser(this.usersService.UserId).subscribe((data) => {
        this.clanView = data;
      })
    }
  }
  public removeFriend(userId1, userId2, username) {
    if (confirm("Are you sure to delete " + username)) {
      this.friendService.removeFriend(userId1, userId2).subscribe((data) => {
        this.friendService.getFriendsOfUser(this.usersService.UserId).subscribe((data) => {
          this.friends = data;
        });
      })
    }
  }

  public viewFriend(friend) {
    this.usersService.searchFriend(friend.userName);
  }

  public viewClan(clan) {
    this.clansService.currentClan = clan;
    this.router.navigate(['/clanpreview'])
  }
}
