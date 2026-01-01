import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
    {path: "Home", component: Home},
    {path: "About", component: About},
    {path:"Contact", component: Contact}
]; 