export class ProductModel {
  constructor(
    public cdG_PROD: string,
    public detalle: string,
    public medida: string,
    public cdG_CLASI: string,
    public swt_act: string,
    public clasificacion: string,
    public pK_PRODU: string,
    public diG_CTRL: string,
    public pK_ORIPROD: string,
    public pK_MEDIDA: string,
    public pK_CALIDAD: string,
    public pK_PAIS: string,
    public refe: string,
    public precio: number,
    public preciolista: number,
    public stock: string
  ) {}
}
