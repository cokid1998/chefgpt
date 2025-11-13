import { Button } from "@/components/ui/button";
import { useGetTest, useSetTest, useTest } from "@/store/testStore";
import { useGetPost } from "@/hooks/post/GET/useGetPost";

function App() {
  const test = useTest();
  const setTest = useSetTest();
  const getTest = useGetTest();

  const { data } = useGetPost();
  console.log(data);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>{test}</Button>
    </div>
  );
}

export default App;
