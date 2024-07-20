import { authControllerSignIn } from "@/shared/api/generated";
import { ROUTER_KEYS } from "@/shared/constants/app-keys.const";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignInForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useMutation({
    mutationFn: authControllerSignIn,
    onSuccess() {
      router.push(ROUTER_KEYS.HOME);
    },
  });

  const errorMessage = signInMutation.error ? "Sign In failed" : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => signInMutation.mutate(data)),
    isLoading: signInMutation.isPending,
    errorMessage
  };
}
