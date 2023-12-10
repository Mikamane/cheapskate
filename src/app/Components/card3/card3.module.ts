import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card3Component } from '../card3/card3.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Card3Component],
  exports: [Card3Component]
})
export class Card3ComponentModule {}
