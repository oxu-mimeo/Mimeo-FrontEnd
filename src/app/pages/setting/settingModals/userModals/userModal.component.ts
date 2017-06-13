import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'user-setting-modal',
  styleUrls: [('./userModal.component.scss')],
  templateUrl: './userModal.component.html'
})

export class UserSettingModal implements OnInit{

    isAdd:boolean=true;
    userInfo:any;
    modalHeader:string;
    constructor(private activeModal:NgbActiveModal){

    }
    ngOnInit(){}

    closeModal(){
        this.activeModal.close();
    }
}