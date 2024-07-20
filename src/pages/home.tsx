import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-select-field";
import { UILink } from "@/shared/ui/ui-link";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { UIHeader } from "@/shared/ui/ui-header";
import { Profile } from "@/widgets";
import { ToggleBlockingButton } from "@/features/toggle-blocking";

export function HomePage() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <UIHeader right={<Profile />} />
      <div className="grid grid-cols-[200px_1fr]">
        <aside className="px-5 pt-10">
          <ToggleBlockingButton />
        </aside>
        <main>
          Block list
        </main>
      </div>
    </div>
  );
}
