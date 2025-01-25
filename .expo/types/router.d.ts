/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signin` | `/signin`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signin` | `/signin`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signin${`?${string}` | `#${string}` | ''}` | `/signin${`?${string}` | `#${string}` | ''}` | `${'/(auth)'}/signup${`?${string}` | `#${string}` | ''}` | `/signup${`?${string}` | `#${string}` | ''}` | `${'/(main)'}/home${`?${string}` | `#${string}` | ''}` | `/home${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signin` | `/signin`; params?: Router.UnknownInputParams; } | { pathname: `${'/(auth)'}/signup` | `/signup`; params?: Router.UnknownInputParams; } | { pathname: `${'/(main)'}/home` | `/home`; params?: Router.UnknownInputParams; };
    }
  }
}
