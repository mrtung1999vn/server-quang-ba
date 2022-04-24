'use strict';

/**
 *  don-vi-tinh controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::don-vi-tinh.don-vi-tinh', ({ strapi }) =>  ({
    // Method 1: Creating an entirely custom action
    async exampleAction(ctx) {
      try {
        ctx.body = 'ok';
      } catch (err) {
        ctx.body = err;
      }
    },
  
    // Method 2: Wrapping a core action (leaves core logic in place)
    async find(ctx) {
      // some custom logic here
      ctx.query = { ...ctx.query, local: 'en' }
      
      // Calling the default core action
      const { data, meta } = await super.find(ctx);
  
      // some more custom logic
      meta.date = Date.now()
  
      return { data, meta };
    },
  
    // Method 3: Replacing a core action
    async findOne(ctx) {
      const { id } = ctx.params;
      const { query } = ctx;
  
      const entity = await strapi.service('api::don-vi-tinh.don-vi-tinh').findOne(id, query);
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },

    async test(ctx){
        try {

            const { id } = ctx.params

            // const body = ctx.body

            const newData = await strapi.db.connection.context.raw(
                `select * from hang_san_xuats `
            );


            console.log( newData.rows )

            return newData.rows

        } catch (error) {
            console.log(error)
        }
    },
  }));
