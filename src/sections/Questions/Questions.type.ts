export type PanelKey = "panel1" | "panel2" | "panel3" | "panel4" | "panel5";

export type Question = {
  summary: string;
  details: string;
  expandValue: PanelKey;
};
