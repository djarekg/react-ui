import type { CodegenConfig } from '@graphql-codegen/cli';

const config = {
  overwrite: true,
  debug: true,
  verbose: true,
  errorsOnly: false,
  schema: '../api/prisma/schema.graphql',
  documents: ['graphql/**/*.graphql'],
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: true,
  config: {
    avoidOptionals: false,
    documentVariableSuffix: '',
    numericEnums: true,
    enumsAsConst: true,
    defaultScalarType: 'unknown',
    overwrite: true,
    declarationKind: 'type',
    immutableTypes: true,
    dedupeOperationSuffix: true,
    maybeValue: 'T | undefined',
    inputMaybeValue: 'T | undefined',
    skipTypename: true,
    useIndexSignature: true,
    useTypeImports: true,
    // skipTypeNameForRoot: true,
    // onlyOperationTypes: true,
    // flattenGeneratedTypes: true,
    // flattenGeneratedTypesIncludeFragments: true,
  },
  generates: {
    './app/types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
} satisfies CodegenConfig;

export default config;
