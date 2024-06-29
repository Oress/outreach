import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@ua-com-outreach/campaigns",
  app: () => System.import("@ua-com-outreach/campaigns"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
