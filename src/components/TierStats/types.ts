import { ColumnDef } from "@tanstack/react-table";

export type StatsColumn<T> = ColumnDef<T> & {
  description?: string;
  longName?: string;
};
