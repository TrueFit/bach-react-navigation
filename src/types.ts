import {
  NavigationState,
  getStateFromPath as getStateFromPathDefault,
  getPathFromState as getPathFromStateDefault,
} from '@react-navigation/core';

export type IsFocused = {
  isFocused: boolean;
};

// copied from react navigation source because these ARE NOT exported
export type LinkingOptions = {
  /**
   * The prefixes are stripped from the URL before parsing them.
   * Usually they are the `scheme` + `host` (e.g. `myapp://chat?user=jane`)
   * Only applicable on Android and iOS.
   */
  prefixes: string[];
  /**
   * Config to fine-tune how to parse the path.
   *
   * Example:
   * ```js
   * {
   *   Chat: {
   *     path: 'chat/:author/:id',
   *     parse: { id: Number }
   *   }
   * }
   * ```
   */
  config?: Parameters<typeof getStateFromPathDefault>[1];
  /**
   * Custom function to parse the URL to a valid navigation state (advanced).
   * Only applicable on Web.
   */
  getStateFromPath?: typeof getStateFromPathDefault;
  /**
   * Custom function to conver the state object to a valid URL (advanced).
   */
  getPathFromState?: typeof getPathFromStateDefault;
};

export type LinkingResult = {
  getInitialState: () => Promise<
    | (Partial<Pick<NavigationState, 'index' | 'history'>> & {
        stale?: true | undefined;
        type?: string | undefined;
        routes: (Pick<import('@react-navigation/core').Route<string>, 'name' | 'params'> & {
          key?: string | undefined;
          state?: import('@react-navigation/core').InitialState | undefined;
        })[];
      } & {
        state?:
          | (Partial<Pick<NavigationState, 'index' | 'history'>> & {
              stale?: true | undefined;
              type?: string | undefined;
              routes: (Pick<import('@react-navigation/core').Route<string>, 'name' | 'params'> & {
                key?: string | undefined;
                state?: import('@react-navigation/core').InitialState | undefined;
              })[];
            } & unknown)
          | undefined;
      })
    | undefined
  >;
};

export type ScrollOptions = {
  y?: number;
  animated?: boolean;
};

export type ScrollableView =
  | {
      scrollToTop(): void;
    }
  | {
      scrollTo(options: ScrollOptions): void;
    }
  | {
      scrollToOffset(options: {offset?: number; animated?: boolean}): void;
    }
  | {
      scrollResponderScrollTo(options: ScrollOptions): void;
    };

export type ScrollableWrapper =
  | {
      getScrollResponder(): React.ReactNode;
    }
  | {
      getNode(): ScrollableView;
    }
  | ScrollableView;
