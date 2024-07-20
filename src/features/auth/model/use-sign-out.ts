import { useResetSession } from "@/entities/session";
import { authControllerSignOut } from "@/shared/api/generated";
import { ROUTER_KEYS } from "@/shared/constants/app-keys.const";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

export function useSignOut() {
  const router = useRouter();
  const resetSession = useResetSession();
  const signOutMutation = useMutation({
    mutationFn: authControllerSignOut,
    onSuccess() {
      router.replace(ROUTER_KEYS.SIGN_IN);
      resetSession();
    },
  });

  return {
    isLoading: signOutMutation.isPending,
    signOut: signOutMutation.mutate,
  };
}
