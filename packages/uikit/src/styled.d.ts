import "styled-components";
import { RotShiTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends RotShiTheme {}
}
