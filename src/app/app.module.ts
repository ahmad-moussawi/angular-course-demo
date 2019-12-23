import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ProductCommentsComponent } from './product-comments.component';
import { ProductsComponent } from './products.component';
import { ProductViewerComponent } from './product-viewer.component';
import { DemoComponent } from './demo.component';
import { MyHttpLogger } from './http.interceptor';
import { ToggleableComponent } from './toggleable.component';
import { EditableComponent } from './editable.component';
import { EditableDirective } from './editable.directive';
import { TrackableDirective } from './trackable.directive';
import { TrackableService } from './trackable.service';
import { FeatureDirective } from './feature.directive';
import { ImageEditorComponent } from './image-editor.component';
import { RotationPipe } from './rotation.pipe';
import { TestComponentComponent } from './test-component/test-component.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:postid',
    component: ProductViewerComponent,
  },
  {
    path: 'products/:postid/comments',
    component: ProductCommentsComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductViewerComponent,
    ProductCommentsComponent,
    DemoComponent,
    ToggleableComponent,
    EditableComponent,
    EditableDirective,
    TrackableDirective,
    FeatureDirective,
    ImageEditorComponent,
    RotationPipe,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpLogger,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
