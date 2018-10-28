import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { DataService } from "./index";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [AppComponent],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
