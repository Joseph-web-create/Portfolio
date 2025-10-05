import Loading from "./components/ui/Loading";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("@/components/Index"));
function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Index />
      </Suspense>
    </>
  );
}

export default App;
