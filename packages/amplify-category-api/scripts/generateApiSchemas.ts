import * as SchemaGenerator from 'amplify-cli-core';

type TypeDef = SchemaGenerator.TypeDef;

const AppsyncApiTypeDef: TypeDef = {
  typeName: 'AppSyncCLIInputs',
  service: 'appsync',
};

const ApigwTypeDef: TypeDef = {
  typeName: 'APIGatewayCLIInputs',
  service: 'API Gateway',
};

// Defines the type names and the paths to the TS files that define them
const apiCategoryTypeDefs: TypeDef[] = [AppsyncApiTypeDef, ApigwTypeDef];

const schemaGenerator = new SchemaGenerator.CLIInputSchemaGenerator(apiCategoryTypeDefs);
schemaGenerator.generateJSONSchemas(); // convert CLI input data into json schemas.
