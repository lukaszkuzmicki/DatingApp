import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  //to jest potrzebne zeby uzyskac dostep do form
  @ViewChild('editForm', {static: true}) editForm: NgForm;
  user: User;
  // this will prevent from "X"(exit) button -user will be promted 
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any){
    if(this.editForm.dirty){
      $event.returnValue = true;
    }
  }



  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService,
              private authService: AuthService ) { }

  ngOnInit() {
    this.route.data.subscribe(data =>{
      this.user = data['user'];
    });
  }

  // this.authService.decodedToken.nameid = USER ID 

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profile updated sucessfully');
      // reset the form this.user zeby wrocilo do tego co juz bylo
      this.editForm.reset(this.user);
    }, error => {
    this.alertify.error(error);
    });
  }
}
