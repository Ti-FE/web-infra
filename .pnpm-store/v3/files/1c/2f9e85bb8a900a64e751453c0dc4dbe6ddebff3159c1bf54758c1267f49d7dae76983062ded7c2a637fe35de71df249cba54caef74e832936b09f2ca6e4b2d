"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const transform_1 = require("./transform");
const viteMdxTransclusion_1 = require("./viteMdxTransclusion");
const common_1 = require("./common");
function viteMdx(mdxOptions) {
    return createPlugin(mdxOptions || {});
}
exports.default = viteMdx;
viteMdx.withImports = (namedImports) => function mdx(mdxOptions) {
    return createPlugin(mdxOptions || {}, namedImports);
};
function createPlugin(mdxOptions, namedImports) {
    var _a, _b;
    let getMdxOptions;
    let globalMdxOptions = mdxOptions;
    if (typeof mdxOptions === 'function') {
        getMdxOptions = mdxOptions;
        globalMdxOptions = {};
    }
    // Ensure plugin arrays exist for other Vite plugins to manipulate.
    (_a = globalMdxOptions.remarkPlugins) !== null && _a !== void 0 ? _a : (globalMdxOptions.remarkPlugins = []);
    (_b = globalMdxOptions.rehypePlugins) !== null && _b !== void 0 ? _b : (globalMdxOptions.rehypePlugins = []);
    const mdxPlugin = {
        name: 'vite-plugin-mdx',
        mdxOptions: globalMdxOptions,
        configResolved({ root, plugins }) {
            const reactRefresh = plugins.find((p) => p.name === 'react-refresh');
            const transform = transform_1.createTransformer(root, namedImports);
            this.transform = function (code, id, ssr) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (/\.mdx?$/.test(id)) {
                        const mdxOptions = mergeOptions(globalMdxOptions, getMdxOptions === null || getMdxOptions === void 0 ? void 0 : getMdxOptions(id));
                        mdxOptions.filepath = id;
                        code = yield transform(code, mdxOptions);
                        const refreshResult = yield (reactRefresh === null || reactRefresh === void 0 ? void 0 : reactRefresh.transform.call(this, code, id + '.js', ssr));
                        return (refreshResult || {
                            code,
                            map: { mappings: '' }
                        });
                    }
                });
            };
        },
        closeBundle() {
            return __awaiter(this, void 0, void 0, function* () {
                yield transform_1.stopService();
            });
        }
    };
    return [
        mdxPlugin,
        // Let .mdx files import other .mdx and .md files without an import
        // specifier to automatically inline their content seamlessly.
        viteMdxTransclusion_1.viteMdxTransclusion(globalMdxOptions, getMdxOptions)
    ];
}
function mergeOptions(globalOptions, localOptions) {
    return Object.assign(Object.assign(Object.assign({}, globalOptions), localOptions), { remarkPlugins: common_1.mergeArrays(globalOptions.remarkPlugins, localOptions === null || localOptions === void 0 ? void 0 : localOptions.remarkPlugins), rehypePlugins: common_1.mergeArrays(globalOptions.rehypePlugins, localOptions === null || localOptions === void 0 ? void 0 : localOptions.rehypePlugins) });
}
//# sourceMappingURL=index.js.map