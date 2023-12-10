import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card2Component } from '../card2/card2.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Card2Component],
  exports: [Card2Component]
})
export class Card2ComponentModule {}
