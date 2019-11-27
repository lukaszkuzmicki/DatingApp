import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

// all guards need to be added to app module folder 
@Injectable()
export class PreventUnsachedChanges implements CanDeactivate<MemberEditComponent>{
    canDeactivate(component: MemberEditComponent){
        if(component.editForm.dirty){
            return confirm('Are you sure you want to continue? Save changes first! :)');
        }
        return true;
    }
}