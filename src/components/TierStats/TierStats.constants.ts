import { StatsColumn } from "components/TierStats";

export const largeStatsSize = 20;
export const smallStatsSize = 10;
export const statsColumnDefs: StatsColumn<unknown>[] = [
  {
    accessorKey: "Team",
    size: 60,
  },
  {
    accessorKey: "Name",
    size: 50,
  },
  {
    accessorKey: "ppR",
    longName: "Role",
    description:
      "Parser predicted role: A simple decision tree to try and guess what a player's role is. Needs at least 3 games of data.",
  },
  {
    accessorKey: "GP",
    description: "Games Played",
    size: 5,
  },
  {
    accessorKey: "Rating",
    description:
      "CSC's f2 rating which combines a variety of factors and is contextualized for each match. See #stats-updates pins for more info",
    size: largeStatsSize,
  },
  {
    accessorKey: "K/R",
    description: "Average kills per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "ADR",
    description: "Average Damage per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "KAST",
    description:
      "Percentage of rounds that the player either got a kill, assist, was traded, or survived",
    size: largeStatsSize,
  },
  {
    accessorKey: "ODR",
    description: "Opening Duel Rate (First kills / First duels)",
    size: largeStatsSize,
  },
  {
    accessorKey: "Impact",
    description: "Impact Rating. See #stats-updates pins for more info",
    size: largeStatsSize,
  },
  {
    accessorKey: "CT #",
    longName: "CT Rating",
    description: "Your rating but only on your CT side rounds",
    size: largeStatsSize,
  },
  {
    accessorKey: "T #",
    longName: "T Rating",
    description: "Your rating but only on your T side rounds",
    size: largeStatsSize,
  },
  {
    accessorKey: "ADP",
    description:
      "This is the average order that your death occurred if you died. So a 2 means you are the 2nd to die on your team on average in rounds you die",
    size: largeStatsSize,
  },
  {
    accessorKey: "UD",
    description: "Average utility damage per match (per 30 rounds)",
    size: largeStatsSize,
  },
  {
    accessorKey: "EF",
    description: "Enemies flashed per match (per 30 rounds)",
    size: largeStatsSize,
  },
  {
    accessorKey: "F_Assists",
    description: "Average successful flash assists per match (per 30 rounds)",
    size: largeStatsSize,
  },
  {
    accessorKey: "Util",
    longName: "Util Thrown",
    description: "The number of grenades you throw per match (excludes decoys)",
    size: largeStatsSize,
  },
  {
    accessorKey: "HS",
    longName: "HS %",
    description: "Headshot percentage",
    size: largeStatsSize,
  },
  {
    accessorKey: "awp/R",
    description: "Awp kills per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "multi/R",
    description:
      "Each multikill is given a point value based on difficulty (2k = 1, 3k = 2, etc). These points are added together and divided by the amount of rounds played",
    size: largeStatsSize,
  },
  {
    accessorKey: "clutch/R",
    longName: "Clutch/R",
    description:
      "Each clutch is given a point value based on difficulty (1v1 = 1, 1v2 = 2, etc). These points are added together and divided by the amount of rounds played",
    size: largeStatsSize,
  },
  {
    accessorKey: "SuppR",
    longName: "Support Ratio",
    description:
      "The percentage of rounds that you had either an assist, a flash assist, or over 60 support damage",
    size: largeStatsSize,
  },
  {
    accessorKey: "SuppXr",
    longName: "Support Damage / R",
    description:
      "The average amount of damage you deal per round to players you do not kill but who still die in the round",
    size: largeStatsSize,
  },
  {
    accessorKey: "oda/R",
    longName: "ODA/R",
    description: "Opening Duel Attempts per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "entries/R",
    longName: "Entries/R",
    description:
      "Entries (first kill of the round on T side) per round. Can be misleading if a majority of rounds are CT side (where you cannot earn entries)",
    size: largeStatsSize,
  },
  {
    accessorKey: "trades/R",
    longName: "Trades/R",
    description: "Trade kills per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "TRatio",
    longName: "Trade Ratio",
    description: "The proportion of your deaths that were traded out",
    size: largeStatsSize,
  },
  {
    accessorKey: "saves/R",
    longName: "Saves/R",
    description: "Saves per round",
    size: largeStatsSize,
  },
  {
    accessorKey: "SRate",
    longName: "Survival Rate",
    description: "The percentage of rounds survived",
    size: largeStatsSize,
  },
  {
    accessorKey: "2k",
    description: "Total amount of rounds with 2 kills",
    size: smallStatsSize,
  },
  {
    accessorKey: "3k",
    description: "Total amount of rounds with 3 kills",
    size: smallStatsSize,
  },
  {
    accessorKey: "4k",
    description: "Total amount of rounds with 4 kills",
    size: smallStatsSize,
  },
  {
    accessorKey: "5k",
    description: "Total amount of rounds with 5 kills",
    size: smallStatsSize,
  },
  {
    accessorKey: "1v1",
    description: "Total amount of rounds with a successful 1 versus 1 clutch",
    size: smallStatsSize,
  },
  {
    accessorKey: "1v2",
    description: "Total amount of rounds with a successful 1 versus 2 clutch",
    size: smallStatsSize,
  },
  {
    accessorKey: "1v3",
    description: "Total amount of rounds with a successful 1 versus 3 clutch",
    size: smallStatsSize,
  },
  {
    accessorKey: "1v4",
    description: "Total amount of rounds with a successful 1 versus 4 clutch",
    size: smallStatsSize,
  },
  {
    accessorKey: "1v5",
    description: "Total amount of rounds with a successful 1 versus 5 clutch",
    size: smallStatsSize,
  },
  {
    accessorKey: "Rounds",
    description: "Rounds played",
    size: largeStatsSize,
  },
  {
    accessorKey: "Peak",
    description:
      "Your highest rating from a single match from the regular season",
    size: largeStatsSize,
  },
  {
    accessorKey: "Pit",
    description:
      "Your lowest rating from a single match from the regular season",
    size: largeStatsSize,
  },
  {
    accessorKey: "Form",
    description:
      "This is the average rating from your most recent 3 games (or fewer if you haven't played in more than 3 games)",
    size: largeStatsSize,
  },
  {
    accessorKey: "CONCY",
    longName: "Consistency",
    description:
      "This is the standard deviation of your rating. A lower value means you are more consistent",
    size: largeStatsSize,
  },
  {
    accessorKey: "Kills",
    description: "Total amount of kills",
    size: largeStatsSize,
  },
  {
    accessorKey: "Assists",
    description: "Total amount of assists",
    size: largeStatsSize,
  },
  {
    accessorKey: "Deaths",
    description: "Total amount of deaths",
    size: largeStatsSize,
  },
  {
    accessorKey: "MIP/r",
    size: largeStatsSize,
  },
  {
    accessorKey: "IWR",
    longName: "Impact on Won rounds Ratio",
    description:
      "The percentage of your impact points that were gained on rounds you won",
    size: largeStatsSize,
  },
  {
    accessorKey: "KPA",
    longName: "Kills Point Average",
    description:
      "The average amount of points given for a kill. This will be higher if your average kill is considered to be more impactful",
    size: largeStatsSize,
  },
  {
    accessorKey: "RWK",
    longName: "Rounds with Kills",
    description: "The percentage of rounds you got at least one kill",
    size: largeStatsSize,
  },
  {
    accessorKey: "Xdiff",
    longName: "Damage Difference",
    description:
      "The difference between your average damage dealt and average damage taken",
    size: largeStatsSize,
  },
  {
    accessorKey: "ea/R",
    longName: "Entry Attempts per Round",
    description:
      "The amount of rounds where you were in an opening duel on the T side",
    size: largeStatsSize,
  },
  {
    accessorKey: "ATD",
    longName: "Average Time to Death",
    description:
      "This is the amount of seconds before your death on rounds you die",
    size: largeStatsSize,
  },
  {
    accessorKey: "ctADP",
    longName: "CT Average Death Placement",
    description:
      "This is the average order that your death occurred if you died. So a 2 means you are the 2nd to die on your team on average in rounds you die. This only counts CT rounds",
    size: largeStatsSize,
  },
  {
    accessorKey: "tADP",
    longName: "T Average Death Placement",
    description:
      "This is the average order that your death occurred if you died. So a 2 means you are the 2nd to die on your team on average in rounds you die. This only counts T rounds",
    size: largeStatsSize,
  },
  {
    accessorKey: "EF/F",
    longName: "Enemies Flashed per Flash",
    description: "Enemies flashed per flash thrown",
    size: largeStatsSize,
  },
  {
    accessorKey: "Blind/EF",
    longName: "Enemy Blind Time per Flash",
    description: "Enemy blind time (in seconds) per enemy flashed",
    size: largeStatsSize,
  },
  {
    accessorKey: "X/nade",
    longName: "Dmg per frag grenade",
    description:
      "The average amount of damage you deal per frag grenade you throw",
    size: largeStatsSize,
  },
  {
    accessorKey: "AWP/ctr",
    longName: "AWP Kills per CT Round",
    description: "AWP Kills per round just looking at the CT side",
    size: largeStatsSize,
  },
  {
    accessorKey: "K/ctr",
    longName: "Kills on CT Rounds",
    description: "Kills just on the CT side",
    size: largeStatsSize,
  },
  {
    accessorKey: "lurks/tR",
    longName: "Lurks on T Rounds",
    description:
      "The number of rounds the player was consider a lurker across the T side",
    size: largeStatsSize,
  },
  {
    accessorKey: "wlp/L",
    longName: "Won Lurk Points per Lurk",
    description: "The average amount of won points on lurk rounds",
    size: largeStatsSize,
  },
];
