import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', pathMatch:'full', component: HomeComponent},
  { path: 'about-me' ,component: AboutComponent },
  { path: 'experiences' ,component: ExperiencesComponent } ,
  { path: 'skills' ,component: SkillsComponent }, 
  { path: 'portfolio' ,component: ProjectsComponent }, 
  { path: 'contact' ,component: ContactComponent }, 



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
