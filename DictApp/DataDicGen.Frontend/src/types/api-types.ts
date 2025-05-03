export interface DatabaseConnectionDto {
  server: string;
  database: string;
  user: string;
  password: string;
}

export interface ConnectionResponseDto {
  token: string;
  message: string;
}

export interface ColumnSchemaDto {
  columnName: string;
  dataType: string;
  isNullable: boolean;
  maxLength?: number;
  isPrimaryKey: boolean;
  isForeignKey: boolean;
  description?: string;
}

export interface TableSchemaDto {
  tableName: string;
  tableDescription?: string;
  tablePurpose?: string;
  tableRelationships?: string;
  columns: ColumnSchemaDto[];
  dmlInserts?: string;
  ddlCreateScript?: string;
  storedProcedures?: string;
}