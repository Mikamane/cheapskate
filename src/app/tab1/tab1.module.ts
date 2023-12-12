import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Card1ComponentModule } from '../Components/card1/card1.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Card1ComponentModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {}
