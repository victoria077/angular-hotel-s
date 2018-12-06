import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule } from '@angular/material';


@NgModule(
    {
        imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule],
        exports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatTabsModule]
    }
)

export class MaterialModule {}