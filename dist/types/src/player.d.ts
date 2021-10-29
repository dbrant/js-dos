import { DosInstance, DosOptions } from "emulators-ui/dist/types/js-dos";
import { Hardware } from "./hardware-transport-layer";
export interface ClientId {
    namespace: string;
    id: string;
}
export declare type ClientIdSupplier = (userGesture: boolean) => Promise<ClientId | null>;
export interface DosPlayer extends DosInstance {
    bundleUrl: string | null;
}
export interface DosPlayerOptions extends DosOptions {
    title?: string;
    style?: "default" | "none";
    hardware?: Hardware;
    clientId?: ClientIdSupplier;
}
export declare type DosPlayerFactoryType = (root: HTMLDivElement, options?: DosPlayerOptions) => DosPlayer;
export declare function DosPlayer(root: HTMLDivElement, options?: DosPlayerOptions): DosPlayer;