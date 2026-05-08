import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,

  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,

  IonItem,
  IonLabel,
  IonList,
  IonThumbnail,
  IonAvatar,
  IonNote,

  IonChip,

  IonSegment,
  IonSegmentButton,

  IonProgressBar,
  IonRange,

  IonAccordion,
  IonAccordionGroup,

  IonFab,
  IonFabButton,
  IonIcon,
  IonPopover

} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { addIcons } from 'ionicons';

import {
  chevronForwardCircle,
  home,
  person,
  school,
  call,
  mail,
  location
} from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,

    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,

    IonItem,
    IonLabel,
    IonList,
    IonThumbnail,
    IonAvatar,
    IonNote,

    IonChip,

    IonSegment,
    IonSegmentButton,

    IonProgressBar,
    IonRange,

    IonAccordion,
    IonAccordionGroup,

    IonFab,
    IonFabButton,
    IonIcon,
    IonPopover
  ]
})
export class Tab1Page {

  constructor() {

    addIcons({
      chevronForwardCircle,
      home,
      person,
      school,
      call,
      mail,
      location
    });

  }

}