import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarQuickFilter } from "@mui/x-data-grid";
import moment from "moment";
import { useState } from "react";
import { Outlet } from "react-router-dom";

interface IListagemPonto {
    id: number;
    data: string;
    jornada: string;
    chegada: string;
    inicioIntervalo: string;
    fimIntervalo: string;
    saida: string;
    atrasos: string;
    horaExtra: string;
    turno: string;
}

const QuickSearchToolbar = () => {
    return (
        <Box sx={{ p: 2, display: "flex", justifyContent: "end" }}>
            <GridToolbarQuickFilter placeholder='Digite para pesquisar' />
        </Box>
    );
};

export function ListagemDePonto() {
    const baseData = moment().format("DD/MM/YY");
    const baseHour = moment("2024-10-28T08:00Z").format("HH:mm");

    const [listagemPonto, setListagemPonto] = useState<IListagemPonto[]>([
        {
            id: 1,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 2,
            data: baseData,
            jornada: "07:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 3,
            data: baseData,
            jornada: "09:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 4,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 5,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 6,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 7,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 8,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 9,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
        {
            id: 10,
            data: baseData,
            jornada: "08:00 - 18:00",
            chegada: baseHour,
            inicioIntervalo: baseHour,
            fimIntervalo: baseHour,
            saida: baseHour,
            atrasos: "00:30",
            horaExtra: "01:00",
            turno: "diurno",
        },
    ]);

    const columns: GridColDef[] = [
        { field: "data", headerName: "Data" },
        { field: "jornada", headerName: "Jornada" },
        { field: "chegada", headerName: "Chegada" },
        { field: "inicioIntervalo", headerName: "Inicio Intervalo" },
        { field: "fimIntervalo", headerName: "Fim Intervalo" },
        { field: "saida", headerName: "Saída" },
        { field: "atrasos", headerName: "Atrasos" },
        { field: "horaExtra", headerName: "Hora extras" },
        { field: "turno", headerName: "Turno" },
    ];

    return (
        <>
            <RegistroDePonto />
            <DataGrid
                sx={{
                    marginTop: 2,
                    width: "1521px",
                    height: "602px",
                    position: "absolute",
                    top: "209px",
                    left: "290px",
                    borderRadius: "8px 0px 0px 0px",
                    border: "1px solid transparent",
                }}
                disableRowSelectionOnClick
                disableColumnMenu
                rows={listagemPonto}
                columns={columns}
                localeText={{
                    noRowsLabel: "Nenhum registro",
                    noResultsOverlayLabel: "Nenhum registro encontrado",
                    MuiTablePagination: { labelRowsPerPage: "Linhas por página" },
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{
                    toolbar: QuickSearchToolbar,
                }}
                pageSizeOptions={[10, 20, 30]}
            />
            <Outlet />
        </>
    );
}

const RegistroDePonto: React.FC = () => {
    return (
        <Box
            sx={{
                width: "139px",
                height: "24px",
                position: "absolute",
                top: "20px",
                left: "291px",
                gap: "0px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'manrope', sans-serif",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                textAlign: "left",
            }}>
            Registro de Ponto
        </Box>
    );
};

export default RegistroDePonto;
