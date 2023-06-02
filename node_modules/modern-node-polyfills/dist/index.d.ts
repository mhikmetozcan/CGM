import { RollupInjectOptions as RollupInjectOptions$1 } from '@rollup/plugin-inject';

type RollupInjectOptions = Pick<RollupInjectOptions$1 & {
    expressions?: {
        [str: string]: string;
    };
}, "modules" | "expressions">;

declare function polyfillPath(mod: string): Promise<string>;
declare function polyfillContent(mod: string): Promise<string>;
type Globals = {
    __filename?: string;
    __dirname?: string;
};
declare function inject(content: string, options: RollupInjectOptions, id?: string): Promise<string>;
type InjectmentWithNull = string | [string, string] | null;
type Modules = Partial<{
    process: InjectmentWithNull;
    Buffer: InjectmentWithNull;
    global: InjectmentWithNull;
    setImmediate: InjectmentWithNull;
    clearImmediate: InjectmentWithNull;
}>;
declare function polyfillGlobals(content: string, globals?: Globals, mods?: Modules): Promise<string>;

export { inject, polyfillContent, polyfillGlobals, polyfillPath };
