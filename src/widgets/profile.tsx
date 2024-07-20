import { useSessionQuery } from "@/entities/session";
import { SignOutButton } from "@/features/auth";

export function Profile() {
  const { data } = useSessionQuery();

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-row gap-2 justify-center items-center">
      {data?.email} <SignOutButton />
    </div>
  );
}
