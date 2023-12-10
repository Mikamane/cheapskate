import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Card1ComponentModule } from '../Components/card1/card1.module';
import { Card2ComponentModule } from '../Components/card2/card2.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Card1ComponentModule,
    Tab3PageRoutingModule,
    Card2ComponentModule,
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
