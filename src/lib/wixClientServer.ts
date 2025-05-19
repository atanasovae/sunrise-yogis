import { OAuthStrategy, createClient } from "@wix/sdk";
import { collections, products } from "@wix/stores";
// import { orders } from "@wix/ecom";
import { cookies } from "next/headers";
// import { members } from '@wix/members';

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {}

  const wixClient = createClient({
    modules: {
      products,
      collections,
    //   orders,
    //   members,
    },
    auth: OAuthStrategy({
      clientId: '425407c1-b19b-46d7-babb-e3f01896d671',
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};