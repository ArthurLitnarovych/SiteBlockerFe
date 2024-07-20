import { useSessionQuery } from "@/entities/session";
import { authControllerGetSessionInfo } from "@/shared/api/generated";
import { ROUTER_KEYS } from "@/shared/constants/app-keys.const";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { PropsWithChildren, ReactElement } from "react";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();
    const getSession = useSessionQuery();

    if (getSession.isLoading) return <UIPageSpinner />;

    if (getSession.isError) router.replace(ROUTER_KEYS.SIGN_IN);

    return <Component {...props} />;
  };
}
