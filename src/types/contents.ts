
export type Contents = {
  id?:number;
  name?: string;
  isSelect?: boolean;
  children?: Contents[] ;
  articleCount?: number;
  aside?: string
}
