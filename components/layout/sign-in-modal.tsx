import Modal from "@/components/shared/modal";
import { signIn } from "next-auth/react";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import { LoadingDots, Google } from "@/components/shared/icons";
import Image from "next/image";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <a href="https://precedent.dev">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            />
          </a>
          <h3 className="font-display text-2xl font-bold">Shpjegim</h3>
          <p className="text-sm text-gray-500 px-10 py-6">
            Ky aplikacion është projektuar për të ndihmuar në llogaritjen e notave të mesatares në bazë të orëve javore për secilë lëndë. Ju mund të futni vlerat e notave për secilën lëndë në tabelën e dhënë. Aplikacioni do të llogarisë totalin e notave duke marrë parasysh notën, orët javore dhe totalin e orëve javore për secilën lëndë. Më pas, do të kthehet mesatarja e përgjithshme duke përdorur formulën: (nota * orët javore * 35) / totali i orëve javore. Kjo ju ndihmon të keni një parashikim të mesatarës së pritur në bazë të të dhënave të futura.
          </p>
        </div>

      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
