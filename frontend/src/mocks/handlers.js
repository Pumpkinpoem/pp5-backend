import { rest } from "msw";

const baseURL = "https://cup-backend-3976f813200f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 14,
        username: "Andreas",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 14,
        profile_image:
          "https://res.cloudinary.com/deal48hya/image/upload/v1/media/images/Leonardo_Phoenix_A_rugged_Scandinavian_man_in_his_late_30s_wit_2_cb8alc",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
