import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeDetailsComponent } from './episode-details/episode-details.component';
import { ExportComponent } from './export/export.component';
import { 
  AuthGuardService as AuthGuard 
} from './service/auth-guard.service';
import { ProposeThemeComponent } from './add-theme/add-theme.component';
import { LoginComponent } from './login/login.component';
import { LinkThemesComponent } from './link-themes/link-themes.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PatronsListComponent } from "./patrons-list/patrons-list.component";
import { AdminGuardService as AdminGuard } from './service/admin-guard.service';
import { AuthErrorComponent } from './auth-error/auth-error.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import {PostEditComponent} from "./post-edit/post-edit.component";
import {PostComponent} from "./post/post.component";


const routes: Routes = [
  { path: "add-user", component: AddUserComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "auth-error", component: AuthErrorComponent, canActivate: [AuthGuard] },
  { path: 'export/:id', component: ExportComponent, canActivate: [AuthGuard] },
  { path: 'user-management', component: UserManagementComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "add-theme", component: ProposeThemeComponent },
  { path: 'list', component: EpisodeListComponent, canActivate: [AuthGuard] },
  { path: 'link-themes/:id', component: LinkThemesComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'episode-details/:id', component: EpisodeDetailsComponent, canActivate: [AuthGuard] },
  { path: 'patrons-list', component: PatronsListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomePageComponent },
  {path: 'post-details/:id', component: PostDetailsComponent},
  {path: 'post-edit/:id', component: PostEditComponent, canActivate: [AuthGuard, AdminGuard] },
  {path: 'post', component: PostComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: '**', component: HomePageComponent },

]

export const routing = RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'});
