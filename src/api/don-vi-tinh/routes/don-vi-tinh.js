'use strict';

// /**
//  * don-vi-tinh router.
//  */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::don-vi-tinh.don-vi-tinh');

const customRouter = (innerRouter, extraRoutes = []) => {
    let routes;
    return {
      get prefix() {
        return innerRouter.prefix;
      },
      get routes() {
        if (!routes) routes = innerRouter.routes.concat(extraRoutes);
        return routes;
      },
    };
  };
  const myExtraRoutes = [
    {
      method: "GET",
      path: "/don-vi-tinh/key",
      handler: "don-vi-tinh.test",
    },
  ];

module.exports = customRouter(defaultRouter, myExtraRoutes);
