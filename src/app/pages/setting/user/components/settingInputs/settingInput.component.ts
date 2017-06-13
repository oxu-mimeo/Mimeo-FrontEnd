import { Component } from "@angular/core";
import { FormGroup,AbstractControl,FormBuilder,Validators } from "@angular/forms";
// import { EmailValidator,EqualPasswordsValidator } from "../../../../../theme/validators";
import { NgbModal,NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
// import { DefaultModal } from "../../../../common/modals/default-modal.component";

import { UserSettingModal } from "../../../settingModals/userModals/userModal.component";
import { BaseUserSettingService } from "./baseUserSetting.service";
@Component({
    selector:'user-setting-inpiuts',
    templateUrl:'./settingInput.html'
})

export class UserSettingInputsComponent{
    peopleTableData:Array<any>;
  constructor(private _settingInputService: BaseUserSettingService,private modalService:NgbModal) {
    this.peopleTableData = _settingInputService.peopleTableData;
  }

  editUser(result:any):void{
    console.log(result);
     const activeModal = this.modalService.open(UserSettingModal,{size:'lg', windowClass: 'dark-modal' });
     activeModal.componentInstance.modalHeader='编辑';
     activeModal.componentInstance.userInfo=result;
    //  activeModal.componentInstance.modalContent=editUserTemplate;
}
}


