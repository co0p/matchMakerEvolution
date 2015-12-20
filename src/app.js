export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'pages/DashboardPage', nav: true, title: 'Dashboard' },
      { route: 'settings', name: 'settings', moduleId: 'pages/SettingsPage', nav: true, title: 'Settings' },
      { route: 'users',  name: 'users', moduleId: 'pages/UsersPage', nav: true, title: 'Users' }
    ]);

    this.router = router;
  }
}
