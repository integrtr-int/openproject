import {Component, Input} from "@angular/core";
import {enterpriseEditionUrl} from "core-app/globals/constants.const";
import {I18nService} from "core-app/modules/common/i18n/i18n.service";

@Component({
  selector: 'enterprise-banner',
  styleUrls: ['./enterprise-banner.component.sass'],
  template: `
    <span></span>
  `
})
export class EnterpriseBannerComponent {
  @Input() public leftMargin:boolean = false;
  @Input() public textMessage:string;
  @Input() public linkMessage:string;
  @Input() public opReferrer:string;

  public text:any = {
    enterpriseFeature: this.I18n.t('js.upsale.ee_only'),
  };

  constructor(protected I18n:I18nService) {
  }

  public eeLink() {
    if (this.opReferrer) {
      return enterpriseEditionUrl + '&op_referrer=' + this.opReferrer;
    } else {
      return enterpriseEditionUrl;
    }
  }
}
