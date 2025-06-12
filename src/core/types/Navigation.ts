import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationOptions, StackNavigationProp } from "@react-navigation/stack";

export interface Props {
   route: RouteProp<ParamListBase, string>;
   navigation: StackNavigationProp<ParamListBase, string, undefined>;
   theme: ReactNavigation.Theme;
}

export type RootStackParam = {
   Home: undefined;
   Details: { movieId: number, }
}

export type SettingsNavigation = StackNavigationOptions | ((props: Props ) => StackNavigationOptions) | undefined;
