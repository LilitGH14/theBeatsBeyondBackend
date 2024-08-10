const ROUTES = {
  AUTH: [
    "/auth",
    {
      REGISTER: "/register",
      LOGIN: "/login",
    },
  ],
  SONGS: [
    "/songs",
    {
      DEFAULT: "/",
      DETAILS: "/:id",
      UPDATE: "/update",
      CATEGORY: "/category/:categoryId",
    },
  ],
  STORIES: [
    "/stories",
    {
      DEFAULT: "/",
      DETAILS: "/:id",
      CREATE: "/create",
      DELETE: "/delete",
      UPDATE: "/update",
    },
  ],
};
export default ROUTES;
