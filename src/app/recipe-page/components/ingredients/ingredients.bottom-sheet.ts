import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Ingredient } from '../../types.interface';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'recipe-page-ingredients',
  imports: [MatButtonModule, MatIconModule, DragDropModule],
  templateUrl: './ingredients.bottom-sheet.html',
  styleUrl: './ingredients.bottom-sheet.scss',
})
export class IngredientsBottomSheet {
  private static readonly _PX_DRAG_THRESHOLD = 40;

  ingredients = inject<Ingredient[] | undefined>(MAT_BOTTOM_SHEET_DATA);

  constructor(private readonly _bottomSheetRef: MatBottomSheetRef<any>) {}

  onSheetDragEnd(event: CdkDragEnd) {
    const offset = event.distance.y;

    if (offset > IngredientsBottomSheet._PX_DRAG_THRESHOLD) this._bottomSheetRef.dismiss();
    else if (offset < -IngredientsBottomSheet._PX_DRAG_THRESHOLD)
      this._expandSheetToFullHeight(event);
    else event.source.reset();
  }

  onSubmit() {
    this._bottomSheetRef.dismiss();
  }

  private _expandSheetToFullHeight(event: CdkDragEnd) {
    const container = document.querySelector('.mat-bottom-sheet-container') as HTMLElement;
    event.source.reset();

    console.log('ho');
    container.style.height = '100dvh';
    container.style.minHeight = '100dvh';
  }
}
