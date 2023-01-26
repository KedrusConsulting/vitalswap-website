import { lazy, Suspense } from "react";

const Loadable = (Component) => () => {
  return (
    <>
      <Suspense fallback={"Loading..."}>
        <Component />
      </Suspense>
    </>
  );
};

export default Loadable;
