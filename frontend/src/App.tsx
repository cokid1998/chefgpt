import { Button } from "@/components/ui/button";
import ModalProvider from "@/provider/modalProvider";
import { useIsModal, useOpenModal } from "@/store/modalStore";

function App() {
  const openModal = useOpenModal();

  return (
    <ModalProvider>
      <Button onClick={() => openModal(<div>asdf</div>)}>1</Button>
    </ModalProvider>
  );
}

export default App;
