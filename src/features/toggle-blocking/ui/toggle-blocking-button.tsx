import { UIButton } from "@/shared/ui/ui-button";
import { useToggleBlocking } from "../model/use-toggle-blocking";

export function ToggleBlockingButton({}) {
  const { isBlockingEnabled, isLoading, toggleBlocking, isReady } =
    useToggleBlocking();

  if (!isReady) return null;

  return (
    <UIButton
      disabled={isLoading}
      onClick={toggleBlocking}
      variant={isBlockingEnabled ? "secondary" : "primary"}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UIButton>
  );
}
