import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ReferComponent } from './refer/refer.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {
  path:'',
  component:OrderComponent
  },
  {
    path:'order',
    component:OrderComponent
  },
  {
    path:'address',
    component:AddressComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'wallet',
    component:WalletComponent
  },
  {
    path:'refer',
    component:ReferComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
