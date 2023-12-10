import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Card1Component } from './card1.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [Card1Component],
  exports: [Card1Component]
})
export class Card1ComponentModule {}
