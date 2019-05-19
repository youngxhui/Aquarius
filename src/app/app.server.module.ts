import {NgModule} from '@angular/core';
import {AppModule} from './app.module';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    AppModule, ServerModule, ModuleMapLoaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {
}
