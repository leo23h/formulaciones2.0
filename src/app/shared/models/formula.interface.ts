export interface Formula{
    id: number;
    nombre: string;
    image: string;
    imageColor: string;
    color: string;
    lineColor: string;
    headerTable: string;
    cardHeader: string;
    imageHeader: string;
    etapas: Etapas[];
}

interface Etapas{
    fase: string;
    compuestos: Compuestos[];
}

interface Compuestos{
    nombre: string;
    INCI: string;
    uso: string;
    fabricante: string;
}