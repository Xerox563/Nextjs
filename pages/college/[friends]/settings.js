// * route -> college/friends/settings
// * friends can be replaced with *(anything)->

import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { query } = router;
  console.log(router);

  return (
    <>
      <h2>This is settings Page for {query.friends} </h2>
    </>
  );
};

export default Page;
