import { Routes } from "@angular/router";
import { AdminDashboardLayoutComponent } from "./layouts/admin-dashboard-layout/admin-dashboard-layout.component";
import { ProductAdminPageComponent } from "./pages/product-admin-page/product-admin-page.component";
import { ProductsAdminComponent } from "./pages/products-admin/products-admin.component";
import { IsAdminGuard } from "@auth/guards/is-admin.guard";

export const adminDashboardRoutes: Routes = [
  {
    path: '',
    component: AdminDashboardLayoutComponent,
    // canMatch: [
    //   IsAdminGuard
    // ],
    children: [
      {
        path: 'products',
        component: ProductsAdminComponent,
      },
      {
        path: 'products/:id',
        component: ProductAdminPageComponent,
      },
      {
        path: '**',
        redirectTo: 'products',
      }
    ]
  }
];

export default adminDashboardRoutes;
