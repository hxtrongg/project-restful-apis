import Joi from 'joi';
/* 
* Tất cả các hàm ở đây chúng ta nên đặt tên giống với controller và services
*/
const getUserById = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const updateItem = {
    params: Joi.object().keys({
        id: Joi.number().required(), // muốn id là số, và bắt buộc điền.
      }),
    body: Joi.object().keys({
      name: Joi.string().optional(),
      email: Joi.string().optional(),
      password: Joi.string().optional()
    }),
  };

export default {
  getUserById
};