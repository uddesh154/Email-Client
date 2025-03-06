import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailResolverService } from './email-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { EmailFormComponent } from './email-form/email-form.component';

const route: Routes =[
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolverService
        }
      },
      {
        path: '',
        component: PlaceholderComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent,
    NotFoundComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    SharedModule,
    ReactiveFormsModule
  ]
})
export class InboxModule { }
