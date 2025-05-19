"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
// import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";
import { redirects } from '@wix/redirects';

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
  modules: {
    products,
    collections,
    // currentCart,
    redirects
  },
  auth: OAuthStrategy({
    clientId: '425407c1-b19b-46d7-babb-e3f01896d671',
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient;

export const WixClientContext = createContext<WixClient>(wixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  );
};