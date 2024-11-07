// Yeha Pr kuch bhi aa skta hai (Dynamic route)

import { useRouter } from "next/router";

const dynamicUser = () => {
  const router = useRouter();
  const { query } = router;
  //   console.log(query.name);

  // console.log(router);
  return (
    <>
      {" "}
      <h1>Hello from {query.username} !! This is the Dynamic Page .. </h1>{" "}
    </>
  );
};

export default dynamicUser;

// Whatever will be the name of ["x"] inside this -> will come as query.x. This will retrieve dyanmic endpoint from teh url .
