import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarQuickFilter } from "@mui/x-data-grid";
import moment from "moment";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UserProfile from "../../components/Nav/UserProfile";
import { CenterFocusStrong } from "@mui/icons-material";

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

const options = ["Editar Perfil", "Sair"];

const ITEM_HEIGHT = 48;

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

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const columns: GridColDef[] = [
        { field: "data", headerName: "Data" },
        { field: "jornada", headerName: "Jornada" },
        { field: "chegada", headerName: "Chegada" },
        { field: "inicioIntervalo", headerName: "Inicio Intervalo" },
        { field: "fimIntervalo", headerName: "Fim Intervalo" },
        { field: "saida", headerName: "Saída" },
        {
            field: "atrasos",
            headerName: "Atrasos",
            renderCell: (params) => <span style={{ color: "red" }}>{params.value}</span>,
        },
        {
            field: "horaExtra",
            headerName: "Hora extras",
            renderCell: (params) => <span style={{ color: "blue" }}>{params.value}</span>,
        },
        { field: "turno", headerName: "Turno" },
    ];

    return (
        <>
            <RegistroDePonto />

            <UserProfile />
            <div style={{ position: "absolute", top: "15px", right: "70px" }}>
                <IconButton
                    aria-label='more'
                    id='long-button'
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup='true'
                    onClick={handleClick}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id='long-menu'
                    MenuListProps={{
                        "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                        paper: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: "20ch",
                            },
                        },
                    }}>
                    {options.map((option) => (
                        <MenuItem
                            key={option}
                            onClick={handleClose}
                            sx={{
                                "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.08)",
                                },
                            }}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <DataGrid
                sx={{
                    justifyContent: "center",
                    textAlign: "center",
                    marginTop: 2,
                    width: "90vw",
                    height: "700px",
                    maxWidth: "1400px",
                    position: "absolute",
                    left: "260px",
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
