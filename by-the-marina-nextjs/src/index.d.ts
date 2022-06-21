declare module "*.jpg";
declare module "*.svg";
declare module "*.pdf";
declare module "*.yaml" {
  const data: any;
  export default data;
}
declare module "*.md" {
  const value: string; // markdown is just a string
  export default value;
}
