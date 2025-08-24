import type { BindKey } from "../types/bindkey";

export interface InputOptions {
  name: string;
  bind?: BindKey,
  labelText?: string;
  placeholder?: string;
  iconSrc?: string;
  iconAlt?: string;
  errorText?: string;
  textCenter?: boolean;
  initialValue?: number;
  format?: (n: number) => string;
}
