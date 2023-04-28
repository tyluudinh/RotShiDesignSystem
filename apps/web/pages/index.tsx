import { UIKitProvider, light, dark, Text, Loading } from "@rotshi/uikit";
import {
 ThemeProvider as NextThemeProvider,
 useTheme as useNextTheme,
} from "next-themes";

const StyledUIKitProvider: React.FC<React.PropsWithChildren> = ({
 children,
 ...props
}) => {
 const { resolvedTheme } = useNextTheme();
 return (
  <UIKitProvider theme={resolvedTheme === "dark" ? dark : light} {...props}>
   {children}
  </UIKitProvider>
 );
};

export default function Web() {
 return (
  <NextThemeProvider>
   <StyledUIKitProvider>
      <Text fontSize={20} color="primary">
        Tyluu
      </Text>
      <Loading />
   </StyledUIKitProvider>
  </NextThemeProvider>
 );
}
