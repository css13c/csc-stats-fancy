import React, { useMemo, useState } from "react";
import {
  ColumnPinningState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  Sorting,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import useStatsContext from "components/StatsContext/StatsContext";
import {
  largeStatsSize,
  smallStatsSize,
  statsColumnDefs,
} from "components/TierStats/TierStats.constants";
import { toNormalDist } from "helpers/math.helpers";
import ScatterPlot from "components/Graphs/ScatterPlot/ScatterPlot";
import { zipCoordinates } from "helpers/graphs.helpers";
import classNames from "classnames";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

export interface TierStatsProps {
  tier: "prospect";
}

const widthBySize: { [k: number]: string } = {
  [largeStatsSize]: "w-20 max-w-20",
  [smallStatsSize]: "w-10 max-w-10",
};

const TierStats = ({ tier }: TierStatsProps) => {
  const { data } = useStatsContext();

  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnPinning, setColumnPinning] = useState<ColumnPinningState>({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const table = useReactTable({
    data: data || [],
    columns: statsColumnDefs,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnPinningChange: setColumnPinning,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { x, y } = useMemo(() => {
    if (!data) {
      return {
        x: [],
        y: [],
      };
    }

    const mmr = data.map((x) => Number.parseFloat(x["MMR"]));
    const rating = data.map((x) => Number.parseFloat(x["Rating"]));

    return {
      y: toNormalDist(mmr),
      x: rating,
    };
  }, [data]);

  return (
    <div className="max-w-full">
      {
        //<ScatterPlot data={zipCoordinates(x, y)} showTrend />
      }
      <span>Stats table</span>
      <table className="max-w-full">
        <thead className="border border-gray-500 border-collapse h-6">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                console.log(header.getSize());
                const sort = header.column.getIsSorted() as string;
                const size = header.column.getSize();
                return (
                  <th
                    key={header.id}
                    className={classNames(
                      "border-x border-gray-500 border-collapse",
                      widthBySize[size],
                      {
                        "cursor-pointer select-none": header.column.getCanSort,
                      }
                    )}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.isPlaceholder ? null : (
                      <div className="flex relative justify-center items-center whitespace-nowrap">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <ArrowUpIcon
                          className={classNames("size-5 absolute right-0", {
                            "rotate-180": sort === "desc",
                            hidden: !sort || sort === "false",
                          })}
                        />
                      </div>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="border-y border-gray-500 border-collapse"
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={`w-${cell.column.getSize()} border-x border-gray-500 border-collapse`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TierStats;
