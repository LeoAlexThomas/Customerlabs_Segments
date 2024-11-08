export interface SegmentInterface {
  segment_name: string;
  schema: CustomInput[];
  unSelectedSchema: CustomInput | null;
}

export interface CustomInput {
  label: string;
  value: string;
}
