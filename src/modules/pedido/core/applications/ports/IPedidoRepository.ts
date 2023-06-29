import { Fila } from '../../domain/models/Fila';
import { Pedido } from '../../domain/models/Pedido';
export interface IPedidoRepository {
  salvar(pedido: Pedido): Promise<void>;
  listar(): any;
  enviarParaFila(pedido: Pedido): Promise<void>;
  trocarStatusFila(id:number, status:string): Promise<void>;
  listagemFilas(): Promise<any>;
}
