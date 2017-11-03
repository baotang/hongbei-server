import Router from 'koa-router';

import {prepay} from '../../controllers/client/pay'
let router = new Router();

router.post('/',async (ctx)=>{
   let {_id} = ctx.request.body;
   let res = await prepay({
        openid:'o2HwL0epw5i5Jr4tKCJaOi6DIDGk',
        orderId:'20150806125346',
        desc:'...desc...',
        totalPrice:566,
        spbill_create_ip:ctx.request.ip
   });
   ctx.body = {
       _id,
       res
   }
})

export default router;