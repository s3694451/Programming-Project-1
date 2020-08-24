import { Component, OnInit } from '@angular/core';
import { ProfilesService } from '../services/profiles.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Profile } from '../models/profile';


@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.scss']
})
export class RegisterProfileComponent implements OnInit {
  public registerGroup: FormGroup;


  constructor(private profilesService: ProfilesService, private formBuilder: FormBuilder) {
    this.registerGroup = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      username: new FormControl(),
      password: new FormControl(),
      repassword: new FormControl(),
      region: new FormControl(),
      phone: new FormControl(),

    });
  }

  ngOnInit(): void {
  }


  public register() {
    //Get username and Password from logingroup
    var firstname = this.registerGroup.get('firstname').value;
    var lastname = this.registerGroup.get('lastname').value;
    var email = this.registerGroup.get('email').value;
    var username = this.registerGroup.get('username').value;
    var password = this.registerGroup.get('password').value;
    var repassword = this.registerGroup.get('repassword').value;
    var region = this.registerGroup.get('region').value;
    var phone = this.registerGroup.get('phone').value;

    //Debug to check, NOT SECURE

    //DO ERROR CHECKING
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(username);
    console.log(password);
    console.log(repassword);
    console.log(region);
    console.log(phone);


    if (password == repassword) {
      var profile = new Profile(firstname, lastname, username, password, email, region);
      this.profilesService.createProfile(profile);
    }

    

   

  }
}