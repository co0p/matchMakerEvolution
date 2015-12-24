export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'pages/DashboardPage', nav: true, title: 'Dashboard' },
      { route: 'users',  name: 'users', moduleId: 'pages/UsersPage', nav: true, title: 'Users' },
      { route: 'settings', name: 'settings', moduleId: 'pages/SettingsPage', nav: true, title: 'Settings' }
    ]);

    this.router = router;
  }
}
