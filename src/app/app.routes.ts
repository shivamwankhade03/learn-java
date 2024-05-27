import { Routes } from '@angular/router';
import path from 'path';
import { CorejavaComponent } from './components/corejava/corejava.component';
import { Java8Component } from './components/java8/java8.component';
import { DesignPatternComponent } from './components/design-pattern/design-pattern.component';

export const routes: Routes = [
    { path:'core-java',component: CorejavaComponent},
    {path:'java-8',component:Java8Component},
    {path:'design-pattern',component:DesignPatternComponent}
];
