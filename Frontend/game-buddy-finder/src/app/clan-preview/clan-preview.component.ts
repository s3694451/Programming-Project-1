import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { ClanService } from '../services/clan.service';

@Component({
  selector: 'app-clan-preview',
  templateUrl: './clan-preview.component.html',
  styleUrls: ['./clan-preview.component.scss']
})
export class ClanPreviewComponent implements OnInit {

  public clan;
  public user;

  constructor(private usersService: UsersService, private clansService: ClanService) { }

  ngOnInit(): void {
    if (this.user == null) {
      this.clansService.getClan(this.usersService.UserId).subscribe((data) => {
        this.clan = data;
        console.log(this.usersService.UserId);
        console.log(data);
      })
      this.usersService.getUser(this.usersService.UserId).subscribe((data) => {/*this.clanService.OwnerUserId*/
        this.user = data;
        console.log(data);
      })
    }
  }

  public join(userId, clanId) {
    this.clansService.addUserToClan(userId, clanId).subscribe((data) => {
      console.log(data);
    })
    console.log(userId, clanId)
  }
}