import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  public editGroup: FormGroup;
  public Profile;
  public User;

  constructor(private router: Router, private profilesService: ProfilesService, private formBuilder: FormBuilder, private usersService: UsersService) {

    this.editGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),
      profilepicurl: new FormControl()
    });

    this.usersService.getUser(usersService.UserId).subscribe((data) => {
      this.User = data;
      this.editGroup.get('username').setValue(this.User.userName);
    });

    this.profilesService.getProfileOfUser(usersService.UserId).subscribe((data) => {
      this.Profile = data;
      this.editGroup.get('firstname').setValue(this.Profile.firstName);
      this.editGroup.get('lastname').setValue(this.Profile.lastName);
      this.editGroup.get('email').setValue(this.Profile.email);
      this.editGroup.get('region').setValue(this.Profile.region);
      this.editGroup.get('phone').setValue(this.Profile.phoneNumber);
      this.editGroup.get('profilepicurl').setValue(this.Profile.profilePicUrl);

    });
  }

  ngOnInit(): void {
  }

  public edit() {
    //Get username and Password from logingroup
    var firstname = this.editGroup.get('firstname').value;
    var lastname = this.editGroup.get('lastname').value;
    var email = this.editGroup.get('email').value;
    var username = this.editGroup.get('username').value;
    var region = this.editGroup.get('region').value;
    var phone = this.editGroup.get('phone').value;
    var profilepicurl = this.editGroup.get('profilepicurl').value;

    var profile = new Profile(this.Profile.profileId, firstname, lastname, username, "", "", email, region, profilepicurl, phone);

    if (this.profilesService.validateUser(profile)) {
      this.profilesService.updateProfile(profile);
      this.router.navigate(['/profile']);
    }
  }
}