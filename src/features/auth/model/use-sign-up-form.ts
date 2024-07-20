import { authControllerSignUp } from "@/shared/api/generated";
import { ROUTER_KEYS } from "@/shared/constants/app-keys.const";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export function useSignUpForm() {
  const router = useRouter();

  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useMutation({
    mutationFn: authControllerSignUp,
    onSuccess() {
      router.push(ROUTER_KEYS.HOME);
    },
  });

  const errorMessage = signUpMutation.error ? "Sign Up failed" : undefined;

  return {
    register,
    handleSubmit: handleSubmit((data) => signUpMutation.mutate(data)),
    isLoading: signUpMutation.isPending,
    errorMessage
  };
}
