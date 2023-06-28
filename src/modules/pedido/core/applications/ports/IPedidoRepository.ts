import { Pedido } from "../../domain/models/Pedido";
export interface IPedidoRepository {
    salvar(pedido: Pedido): Promise<void>;
}
