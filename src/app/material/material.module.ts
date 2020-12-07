import { NgModule } from '@angular/core';
/*
import {MatNativeDateModule,MatSnackBarModule,
  MatIconModule,MatDialogModule, MatButtonModule,
  MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatBadgeModule,
  MatCheckboxModule, MatToolbarModule,MatCard, MatCardModule,MatFormField, MatMenuModule,
  MatFormFieldModule, MatProgressSpinnerModule, MatInputModule,MatSlideToggleModule, MatChipsModule, MatAutocompleteModule,
  MatTooltipModule, MatTreeModule, MatButtonToggleModule, MAT_HAMMER_OPTIONS, MatStepperModule, MatBottomSheetModule
  } from  '@angular/material';
  */
import { MatSlideToggleModule } from '@angular/material';
import { MatChipsModule } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';
import { MatTreeModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material';
import { MatStepperModule } from '@angular/material';
import { MatBottomSheetModule } from '@angular/material';

import { MatNativeDateModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatTableModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatSortModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { MatBadgeModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { MatExpansionModule } from '@angular/material/expansion';

import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRippleModule } from '@angular/material/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';



@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatRadioModule, MatListModule, MatExpansionModule,
    MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule, MatBadgeModule,
    MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatTableModule, MatCheckboxModule,
    MatToolbarModule, MatCardModule, MatFormFieldModule, MatSidenavModule, MatMenuModule,
    MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, DragDropModule, MatRippleModule, MatChipsModule, MatAutocompleteModule,
    MatTooltipModule, ScrollingModule, MatTreeModule, CdkTreeModule, MatButtonToggleModule, MatStepperModule,
    MatBottomSheetModule, CdkTableModule
  ],
  exports: [
    MatTabsModule, MatDividerModule, MatSliderModule, MatSelectModule, MatSidenavModule, MatListModule, MatExpansionModule,
    MatRadioModule, MatNativeDateModule, MatDatepickerModule, MatSnackBarModule, MatIconModule, MatDialogModule,
    MatProgressSpinnerModule, MatButtonModule, MatSortModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatTableModule, MatFormFieldModule, MatBadgeModule, MatMenuModule,
    MatProgressSpinnerModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule, DragDropModule,
    MatChipsModule, MatRippleModule, MatAutocompleteModule, MatTooltipModule, ScrollingModule, MatTreeModule,
    CdkTreeModule, MatButtonToggleModule, MatStepperModule,
    MatBottomSheetModule, CdkTableModule
  ],
})
export class MaterialModule { }
