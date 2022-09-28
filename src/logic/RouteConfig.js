const RouteConfig = [
  {
    path: "/sandwiches",
    component: "aa",
  },
  {
    path: "/tacos",
    component: "aa",
    routes: [
      {
        path: "/tacos/bus",
        component: "aa",
      },
      {
        path: "/tacos/cart",
        component: "aa",
      },
    ],
  },
];
module.exports.RouteConfig = RouteConfig;
