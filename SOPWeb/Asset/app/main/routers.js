//Define router to component

import HomeComponent from './home/HomeComponent.vue';


export const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Trang chủ' },
    component: HomeComponent
  },
  {
    path: "*",
    component: HomeComponent,
    meta: { title: '404 Page! Không tìm thấy trang' },
  }
];
